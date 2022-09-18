import { FileDescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb";
import { GeneratorContext } from "./generator-context";
import { isRelativeImport, ensureRelativeImportDot } from "./names";

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

  registerImport(importRef: string, importPath: string): string {
    if (isRelativeImport(importPath)) {
      [importRef, importPath] = this.adjustImport(importRef, importPath);
    }

    const [importName, ...importNamespace] = importRef.split(".");

    if (!importName) {
      throw new Error(
        `Cannot register empty import of ${importRef} from ${importPath}.`
      );
    }
    const importNames =
      this.registeredImports.get(importPath) || new Map<string, string>();
    const uniqueImportName =
      importNames.get(importName) || this.getUniqueName(importName);

    importNames.set(importName, uniqueImportName);
    this.registeredImports.set(importPath, importNames);
    this.importNames.add(uniqueImportName);

    return [uniqueImportName, ...importNamespace].join(".");
  }

  hasImportName(importName: string): boolean {
    return this.importNames.has(importName);
  }

  registerDefinition(definitionNamePath: string, namespace?: string): string {
    let [definitionName] = definitionNamePath.split(".");

    if (namespace) {
      definitionName = `${namespace}.${definitionName}`;
    }

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

  hasDefinition(definitionName: string): boolean {
    return this.registeredDefinitions.has(definitionName);
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

  adjustImport(importRef: string, importPath: string): [string, string] {
    const filePath = this.fileDescriptor.getName() || "";

    const filePathParts = filePath.split("/");
    const importPathParts = importPath.split("/");
    const importRefParts = importRef.split(".");

    filePathParts.pop(); // Skip the filename

    if (importPathParts[0] === ".") {
      importPathParts.shift(); // Skip a leading dot
    }

    // Find the common path between the source file and the imported file
    const commonPathLength = this.commonPrefixLength(
      filePathParts,
      importPathParts
    );

    // Remove the common path from the import reference
    importRefParts.splice(0, commonPathLength);

    // Adjust the import path based on the difference in nesting level
    const importedModule = importPathParts[commonPathLength];
    const nestingDiff = filePathParts.length - commonPathLength;
    const adjustedImportPath = "../".repeat(nestingDiff) + importedModule;

    return [
      importRefParts.join("."),
      ensureRelativeImportDot(adjustedImportPath),
    ];
  }

  /**
   * @returns the index of the first element that differs between arrays,
   * which equals to the number of common elements at the beginning.
   */
  private commonPrefixLength<T>(array: T[], otherArray: T[]): number {
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== otherArray[i]) {
        return i;
      }
    }
    return array.length;
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
