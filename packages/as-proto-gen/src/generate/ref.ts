import * as assert from "assert";
import { FieldDescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb";

import { FileContext } from "../file-context";
import { getPathWithoutProto, getRelativeImport, getTypeName } from "../names";

export function generateRef(fieldDescriptor: FieldDescriptorProto, fileContext: FileContext): string {
  const fieldTypeName = fieldDescriptor.getTypeName();
  assert.ok(fieldTypeName !== undefined);

  const fileDescriptor = fileContext.getGeneratorContext().getFileDescriptorByFieldTypeName(fieldTypeName);
  assert.ok(fileDescriptor !== undefined);

  const isSameFile = fileContext.getFileDescriptor() === fileDescriptor;
  const typeName = getTypeName(fieldTypeName);

  if (isSameFile) {
    const types = typeName.split('.');
    for (let i = 0; i < types.length -1; i++) {
      if (fileContext.hasDefinition(types.slice(i).join('.'))) {
        return types.slice(i).join('.')
      }
    }
    return fileContext.registerDefinition(typeName.split(".").at(-1) as string);
  } else {
    const fileName = fileDescriptor.getName();
    assert.ok(fileName);
    return fileContext.registerImport(typeName, getRelativeImport(getPathWithoutProto(fileName)));
  }
}
