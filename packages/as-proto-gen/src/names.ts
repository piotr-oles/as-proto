/**
 * Removes .proto suffix from the file name
 */
export function getPathWithoutProto(fileName: string): string {
  const extension = ".proto";
  return fileName.endsWith(extension)
    ? fileName.slice(0, -extension.length)
    : fileName;
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
    fieldTypeName += "." + filePackage;
  }
  if (typeName) {
    fieldTypeName += "." + typeName;
  }
  return fieldTypeName;
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

/**
 * Checks if an import is relative.
 */
export function isRelativeImport(importName: string): boolean {
  return importName.startsWith(".") ? true : false;
}
