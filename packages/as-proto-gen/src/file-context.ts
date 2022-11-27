import { FileDescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb";
import { GeneratorContext } from "./generator-context";
import { ScopeContext } from "./scope-context";
import * as assert from "assert";

export class FileContext {
  private readonly moduleScopeContext: ScopeContext;
  private readonly generatorContext: GeneratorContext;
  private readonly fileDescriptor: FileDescriptorProto;
  private readonly registeredImports: Map<string, Map<string, string>> =
    new Map();
  private readonly registeredDefinitions: Set<string> = new Set();

  constructor(
    generatorContext: GeneratorContext,
    fileDescriptor: FileDescriptorProto
  ) {
    this.generatorContext = generatorContext;
    this.fileDescriptor = fileDescriptor;
    this.moduleScopeContext = new ScopeContext(this);
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
    const safeImportName =
      importNames.get(importName) ||
      this.moduleScopeContext.registerName(importName);

    importNames.set(importName, safeImportName);
    this.registeredImports.set(importPath, importNames);

    return [safeImportName, ...importNamespace].join(".");
  }

  registerDefinition(definitionNamePath: string): string {
    const [definitionName] = definitionNamePath.split(".");

    if (!this.registeredDefinitions.has(definitionName)) {
      // we assume that definitions are registered before imports
      assert.ok(!this.moduleScopeContext.hasRegisteredName(definitionName));

      this.registeredDefinitions.add(definitionName);
      // reserve this name
      this.moduleScopeContext.registerName(definitionName);
    }

    return definitionNamePath;
  }

  getImportsCode(): string {
    let importLines: string[] = [];
    for (const [importPath, importNames] of this.registeredImports) {
      const importFields: string[] = [];
      for (const [importName, safeImportName] of importNames) {
        const isAliased = importName !== safeImportName;
        importFields.push(
          isAliased ? `${importName} as ${safeImportName}` : `${importName}`
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
}
