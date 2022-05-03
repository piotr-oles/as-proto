import { FileDescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb";
import { GeneratorContext } from "./generator-context";
import { getRelativeImport, isRelativeImport } from "./names";

export class FileContext {
  private readonly generatorContext: GeneratorContext;
  private readonly fileDescriptor: FileDescriptorProto;
  private readonly registeredImports: Map<string, Map<string, string>> = new Map();
  private readonly registeredDefinitions: Set<string> = new Set();
  private readonly importNames: Set<string> = new Set();

  constructor(generatorContext: GeneratorContext, fileDescriptor: FileDescriptorProto) {
    this.generatorContext = generatorContext;
    this.fileDescriptor = fileDescriptor;
  }

  getGeneratorContext(): GeneratorContext {
    return this.generatorContext;
  }

  getFileDescriptor(): FileDescriptorProto {
    return this.fileDescriptor;
  }

  registerImport(importNamePath: string, importPath: string): string {
    [importNamePath, importPath] = this.getRelativeImportPath(importNamePath, importPath);

    const [importName, ...importNamespace] = importNamePath.split(".");

    if (!importName) {
      throw new Error(`Cannot register empty import of ${importNamePath} from ${importPath}.`);
    }

    const importNames = this.registeredImports.get(importPath) || new Map<string, string>();
    const uniqueImportName = importNames.get(importName) || this.getUniqueName(importName);

    importNames.set(importName, uniqueImportName);
    this.registeredImports.set(importPath, importNames);

    return [uniqueImportName, ...importNamespace].join(".");
  }

  getRelativeImportPath(importNamePath: string, importPath: string): [string, string] {
    if (isRelativeImport(importPath)) {
      const importName = importNamePath.split(".");
      const fileDescriptorPaths = (this.fileDescriptor.getName() || "").split("/");
      const importPaths = importPath.split("/");
      const returnPath = importPath.split("/");
      let done = false;
      let sliceLen = 1;

      if (importPaths[0] == ".") {
        importPaths.shift();
        returnPath.shift();
      }

      for (let i = 0; i < fileDescriptorPaths.length - 1; i++) {
        if (fileDescriptorPaths[i] === importPaths[i] && !done) {
          returnPath.shift();
          importName.shift();
        } else {
          returnPath.unshift("..");
          sliceLen++;
          done = true;
        }
      }

      return [importName.join("."), getRelativeImport(returnPath.slice(0, sliceLen).join("/"))];
    }

    return [importNamePath, importPath];
  }

  registerDefinition(definitionNamePath: string): string {
    const [definitionName] = definitionNamePath.split(".");

    if (!this.registeredDefinitions.has(definitionName)) {
      if (this.importNames.has(definitionName)) {
        // update import to prevent name collision
        const nextUniqueImportName = this.getUniqueName(definitionName);
        for (const [importPath, importNames] of this.registeredImports) {
          for (const [importName, uniqueImportName] of importNames) {
            if (uniqueImportName === definitionName) {
              importNames.set(importName, nextUniqueImportName);
            }
          }
        }
      }

      this.registeredDefinitions.add(definitionName);
    }
    // reserve this name
    this.importNames.add(definitionName);

    return definitionNamePath;
  }

  getImportsCode(): string {
    let importLines: string[] = [];
    for (const [importPath, importNames] of this.registeredImports) {
      const importFields: string[] = [];
      for (const [importName, uniqueImportName] of importNames) {
        const isAliased = importName !== uniqueImportName;
        importFields.push(isAliased ? `${importName} as ${uniqueImportName}` : `${importName}`);
      }
      importLines.push(`import { ${importFields.join(", ")} } from ${JSON.stringify(importPath)};`);
    }

    return importLines.join("\n");
  }

  private getUniqueName(importName: string): string {
    let uniqueImportName = importName;
    let uniqueSuffix = 2;
    while (this.importNames.has(uniqueImportName)) {
      uniqueImportName = `${importName}_${uniqueSuffix++}`;
    }
    return uniqueImportName;
  }
}
