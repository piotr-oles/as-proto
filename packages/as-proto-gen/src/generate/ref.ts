import {
  getPathWithoutProto,
  ensureRelativeImportDot,
  getTypeName,
} from "../names";
import { FileContext } from "../file-context";
import * as assert from "assert";
import { FieldDescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb";

export function generateRef(
  fieldDescriptor: FieldDescriptorProto,
  fileContext: FileContext
): string {
  const fieldTypeName = fieldDescriptor.getTypeName();
  assert.ok(fieldTypeName !== undefined);

  const fileDescriptor = fileContext
    .getGeneratorContext()
    .getFileDescriptorByFieldTypeName(fieldTypeName);
  assert.ok(fileDescriptor !== undefined);

  const isSameFile = fileContext.getFileDescriptor() === fileDescriptor;
  const typeName = getTypeName(fieldTypeName);

  if (isSameFile) {
    const nestingLevel = fileContext
      .getGeneratorContext()
      .getNestingLevelByFieldTypeName(fieldTypeName);
    assert.ok(nestingLevel !== undefined);

    return fileContext.registerDefinition(
      stripPackageNamespace(typeName, nestingLevel)
    );
  } else {
    const fileName = fileDescriptor.getName();
    assert.ok(fileName);

    fileContext.getGeneratorContext().addProtoDependency(fileName);

    return fileContext.registerImport(
      typeName,
      ensureRelativeImportDot(getPathWithoutProto(fileName))
    );
  }
}

function stripPackageNamespace(typeName: string, nestingLevel: number): string {
  return typeName
    .split(".")
    .slice(-1 - nestingLevel)
    .join(".");
}
