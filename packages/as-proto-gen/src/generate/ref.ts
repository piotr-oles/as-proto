import { ensureRelativeImportDot } from "../names";
import { FileContext } from "../file-context";
import * as assert from "assert";
import * as path from "path";
import { FieldDescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb";
import { getOutputFilePath } from "./file";

export function generateRef(
  fieldDescriptor: FieldDescriptorProto,
  fileContext: FileContext
): string {
  assert.ok(
    fieldDescriptor.getType() === FieldDescriptorProto.Type.TYPE_MESSAGE ||
      fieldDescriptor.getType() === FieldDescriptorProto.Type.TYPE_ENUM
  );
  const generatorContext = fileContext.getGeneratorContext();

  const fileDescriptor =
    generatorContext.getFileDescriptorByFieldDescriptor(fieldDescriptor);
  assert.ok(fileDescriptor !== undefined);

  const messageOrEnumDescriptor =
    generatorContext.getMessageOrEnumByFieldDescriptor(fieldDescriptor);
  assert.ok(messageOrEnumDescriptor !== undefined);

  const parentMessageDescriptors =
    generatorContext.getParentMessageDescriptorsByFieldDescriptor(
      fieldDescriptor
    );
  assert.ok(parentMessageDescriptors !== undefined);

  const messageOrEnumFilePath = getOutputFilePath(
    fileDescriptor,
    messageOrEnumDescriptor,
    parentMessageDescriptors
  );
  const relativeMessageOrEnumFilePath = path.relative(
    path.dirname(fileContext.getFilePath()),
    messageOrEnumFilePath
  );

  const messageOrEnumName = messageOrEnumDescriptor.getName();
  assert.ok(messageOrEnumName !== undefined);

  return fileContext.registerImport(
    messageOrEnumName,
    ensureRelativeImportDot(relativeMessageOrEnumFilePath)
  );
}
