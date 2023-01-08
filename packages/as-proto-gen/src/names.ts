/**
 * Removes extension suffix from the file path
 * @param filePath File path to remove extension from
 * @param extension Extension to remove
 * @returns File path without extension
 */
export function getPathWithoutExtension(
  filePath: string,
  extension: string
): string {
  return filePath.endsWith(extension)
    ? filePath.slice(0, -extension.length)
    : filePath;
}

/**
 * Gets protobuf representation of a "field type name" which starts with .
 */
export function getFieldTypeName(
  filePackage: string | undefined,
  typeName: string
): string {
  let fieldTypeName = "";
  if (filePackage) {
    fieldTypeName += ensureLeadingDot(filePackage);
  }
  if (typeName) {
    fieldTypeName += ensureLeadingDot(typeName);
  }
  return fieldTypeName;
}

/**
 * Ensures that a given string starts with a dot
 */
function ensureLeadingDot(string: string): string {
  return string.startsWith(".") ? string : "." + string;
}

/**
 * Extracts type name from a "field type name" (protobuf representation which starts with .)
 */
export function getTypeName(fieldTypeName: string): string {
  return fieldTypeName.startsWith(".") ? fieldTypeName.slice(1) : fieldTypeName;
}

/**
 * Ensures that relative import has dot at the beginning.
 */
export function ensureRelativeImportDot(importName: string): string {
  return importName.startsWith(".") || importName.startsWith("/")
    ? importName
    : `./${importName}`;
}
