export function getPathWithoutProto(fileName: string): string {
  const extension = ".proto";
  return fileName.endsWith(extension) ? fileName.slice(0, -extension.length) : fileName;
}

export function getFieldTypeName(filePackage: string | undefined, typeName: string): string {
  let fieldTypeName = ".";
  if (filePackage) {
    fieldTypeName += filePackage + ".";
  }
  fieldTypeName += typeName;
  return fieldTypeName;
}

export function getTypeName(fieldTypeName: string): string {
  return fieldTypeName.startsWith(".") ? fieldTypeName.slice(1) : fieldTypeName;
}

export function getRelativeImport(importName: string): string {
  return importName.startsWith(".") ? importName : `./${importName}`;
}

export function isRelativeImport(importName: string): boolean {
  return importName.startsWith(".") ? true : false;
}
