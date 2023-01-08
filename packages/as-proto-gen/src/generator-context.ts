import {
  FileDescriptorProto,
  DescriptorProto,
  EnumDescriptorProto,
  FieldDescriptorProto,
} from "google-protobuf/google/protobuf/descriptor_pb";
import { getFieldTypeName, getNamespacedTypeName } from "./names";
import assert from "assert";

type FileName = string;
type FieldTypeName = string;

export class GeneratorContext {
  private fileNameToFileDescriptor: Map<FileName, FileDescriptorProto> =
    new Map();
  private typeNameToFileDescriptor: Map<FieldTypeName, FileDescriptorProto> =
    new Map();
  private typeNameToMessageDescriptor: Map<FieldTypeName, DescriptorProto> =
    new Map();
  private typeNameToEnumDescriptor: Map<FieldTypeName, EnumDescriptorProto> =
    new Map();
  private typeNameToParentMessageDescriptors: Map<
    FieldTypeName,
    DescriptorProto[]
  > = new Map();

  registerFile(fileDescriptor: FileDescriptorProto): void {
    const fileName = fileDescriptor.getName();
    if (fileName) {
      this.fileNameToFileDescriptor.set(fileName, fileDescriptor);
    }

    for (const messageDescriptor of fileDescriptor.getMessageTypeList()) {
      this.registerMessage(fileDescriptor, messageDescriptor);
    }

    for (const enumDescriptor of fileDescriptor.getEnumTypeList()) {
      this.registerEnum(fileDescriptor, enumDescriptor);
    }
  }

  registerMessage(
    fileDescriptor: FileDescriptorProto,
    messageDescriptor: DescriptorProto,
    parentMessageDescriptors: DescriptorProto[] = []
  ) {
    const filePackage = fileDescriptor.getPackage();
    const messageName = getNamespacedTypeName(
      messageDescriptor,
      parentMessageDescriptors
    );
    const fieldTypeName = getFieldTypeName(filePackage, messageName);

    this.typeNameToFileDescriptor.set(fieldTypeName, fileDescriptor);
    this.typeNameToMessageDescriptor.set(fieldTypeName, messageDescriptor);
    this.typeNameToParentMessageDescriptors.set(
      fieldTypeName,
      parentMessageDescriptors
    );

    for (const nestedMessageDescriptor of messageDescriptor.getNestedTypeList()) {
      this.registerMessage(fileDescriptor, nestedMessageDescriptor, [
        ...parentMessageDescriptors,
        messageDescriptor,
      ]);
    }

    for (const enumDescriptor of messageDescriptor.getEnumTypeList()) {
      this.registerEnum(fileDescriptor, enumDescriptor, [
        ...parentMessageDescriptors,
        messageDescriptor,
      ]);
    }
  }

  registerEnum(
    fileDescriptor: FileDescriptorProto,
    enumDescriptor: EnumDescriptorProto,
    parentMessageDescriptors: DescriptorProto[] = []
  ) {
    const filePackage = fileDescriptor.getPackage();
    const enumName = getNamespacedTypeName(
      enumDescriptor,
      parentMessageDescriptors
    );
    const fieldTypeName = getFieldTypeName(filePackage, enumName);

    this.typeNameToFileDescriptor.set(fieldTypeName, fileDescriptor);
    this.typeNameToEnumDescriptor.set(fieldTypeName, enumDescriptor);
    this.typeNameToParentMessageDescriptors.set(
      fieldTypeName,
      parentMessageDescriptors
    );
  }

  getFileDescriptorByFileName(
    fileName: string
  ): FileDescriptorProto | undefined {
    return this.fileNameToFileDescriptor.get(fileName);
  }

  getFileDescriptorByFieldDescriptor(
    fieldDescriptor: FieldDescriptorProto
  ): FileDescriptorProto | undefined {
    const fieldTypeName = fieldDescriptor.getTypeName();
    assert.ok(fieldTypeName !== undefined);

    return this.getFileDescriptorByFieldTypeName(fieldTypeName);
  }

  getFileDescriptorByFieldTypeName(
    fieldTypeName: string
  ): FileDescriptorProto | undefined {
    return this.typeNameToFileDescriptor.get(fieldTypeName);
  }

  getMessageDescriptorByFieldTypeName(
    fieldTypeName: string
  ): DescriptorProto | undefined {
    return this.typeNameToMessageDescriptor.get(fieldTypeName);
  }

  getEnumDescriptorByFieldTypeName(
    fieldTypeName: string
  ): EnumDescriptorProto | undefined {
    return this.typeNameToEnumDescriptor.get(fieldTypeName);
  }

  getMessageOrEnumByFieldDescriptor(
    fieldDescriptor: FieldDescriptorProto
  ): DescriptorProto | EnumDescriptorProto | undefined {
    assert.ok(
      fieldDescriptor.getType() === FieldDescriptorProto.Type.TYPE_MESSAGE ||
        fieldDescriptor.getType() === FieldDescriptorProto.Type.TYPE_ENUM
    );
    const fieldTypeName = fieldDescriptor.getTypeName();
    assert.ok(fieldTypeName !== undefined);

    return fieldDescriptor.getType() === FieldDescriptorProto.Type.TYPE_MESSAGE
      ? this.getMessageDescriptorByFieldTypeName(fieldTypeName)
      : this.getEnumDescriptorByFieldTypeName(fieldTypeName);
  }

  getParentMessageDescriptorsByFieldTypeName(
    fieldTypeName: string
  ): DescriptorProto[] | undefined {
    return this.typeNameToParentMessageDescriptors.get(fieldTypeName);
  }

  getParentMessageDescriptorsByFieldDescriptor(
    fieldDescriptor: FieldDescriptorProto
  ): DescriptorProto[] | undefined {
    assert.ok(
      fieldDescriptor.getType() === FieldDescriptorProto.Type.TYPE_MESSAGE ||
        fieldDescriptor.getType() === FieldDescriptorProto.Type.TYPE_ENUM
    );
    const fieldTypeName = fieldDescriptor.getTypeName();
    assert.ok(fieldTypeName !== undefined);

    return this.getParentMessageDescriptorsByFieldTypeName(fieldTypeName);
  }
}
