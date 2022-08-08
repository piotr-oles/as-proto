import { generateMessage } from "./message";
import { FileDescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb";
import { Version } from "google-protobuf/google/protobuf/compiler/plugin_pb";
import { FileContext } from "../file-context";
import { generateEnum } from "./enum";
import { generateHeaderComment } from "./header";
import * as assert from "assert";

export function generateFile(
  fileDescriptor: FileDescriptorProto,
  fileContext: FileContext,
  compilerVersion: Version | undefined,
  compilerOptions: Set<string>
): string {
  const fileName = fileDescriptor.getName();
  assert.ok(fileName);

  const filePackage = fileDescriptor.getPackage();

  const types: string[] = [];
  for (const messageDescriptor of fileDescriptor.getMessageTypeList()) {
    types.push(generateMessage(messageDescriptor, fileContext));
  }
  for (const enumDescriptor of fileDescriptor.getEnumTypeList()) {
    types.push(generateEnum(enumDescriptor, fileContext));
  }

  let NamespacedTypes = types.join("\n\n");
  if (filePackage) {
    const packageParts = filePackage.split(".");
    fileContext.registerDefinition(packageParts[0]);

    while (packageParts.length > 0) {
      const packagePart = packageParts.pop()!; // type assertion - see line above
      NamespacedTypes = `
        export namespace ${packagePart} {
          ${NamespacedTypes}
        }
      `;
    }
  }

  let fileParts = [
    fileContext.getImportsCode(),
    NamespacedTypes
  ];

  if (compilerOptions.has("gen-header-comment")) {
    fileParts.unshift(generateHeaderComment(compilerVersion));
  }

  return fileParts.join("\n");
}
