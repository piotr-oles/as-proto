import {
  DescriptorProto,
  EnumDescriptorProto,
} from "google-protobuf/google/protobuf/descriptor_pb";
import * as assert from "assert";

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

/**
 * Get namespaced type name from descriptors.
 */
export function getNamespacedTypeName(
  messageOrEnumDescriptor: DescriptorProto | EnumDescriptorProto,
  parentMessageDescriptors: DescriptorProto[]
) {
  assert.ok(messageOrEnumDescriptor.getName() !== undefined);
  return [
    ...parentMessageDescriptors.map((parentMessageDescriptor) =>
      parentMessageDescriptor.getName()
    ),
    messageOrEnumDescriptor.getName(),
  ].join(".");
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
    fieldTypeName += filePackage.startsWith(".")
      ? filePackage
      : "." + filePackage;
  }
  if (typeName) {
    fieldTypeName += typeName.startsWith(".") ? typeName : "." + typeName;
  }
  return fieldTypeName;
}

/**
 * Ensures that relative import has dot at the beginning.
 */
export function ensureRelativeImportDot(importName: string): string {
  return importName.startsWith(".") || importName.startsWith("/")
    ? importName
    : `./${importName}`;
}
