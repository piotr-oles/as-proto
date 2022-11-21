export const RESERVED_KEYWORDS: Set<string> = new Set([
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "enum",
  "export",
  "extends",
  "false",
  "finally",
  "for",
  "function",
  "if",
  "import",
  "in",
  "instanceof",
  "new",
  "null",
  "return",
  "super",
  "switch",
  "this",
  "throw",
  "true",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
]);

export function isReservedKeyword(word: string): boolean {
  return RESERVED_KEYWORDS.has(word);
}

/**
 * Suffixes name if it's a reserved keyword
 */
export function getSafeName(name: string): string {
  return isReservedKeyword(name) ? `${name}_` : name;
}
