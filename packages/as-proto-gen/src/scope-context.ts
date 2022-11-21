import { FileContext } from "./file-context";
import { getSafeName } from "./reserved-keywords";

export class ScopeContext {
  private readonly fileContext: FileContext;
  private readonly reservedNames: Set<string>;

  constructor(fileContext: FileContext, reservedNames: string[] = []) {
    this.fileContext = fileContext;
    this.reservedNames = new Set(reservedNames);
  }

  getFileContext(): FileContext {
    return this.fileContext;
  }

  /**
   * Returns a name that is not already reserved.
   */
  getFreeName(preferredName: string): string {
    let freeName = getSafeName(preferredName);
    let freeSuffix = 2;
    while (this.reservedNames.has(freeName)) {
      freeName = `${preferredName}_${freeSuffix++}`;
    }
    return freeName;
  }
}
