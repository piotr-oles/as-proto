import { generateMessage } from "./message";
import { FileDescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb";
import {
  CodeGeneratorRequest,
  CodeGeneratorResponse,
  Version
} from "google-protobuf/google/protobuf/compiler/plugin_pb";
import { FileContext } from "../file-context";
import { generateEnum } from "./enum";
import { generateHeaderComment } from "./header";
import { GeneratorContext } from "../generator-context";
import { getPathWithoutProto } from "../names";
import prettier from "prettier";
import * as assert from "assert";
import * as path from "path";

export function generateFile(
  fileDescriptor: FileDescriptorProto,
  fileContext: FileContext,
  compilerOptions: Set<string>
): string {
  const fileName = fileDescriptor.getName();
  assert.ok(fileName);

  const types: string[] = [];
  for (const messageDescriptor of fileDescriptor.getMessageTypeList()) {
    types.push(
      generateMessage(messageDescriptor, fileContext, compilerOptions)
    );
  }
  for (const enumDescriptor of fileDescriptor.getEnumTypeList()) {
    types.push(generateEnum(enumDescriptor, fileContext));
  }

  return [
    fileContext.getImportsCode(),
    types.join("\n\n"),
  ].join("\n");
}

export function addFile(
  filename: string,
  code: string,
  codeGenResponse: CodeGeneratorResponse,
  compilerVersion: Version | undefined
): void {
  const header = generateHeaderComment(compilerVersion);
  let formattedCode = header + "\n\n" + code;

  try {
    formattedCode = prettier.format(formattedCode, {
      parser: "typescript",
    });
  } catch (error) {
    console.error(error);
  }

  const outputFile = new CodeGeneratorResponse.File();
  outputFile.setName(filename);
  outputFile.setContent(formattedCode);
  codeGenResponse.addFile(outputFile);
}

export function generateExport(
  codeGenRequest: CodeGeneratorRequest,
  codeGenResponse: CodeGeneratorResponse,
  generatorContext: GeneratorContext,
  compilerVersion: Version | undefined
) {
  const exportFileMap = new Map<string, Set<string>>();
  const indexFileMap = new Map<string, Set<string>>();

  for (const filename of codeGenRequest.getFileToGenerateList()) {
    const packages =
      generatorContext
        .getFileDescriptorByFileName(filename)
        ?.getPackage()
        ?.split(".") || [];

    const filePath = getPathWithoutProto(filename).split("/");

    // Generate the map of file for the _export.ts file and the path they
    // should each export
    for (let i = 1; i < filePath.length; i++) {
      const exportFilePath = path.join(...filePath.slice(0, i));
      const toExportPath = filePath[i] as string;
      if (exportFileMap.has(exportFilePath)) {
        exportFileMap.get(exportFilePath)?.add(toExportPath);
      } else {
        exportFileMap.set(exportFilePath, new Set<string>().add(toExportPath));
      }
    }

    // Generate the map of file for index.ts file and the pkg they should
    // each import and re-export
    for (let i = 0; i < filePath.length - 1; i++) {
      const indexFilePath = path.join(...filePath.slice(0, i + 1));
      let pkg = packages[i];
      if (pkg == undefined || pkg == "") {
        // When the file is not defining a package we include it
        // in a package named after the directory
        pkg = filePath[i] as string;
      }

      // We can have more than one element in the set if proto file in the
      // same directory are in different package.
      if (indexFileMap.has(indexFilePath)) {
        indexFileMap.get(indexFilePath)?.add(pkg);
      } else {
        indexFileMap.set(indexFilePath, new Set<string>().add(pkg));
      }
    }
  }

  // Generate the _export.ts files
  for (const filepath of exportFileMap.keys()) {
    const filename = path.join(filepath, "_export.ts");
    let code: string = "";
    const exportPath = exportFileMap.get(filepath) as Set<string>;
    for (const target of exportPath.values()) {
      // Get the package name from the indexFileMap if it exist.
      // Otherwise we export "*".
      const exportName = indexFileMap.get(path.join(filepath, target));
      if (exportName) {
        code += `export { ${[...exportName].join(
          ", "
        )} } from "./${target}";\n`;
      } else {
        code += `export * from "./${target}";\n`;
      }
    }
    addFile(filename, code, codeGenResponse, compilerVersion);
  }

  // Generate the index.ts files
  let rootIndex = "";
  for (const [filepath, pkgs] of indexFileMap) {
    const filename = path.join(filepath, "index.ts");
    let code: string = "";
    for (const target of pkgs) {
      code += `import * as ${target} from "./_export";\n`;
    }
    code += `export { ${[...pkgs].join(", ")} };\n`;
    addFile(filename, code, codeGenResponse, compilerVersion);

    // Add export for rootIndex file
    if (filepath.split("/").length == 1) {
      rootIndex += `export { ${[...pkgs].join(", ")} } from "./${filepath}";\n`;
    }
  }

  if (rootIndex != "") {
    addFile("./index.ts", rootIndex, codeGenResponse, compilerVersion);
  }
}
