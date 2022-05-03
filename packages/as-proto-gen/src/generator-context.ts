import { DescriptorProto, EnumDescriptorProto, FileDescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb";

import { getFieldTypeName } from "./names";

type FileName = string;
type FieldTypeName = string;

export class GeneratorContext {
  private fileNameToFileDescriptor: Map<FileName, FileDescriptorProto> = new Map();
  private typeNameToFileDescriptor: Map<FieldTypeName, FileDescriptorProto> = new Map();
  private typeNameToMessageDescriptor: Map<FieldTypeName, DescriptorProto> = new Map();

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

  registerMessage(fileDescriptor: FileDescriptorProto, messageDescriptor: DescriptorProto, messageNamespace?: string) {
    const filePackage = fileDescriptor.getPackage();
    const messageName = messageDescriptor.getName();

    if (!messageName) {
      throw new Error(`Unknown name of the message in ${fileDescriptor.getName()} file.`);
    }
    const messageNameWithNamespace = messageNamespace ? `${messageNamespace}.${messageName}` : messageName;

    const fieldTypeName = getFieldTypeName(filePackage, messageNameWithNamespace);
    this.typeNameToFileDescriptor.set(fieldTypeName, fileDescriptor);
    this.typeNameToMessageDescriptor.set(fieldTypeName, messageDescriptor);

    for (const nestedMessageDescriptor of messageDescriptor.getNestedTypeList()) {
      this.registerMessage(fileDescriptor, nestedMessageDescriptor, messageNameWithNamespace);
    }

    for (const enumDescriptor of messageDescriptor.getEnumTypeList()) {
      this.registerEnum(fileDescriptor, enumDescriptor, messageNameWithNamespace);
    }
  }

  registerEnum(fileDescriptor: FileDescriptorProto, enumDescriptor: EnumDescriptorProto, enumNamespace?: string) {
    const filePackage = fileDescriptor.getPackage();
    const enumName = enumDescriptor.getName();

    if (!enumName) {
      throw new Error(`Unknown name of the enum in ${fileDescriptor.getName()} file.`);
    }
    const enumNameWithNamespace = enumNamespace ? `${enumNamespace}.${enumName}` : enumName;
    const fieldTypeName = getFieldTypeName(filePackage, enumNameWithNamespace);

    this.typeNameToFileDescriptor.set(fieldTypeName, fileDescriptor);
  }

  getFileDescriptorByFileName(fileName: string): FileDescriptorProto | undefined {
    return this.fileNameToFileDescriptor.get(fileName);
  }

  getFileDescriptorByFieldTypeName(fieldTypeName: string): FileDescriptorProto | undefined {
    return this.typeNameToFileDescriptor.get(fieldTypeName);
  }

  getMessageDescriptorByFieldTypeName(fieldTypeName: string): DescriptorProto | undefined {
    return this.typeNameToMessageDescriptor.get(fieldTypeName);
  }
}
