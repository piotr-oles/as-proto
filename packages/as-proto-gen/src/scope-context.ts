import { FileContext } from "./file-context";
import { getSafeName } from "./reserved-keywords";

export class ScopeContext {
  private readonly fileContext: FileContext;
  private readonly registeredNames: Set<string>;

  constructor(fileContext: FileContext, reservedNames: string[] = []) {
    this.fileContext = fileContext;
    this.registeredNames = new Set(reservedNames);
  }

  getFileContext(): FileContext {
    return this.fileContext;
  }

  /**
   * Registers a new name in a scope.
   */
  registerName(preferredName: string): string {
    let freeName = getSafeName(preferredName);
    let freeSuffix = 2;
    while (this.registeredNames.has(freeName)) {
      freeName = `${preferredName}_${freeSuffix++}`;
    }
    this.registeredNames.add(freeName);

    return freeName;
  }

  /**
   * Checks if given name is registered in a scope.
   */
  hasRegisteredName(name: string): boolean {
    return this.registeredNames.has(name);
  }
}
