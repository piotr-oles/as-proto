import {
  DescriptorProto,
  FieldDescriptorProto,
} from "google-protobuf/google/protobuf/descriptor_pb";
import {
  generateFieldDecodeInstruction,
  generateFieldDefaultValue,
  generateFieldEncodeInstruction,
  generateFieldName,
  generateFieldType,
  isManagedFieldType,
} from "./field";
import { FileContext } from "../file-context";
import * as assert from "assert";
import { ScopeContext } from "../scope-context";
import { getSafeName } from "../reserved-keywords";

export function generateMessage(
  messageDescriptor: DescriptorProto,
  fileContext: FileContext,
  compilerOptions: Set<string>
): string {
  const messageName = messageDescriptor.getName();
  assert.ok(messageName);

  const Message = fileContext.registerDefinition(messageName);
  if (compilerOptions.has("gen-helper-methods")) {
    // reserve these names
    fileContext.registerDefinition(`encode${Message}`);
    fileContext.registerDefinition(`decode${Message}`);
  }

  const MessageClass = `
    export class ${Message} {
      ${generateEncodeMethod(messageDescriptor, fileContext)}
      ${generateDecodeMethod(messageDescriptor, fileContext)}

      ${generateMessageFieldsDeclarations(messageDescriptor, fileContext)}

      ${generateMessageConstructor(messageDescriptor, fileContext)}
    }
  `;

  const parts = [MessageClass];

  if (compilerOptions.has("gen-helper-methods")) {
    parts.push(generateHelperMethods(Message, fileContext));
  }

  return parts.join("\n");
}

function getAllFields(
  messageDescriptor: DescriptorProto
): FieldDescriptorProto[] {
  return [
    ...messageDescriptor.getFieldList(),
    ...messageDescriptor.getExtensionList(),
  ];
}

function generateEncodeMethod(
  messageDescriptor: DescriptorProto,
  fileContext: FileContext
): string {
  const messageName = messageDescriptor.getName();
  assert.ok(messageName);

  const fields = getAllFields(messageDescriptor);

  const Writer = fileContext.registerImport("Writer", "as-proto/assembly");
  const Message = fileContext.registerDefinition(messageName);

  const scopeContext = new ScopeContext(fileContext, ["message", "writer"]);

  return `
    static encode(message: ${Message}, writer: ${Writer}): void {
      ${fields
        .map(
          (fieldDescriptor) =>
            `${generateFieldEncodeInstruction(fieldDescriptor, scopeContext)}`
        )
        .join("\n")}
    }
  `;
}

function generateDecodeMethod(
  messageDescriptor: DescriptorProto,
  fileContext: FileContext
): string {
  const messageName = messageDescriptor.getName();
  assert.ok(messageName);

  const fields = getAllFields(messageDescriptor);

  const Reader = fileContext.registerImport("Reader", "as-proto/assembly");
  const Message = fileContext.registerDefinition(messageName);

  const scopeContext = new ScopeContext(fileContext, [
    "reader",
    "length",
    "end",
    "message",
    "tag",
  ]);

  return `
    static decode(reader: ${Reader}, length: i32): ${Message} {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new ${Message}();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          ${fields
            .map(
              (fieldDescriptor) =>
                `${generateFieldDecodeInstruction(
                  fieldDescriptor,
                  scopeContext
                )}`
            )
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

function generateMessageFieldsDeclarations(
  messageDescriptor: DescriptorProto,
  fileContext: FileContext
): string {
  const fields = getAllFields(messageDescriptor);

  return fields
    .map(
      (fieldDescriptor) =>
        `${generateFieldName(fieldDescriptor)}: ${generateFieldType(
          fieldDescriptor,
          fileContext
        )}`
    )
    .join(";\n");
}

function generateMessageConstructor(
  messageDescriptor: DescriptorProto,
  fileContext: FileContext
): string {
  const fields = getAllFields(messageDescriptor);

  const constructorParams = fields
    .map(
      (fieldDescriptor) =>
        `${getSafeName(
          generateFieldName(fieldDescriptor)
        )}: ${generateFieldType(
          fieldDescriptor,
          fileContext
        )} = ${generateFieldDefaultValue(fieldDescriptor, fileContext)}`
    )
    .join(",\n");
  const fieldsAssignments = fields
    .map(
      (fieldDescriptor) =>
        `this.${generateFieldName(fieldDescriptor)} = ${getSafeName(
          generateFieldName(fieldDescriptor)
        )}`
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

function generateHelperMethods(
  Message: string,
  fileContext: FileContext
): string {
  const Protobuf = fileContext.registerImport("Protobuf", "as-proto/assembly");

  const encodeHelper = fileContext.registerDefinition(`encode${Message}`);
  const decodeHelper = fileContext.registerDefinition(`decode${Message}`);

  return `
    export function ${encodeHelper}(message: ${Message}): Uint8Array {
      return ${Protobuf}.encode(message, ${Message}.encode);
    }

    export function ${decodeHelper}(buffer: Uint8Array): ${Message} {
      return ${Protobuf}.decode<${Message}>(buffer, ${Message}.decode);
    }
  `;
}
