import { generateMessage } from "./message";
import { FileDescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb";
import {
  CodeGeneratorRequest,
  CodeGeneratorResponse,
  Version,
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

  const importsCode = fileContext.getImportsCode();
  const typesCode = types.join("\n\n");

  return [importsCode, typesCode].join("\n");
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

    // Generate a file map for `_export.ts`
    for (let i = 1; i < filePath.length; i++) {
      const exportFilePath = path.join(...filePath.slice(0, i));
      const toExportPath = filePath[i] as string;
      if (exportFileMap.has(exportFilePath)) {
        exportFileMap.get(exportFilePath)?.add(toExportPath);
      } else {
        exportFileMap.set(exportFilePath, new Set<string>().add(toExportPath));
      }
    }

    // Generate a file map for `index.ts`
    for (let i = 0; i < filePath.length - 1; i++) {
      let pkg = packages[i];

      // If a file does not define a package, put it in a package named
      // after the directory
      if (pkg == undefined || pkg == "") {
        pkg = filePath[i] as string;
      }

      const indexFilePath = path.join(...filePath.slice(0, i + 1));

      if (indexFileMap.has(indexFilePath)) {
        indexFileMap.get(indexFilePath)?.add(pkg);
      } else {
        indexFileMap.set(indexFilePath, new Set<string>().add(pkg));
      }
    }
  }

  // Generate the `_export.ts` files
  for (const filePath of exportFileMap.keys()) {
    let code: string = "";
    const exportPath = exportFileMap.get(filePath) as Set<string>;

    for (const target of exportPath.values()) {
      // Get the package name from a file map (if it exists)
      // Otherwise, export `*`
      const exportName = indexFileMap.get(path.join(filePath, target));

      if (exportName) {
        const exports = [...exportName].join(", ");
        code += `export { ${exports} } from "./${target}";\n`;
      } else {
        code += `export * from "./${target}";\n`;
      }
    }

    const filename = path.join(filePath, "_export.ts");

    addFile(filename, code, codeGenResponse, compilerVersion);
  }

  // Generate the `index.ts` files
  let rootIndex = "";

  for (const [filepath, pkgs] of indexFileMap) {
    let code: string = "";

    for (const target of pkgs) {
      code += `import * as ${target} from "./_export";\n`;
    }
    code += "\n";
    code += `export { ${[...pkgs].join(", ")} };\n`;

    const filename = path.join(filepath, "index.ts");

    addFile(filename, code, codeGenResponse, compilerVersion);

    // Add an export for the root index file
    if (filepath.split("/").length === 1) {
      rootIndex += `export { ${[...pkgs].join(", ")} } from "./${filepath}";\n`;
    }
  }

  if (rootIndex != "") {
    addFile("./index.ts", rootIndex, codeGenResponse, compilerVersion);
  }
}
