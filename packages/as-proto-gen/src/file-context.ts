import { FileDescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb";
import { GeneratorContext } from "./generator-context";

export class FileContext {
  private readonly generatorContext: GeneratorContext;
  private readonly fileDescriptor: FileDescriptorProto;
  private readonly registeredImports: Map<string, Map<string, string>> =
    new Map();
  private readonly registeredDefinitions: Set<string> = new Set();
  private readonly importNames: Set<string> = new Set();

  constructor(
    generatorContext: GeneratorContext,
    fileDescriptor: FileDescriptorProto
  ) {
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
    const [importName, ...importNamespace] = importNamePath.split(".");

    if (!importName) {
      throw new Error(
        `Cannot register empty import of ${importNamePath} from ${importPath}.`
      );
    }
    const importNames =
      this.registeredImports.get(importPath) || new Map<string, string>();
    const uniqueImportName =
      importNames.get(importName) || this.getUniqueName(importName);

    importNames.set(importName, uniqueImportName);
    this.registeredImports.set(importPath, importNames);

    return [uniqueImportName, ...importNamespace].join(".");
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
        importFields.push(
          isAliased ? `${importName} as ${uniqueImportName}` : `${importName}`
        );
      }
      importLines.push(
        `import { ${importFields.join(", ")} } from ${JSON.stringify(
          importPath
        )};`
      );
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
