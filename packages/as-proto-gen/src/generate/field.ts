import { FieldDescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb";
import * as assert from "assert";

import { generateRef } from "./ref";
import { FileContext } from "../file-context";
import { ScopeContext } from "../scope-context";

import Type = FieldDescriptorProto.Type;
import Label = FieldDescriptorProto.Label;

export function generateFieldEncodeInstruction(fieldDescriptor: FieldDescriptorProto, scopeContext: ScopeContext): string {
  const isRepeated = fieldDescriptor.getLabel() === Label.LABEL_REPEATED;
  const isMessage = fieldDescriptor.getType() === Type.TYPE_MESSAGE;
  const isPacked = fieldDescriptor.getOptions()?.hasPacked();

  const fieldTag = getFieldTag(fieldDescriptor);
  const fieldName = generateFieldName(fieldDescriptor);
  const fieldVariable = scopeContext.getFreeName(fieldName) + '_';
  const fieldTypeInstruction = generateFieldTypeInstruction(fieldDescriptor);

  if (isMessage) {
    const Message = generateRef(fieldDescriptor, scopeContext.getFileContext());
    if (isRepeated && isPacked) {
      return `
        const ${fieldVariable} = message.${fieldName};
        writer.uint32(${fieldTag});
        writer.fork();
        for (let i = 0; i < ${fieldVariable}.length; ++i) {
          ${Message}.encode(${fieldVariable}[i], writer);
        }
        writer.ldelim();
      `;
    } else if (isRepeated) {
      return `
        const ${fieldVariable} = message.${fieldName};
        for (let i = 0; i < ${fieldVariable}.length; ++i) {
          writer.uint32(${fieldTag});
          writer.fork();
          ${Message}.encode(${fieldVariable}[i], writer);
          writer.ldelim();
        }
      `;
    } else {
      return `
        const ${fieldVariable} = message.${fieldName};
        if (${fieldVariable} !== null) {
          writer.uint32(${fieldTag});
          writer.fork();
          ${Message}.encode(${fieldVariable}, writer);
          writer.ldelim();
        }
      `;
    }
  } else {
    if (isRepeated && isPacked) {
      return `
        const ${fieldVariable} = message.${fieldName};
        if (${fieldVariable}.length !== 0) {
          writer.uint32(${fieldTag});
          writer.fork();
          for (let i = 0; i < ${fieldVariable}.length; ++i) {
            writer.${fieldTypeInstruction}(${fieldVariable}[i]);
          }
          writer.ldelim();
        }
      `;
    } else if (isRepeated) {
      return `
        const ${fieldVariable} = message.${fieldName};
        if (${fieldVariable}.length !== 0) {
          for (let i = 0; i < ${fieldVariable}.length; ++i) {
            writer.uint32(${fieldTag});
            writer.${fieldTypeInstruction}(${fieldVariable}[i]);
          }
        }
      `;
    } else if (isNullableFieldType(fieldDescriptor)) {
      return `
        const ${fieldVariable} = message.${fieldName};
        if (${fieldVariable} !== null) {
          writer.uint32(${fieldTag});
          writer.${fieldTypeInstruction}(${fieldVariable});
        }
      `;
    } else {
      return `
        writer.uint32(${fieldTag});
        writer.${fieldTypeInstruction}(message.${fieldName});
      `;
    }
  }
}

export function generateFieldDecodeInstruction(fieldDescriptor: FieldDescriptorProto, scopeContext: ScopeContext): string {
  const fileContext = scopeContext.getFileContext();
  const isRepeated = fieldDescriptor.getLabel() === Label.LABEL_REPEATED;
  const isMessage = fieldDescriptor.getType() === Type.TYPE_MESSAGE;
  const isPacked = fieldDescriptor.getOptions()?.hasPacked();

  const fieldNumber = fieldDescriptor.getNumber();
  assert.ok(fieldNumber !== undefined);
  const fieldName = generateFieldName(fieldDescriptor);
  const fieldTypeInstruction = generateFieldTypeInstruction(fieldDescriptor);

  if (isMessage) {
    const Message = generateRef(fieldDescriptor, fileContext);
    if (isRepeated && isPacked) {
      return `
        case ${fieldNumber}:
          const repeatedEnd: usize = reader.ptr + reader.uint32();
          while (reader.ptr < repeatedEnd) {
            message.${fieldName}.push(${Message}.decode(reader, reader.uint32()));
          }
          break;
      `;
    } else if (isRepeated) {
      return `
        case ${fieldNumber}:
          message.${fieldName}.push(${Message}.decode(reader, reader.uint32()));
          break;
      `;
    } else {
      return `
        case ${fieldNumber}:
          message.${fieldName} = ${Message}.decode(reader, reader.uint32());
          break;
      `;
    }
  } else {
    if (isRepeated && isPacked) {
      return `
        case ${fieldNumber}:
          const repeatedEnd: usize = reader.ptr + reader.uint32();
          while (reader.ptr < repeatedEnd) {
            message.${fieldName}.push(reader.${fieldTypeInstruction}());
          }
          break;
      `;
    } else if (isRepeated) {
      return `
        case ${fieldNumber}:
          message.${fieldName}.push(reader.${fieldTypeInstruction}());
          break;
      `;
    } else {
      return `
        case ${fieldNumber}:
          message.${fieldName} = reader.${fieldTypeInstruction}();
          break;
      `;
    }
  }
}

export function generateFieldName(fieldDescriptor: FieldDescriptorProto): string {
  const fieldName = fieldDescriptor.getName();
  assert.ok(fieldName);

  return fieldName;
}

export function generateFieldTypeBasic(fieldDescriptor: FieldDescriptorProto, fileContext: FileContext): string {
  switch (fieldDescriptor.getType()) {
    case Type.TYPE_INT32:
    case Type.TYPE_SINT32:
    case Type.TYPE_FIXED32:
    case Type.TYPE_SFIXED32:
      return "i32";
    case Type.TYPE_UINT32:
      return "u32";
    case Type.TYPE_INT64:
    case Type.TYPE_SINT64:
    case Type.TYPE_FIXED64:
    case Type.TYPE_SFIXED64:
      return "i64";
    case Type.TYPE_UINT64:
      return "u64";
    case Type.TYPE_FLOAT:
      return "f32";
    case Type.TYPE_DOUBLE:
      return "f64";
    case Type.TYPE_BOOL:
      return "bool";
    case Type.TYPE_STRING:
      return "string";
    case Type.TYPE_BYTES:
      return "Uint8Array";
    case Type.TYPE_MESSAGE:
    case Type.TYPE_ENUM:
      return generateRef(fieldDescriptor, fileContext);
    default:
      throw new Error(`Type "${fieldDescriptor.getTypeName()}" is not supported by as-proto-gen`);
  }
}

export function generateFieldType(fieldDescriptor: FieldDescriptorProto, fileContext: FileContext): string {
  const isRepeated = fieldDescriptor.getLabel() === Label.LABEL_REPEATED;

  let typeCode = generateFieldTypeBasic(fieldDescriptor, fileContext);

  if (isRepeated) {
    typeCode = `Array<${typeCode}>`;
  } else if (isNullableFieldType(fieldDescriptor)) {
    typeCode = `${typeCode} | null`;
  }

  return typeCode;
}

export function generateFieldDefaultValue(fieldDescriptor: FieldDescriptorProto): string {
  const isRepeated = fieldDescriptor.getLabel() === Label.LABEL_REPEATED;
  const defaultValue = fieldDescriptor.getDefaultValue();

  if (isRepeated) {
    return "[]";
  } else if (defaultValue) {
    return defaultValue;
  } else {
    switch (fieldDescriptor.getType()) {
      case Type.TYPE_INT32:
      case Type.TYPE_SINT32:
      case Type.TYPE_FIXED32:
      case Type.TYPE_SFIXED32:
      case Type.TYPE_UINT32:
      case Type.TYPE_INT64:
      case Type.TYPE_SINT64:
      case Type.TYPE_FIXED64:
      case Type.TYPE_SFIXED64:
      case Type.TYPE_UINT64:
      case Type.TYPE_ENUM:
        return "0";
      case Type.TYPE_FLOAT:
      case Type.TYPE_DOUBLE:
        return "0.0";
      case Type.TYPE_BOOL:
        return "false";
      case Type.TYPE_STRING:
        return '""';
      case Type.TYPE_BYTES:
        return "new Uint8Array(0)";
      case Type.TYPE_MESSAGE:
        return "null";
      default:
        throw new Error(`Type "${fieldDescriptor.getTypeName()}" is not supported by as-proto-gen`);
    }
  }
}

export function generateFieldTypeInstruction(fieldDescriptor: FieldDescriptorProto): string | undefined {
  switch (fieldDescriptor.getType()) {
    case Type.TYPE_INT32:
      return "int32";
    case Type.TYPE_SINT32:
      return "sint32";
    case Type.TYPE_FIXED32:
      return "fixed32";
    case Type.TYPE_SFIXED32:
      return "sfixed32";
    case Type.TYPE_UINT32:
      return "uint32";
    case Type.TYPE_INT64:
      return "int64";
    case Type.TYPE_SINT64:
      return "sint64";
    case Type.TYPE_FIXED64:
      return "fixed64";
    case Type.TYPE_SFIXED64:
      return "sfixed64";
    case Type.TYPE_UINT64:
      return "uint64";
    case Type.TYPE_FLOAT:
      return "float";
    case Type.TYPE_DOUBLE:
      return "double";
    case Type.TYPE_BOOL:
      return "bool";
    case Type.TYPE_STRING:
      return "string";
    case Type.TYPE_BYTES:
      return "bytes";
    case Type.TYPE_ENUM:
      return "int32";
    case Type.TYPE_MESSAGE:
      return undefined;
    default:
      throw new Error(`Type "${fieldDescriptor.getTypeName()}" is not supported by as-proto-gen`);
  }
}

export function isNullableFieldType(fieldDescriptor: FieldDescriptorProto): boolean {
  const fieldType = fieldDescriptor.getType();
  assert.ok(fieldType !== undefined);

  return fieldType === Type.TYPE_MESSAGE;
}

export function isManagedFieldType(fieldDescriptor: FieldDescriptorProto): boolean {
  const fieldType = fieldDescriptor.getType();
  assert.ok(fieldType !== undefined);

  return fieldType === Type.TYPE_MESSAGE || fieldType === Type.TYPE_STRING || fieldType === Type.TYPE_BYTES;
}

export function getFieldWireType(fieldDescriptor: FieldDescriptorProto): number {
  const isRepeated = fieldDescriptor.getLabel() === Label.LABEL_REPEATED;
  const isPacked = fieldDescriptor.getOptions()?.hasPacked();
  if (isRepeated && isPacked) {
    return 2;
  }

  const fieldType = fieldDescriptor.getType();
  assert.ok(fieldType !== undefined);

  switch (fieldType) {
    case Type.TYPE_INT32:
    case Type.TYPE_UINT32:
    case Type.TYPE_SINT32:
    case Type.TYPE_INT64:
    case Type.TYPE_UINT64:
    case Type.TYPE_SINT64:
    case Type.TYPE_BOOL:
    case Type.TYPE_ENUM:
      return 0;
    case Type.TYPE_FIXED64:
    case Type.TYPE_SFIXED64:
    case Type.TYPE_DOUBLE:
      return 1;
    case Type.TYPE_FIXED32:
    case Type.TYPE_SFIXED32:
    case Type.TYPE_FLOAT:
      return 5;
    case Type.TYPE_STRING:
    case Type.TYPE_BYTES:
    case Type.TYPE_MESSAGE:
      return 2;
    default:
      throw new Error("Invalid type " + fieldType);
  }
}

function getFieldTag(fieldDescriptor: FieldDescriptorProto): number {
  const fieldNumber = fieldDescriptor.getNumber();
  assert.ok(fieldNumber !== undefined);

  return (fieldNumber << 3) | getFieldWireType(fieldDescriptor);
}
