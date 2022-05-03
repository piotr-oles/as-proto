import * as assert from "assert";
import { DescriptorProto, FieldDescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb";

import { FileContext } from "../file-context";
import { ScopeContext } from "../scope-context";
import { generateEnum } from "./enum";
import {
  generateFieldDecodeInstruction,
  generateFieldDefaultValue,
  generateFieldEncodeInstruction,
  generateFieldName,
  generateFieldType,
  isManagedFieldType,
} from "./field";

export function generateMessage(messageDescriptor: DescriptorProto, fileContext: FileContext, messageNamespace?: string): string {
  const messageName = messageDescriptor.getName();
  assert.ok(messageName);

  const messageNameWithNamespace = messageNamespace ? `${messageNamespace}.${messageName}` : messageName;

  const messageOptions = messageDescriptor.getOptions();

  if (messageOptions !== undefined && messageOptions.getMapEntry()) {
    // TODO: ???
    // this message type is the entry tuple for a map - don't output it
    return "";
  }

  const Message = fileContext.registerDefinition(messageName);

  const MessageClass = `
    ${canMessageByUnmanaged(messageDescriptor, fileContext) ? "@unmanaged" : ""}
    export class ${Message} {
      ${generateEncodeMethod(messageDescriptor, fileContext)}
      ${generateDecodeMethod(messageDescriptor, fileContext)}

      ${generateMessageFieldsDeclarations(messageDescriptor, fileContext)}

      ${generateMessageConstructor(messageDescriptor, fileContext)}
    }
  `;

  fileContext.registerImport("Protobuf", "as-proto");
  const MessageFunction = `
    export function decode${Message}(a: Uint8Array): ${Message} {
      return Protobuf.decode<${Message}>(a, ${Message}.decode)
    }
  `;

  const nested: string[] = [];
  for (const nestedMessageDescriptor of messageDescriptor.getNestedTypeList()) {
    nested.push(generateMessage(nestedMessageDescriptor, fileContext, messageNameWithNamespace));
  }
  for (const nestedEnumDescriptor of messageDescriptor.getEnumTypeList()) {
    nested.push(generateEnum(nestedEnumDescriptor, fileContext));
  }

  const MessageNamespace = nested.length
    ? `
      export namespace ${Message} {
        ${nested.join("\n\n")}
      }
    `
    : "";

  return `
    ${MessageClass}
    ${MessageFunction}
    ${MessageNamespace}
  `;
}

function generateEncodeMethod(messageDescriptor: DescriptorProto, fileContext: FileContext): string {
  const messageName = messageDescriptor.getName();
  assert.ok(messageName);

  const Writer = fileContext.registerImport("Writer", "as-proto");
  const Message = fileContext.registerDefinition(messageName);

  const scopeContext = new ScopeContext(fileContext, ["message", "writer"]);

  return `
    static encode(message: ${Message}, writer: ${Writer}): void {
      ${messageDescriptor
        .getFieldList()
        .map((fieldDescriptor) => `${generateFieldEncodeInstruction(fieldDescriptor, scopeContext)}`)
        .join("\n")}
    }
  `;
}

function generateDecodeMethod(messageDescriptor: DescriptorProto, fileContext: FileContext): string {
  const messageName = messageDescriptor.getName();
  assert.ok(messageName);

  const Reader = fileContext.registerImport("Reader", "as-proto");
  const Message = fileContext.registerDefinition(messageName);

  const scopeContext = new ScopeContext(fileContext, ["reader", "length", "end", "message", "tag"]);

  return `
    static decode(reader: ${Reader}, length: i32): ${Message} {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new ${Message}();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          ${messageDescriptor
            .getFieldList()
            .map((fieldDescriptor) => `${generateFieldDecodeInstruction(fieldDescriptor, scopeContext)}`)
            .join("\n")}

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }
  `;
}

function generateMessageFieldsDeclarations(messageDescriptor: DescriptorProto, fileContext: FileContext): string {
  const fields = messageDescriptor.getFieldList();

  return fields
    .map((fieldDescriptor) => `${generateFieldName(fieldDescriptor)}: ${generateFieldType(fieldDescriptor, fileContext)}`)
    .join(";\n");
}

function generateMessageConstructor(messageDescriptor: DescriptorProto, fileContext: FileContext): string {
  const fields = messageDescriptor.getFieldList();
  const scopeContext = new ScopeContext(fileContext);

  const constructorParams = fields
    .map(
      (fieldDescriptor) =>
        `${scopeContext.getSafeName(generateFieldName(fieldDescriptor))}: ${generateFieldType(
          fieldDescriptor,
          fileContext
        )} = ${generateFieldDefaultValue(fieldDescriptor)}`
    )
    .join(",\n");
  const fieldsAssignments = fields
    .map(
      (fieldDescriptor) =>
        `this.${generateFieldName(fieldDescriptor)} = ${scopeContext.getSafeName(generateFieldName(fieldDescriptor))}`
    )
    .join(";\n");

  return `
    constructor(
      ${constructorParams}
    ) {
     ${fieldsAssignments}
    }
  `;
}

function canMessageByUnmanaged(messageDescriptor: DescriptorProto, fileContext: FileContext): boolean {
  return messageDescriptor.getFieldList().every((fieldDescriptor) => {
    if (fieldDescriptor.getLabel() === FieldDescriptorProto.Label.LABEL_REPEATED) {
      // message with repeated field is not supported as unmanaged
      return false;
    } else if (!isManagedFieldType(fieldDescriptor)) {
      // not managed type - we're good
      return true;
    } else if (fieldDescriptor.getType() === FieldDescriptorProto.Type.TYPE_MESSAGE) {
      // message type - if message itself is unmanaged, we're good
      const typeName = fieldDescriptor.getTypeName();
      assert.ok(typeName !== undefined);
      const relatedMessageDescriptor = fileContext.getGeneratorContext().getMessageDescriptorByFieldTypeName(typeName);
      return relatedMessageDescriptor ? canMessageByUnmanaged(relatedMessageDescriptor, fileContext) : false;
    } else {
      // unsupported managed type
      return false;
    }
  });
}
