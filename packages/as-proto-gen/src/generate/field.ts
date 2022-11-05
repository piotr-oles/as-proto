import {
  DescriptorProto,
  FieldDescriptorProto,
} from "google-protobuf/google/protobuf/descriptor_pb";
import * as assert from "assert";
import { camelize } from "humps";

import { generateRef } from "./ref";
import { FileContext } from "../file-context";
import { ScopeContext } from "../scope-context";
import { GeneratorContext } from "../generator-context";
import Type = FieldDescriptorProto.Type;
import Label = FieldDescriptorProto.Label;

export function generateFieldEncodeInstruction(
  fieldDescriptor: FieldDescriptorProto,
  scopeContext: ScopeContext
): string {
  const isRepeated = fieldDescriptor.getLabel() === Label.LABEL_REPEATED;
  const isMessage = fieldDescriptor.getType() === Type.TYPE_MESSAGE;
  const isPacked = fieldDescriptor.getOptions()?.hasPacked();

  const fieldTag = getFieldTag(fieldDescriptor);
  const fieldName = generateFieldName(fieldDescriptor);
  const fieldVariable = scopeContext.getFreeName(fieldName);

  const encodeInstruction = (
    variable: string,
    descriptor: FieldDescriptorProto = fieldDescriptor
  ) => {
    const isMessage = descriptor.getType() === Type.TYPE_MESSAGE;

    if (isMessage) {
      const Message = generateRef(descriptor, scopeContext.getFileContext());
      return `${Message}.encode(${variable}, writer)`;
    } else {
      const fieldTypeInstruction = generateFieldTypeInstruction(descriptor);
      return `writer.${fieldTypeInstruction}(${variable})`;
    }
  };

  if (isMessage) {
    const messageDescriptor = getFieldMessageDescriptor(
      fieldDescriptor,
      scopeContext.getFileContext().getGeneratorContext()
    );
    assert.ok(messageDescriptor);
    const isMap = isMapMessageDescriptor(messageDescriptor);

    if (isMap) {
      const keysVariable = scopeContext.getFreeName(fieldName + "Keys");
      const keyVariable = scopeContext.getFreeName(fieldName + "Key");
      const [keyDescriptor, valueDescriptor] =
        getMapKeyAndValueFieldDescriptors(messageDescriptor);
      const keyTag = getFieldTag(keyDescriptor);
      const valueTag = getFieldTag(valueDescriptor);
      const isValueMessage = valueDescriptor.getType() === Type.TYPE_MESSAGE;

      return `
        const ${fieldVariable} = message.${fieldName};
        if (${fieldVariable} !== null) {
          const ${keysVariable} = ${fieldVariable}.keys();
          for (let i: i32 = 0; i < ${keysVariable}.length; ++i) {
            const ${keyVariable} = ${keysVariable}[i];
            writer.uint32(${fieldTag});
            writer.fork();
            writer.uint32(${keyTag});
            ${encodeInstruction(keyVariable, keyDescriptor)};
            writer.uint32(${valueTag});
            ${isValueMessage ? "writer.fork();" : ""}
            ${encodeInstruction(
              `${fieldVariable}.get(${keyVariable})`,
              valueDescriptor
            )};
            ${isValueMessage ? "writer.ldelim();" : ""}
            writer.ldelim();
          }
        }
      `;
    } else if (isRepeated && isPacked) {
      return `
        const ${fieldVariable} = message.${fieldName};
        writer.uint32(${fieldTag});
        writer.fork();
        for (let i: i32 = 0; i < ${fieldVariable}.length; ++i) {
          ${encodeInstruction(`${fieldVariable}[i]`)};
        }
        writer.ldelim();
      `;
    } else if (isRepeated) {
      return `
        const ${fieldVariable} = message.${fieldName};
        for (let i: i32 = 0; i < ${fieldVariable}.length; ++i) {
          writer.uint32(${fieldTag});
          writer.fork();
          ${encodeInstruction(`${fieldVariable}[i]`)};
          writer.ldelim();
        }
      `;
    } else {
      return `
        const ${fieldVariable} = message.${fieldName};
        if (${fieldVariable} !== null) {
          writer.uint32(${fieldTag});
          writer.fork();
          ${encodeInstruction(fieldVariable)};
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
          for (let i: i32 = 0; i < ${fieldVariable}.length; ++i) {
            ${encodeInstruction(`${fieldVariable}[i]`)};
          }
          writer.ldelim();
        }
      `;
    } else if (isRepeated) {
      return `
        const ${fieldVariable} = message.${fieldName};
        if (${fieldVariable}.length !== 0) {
          for (let i: i32 = 0; i < ${fieldVariable}.length; ++i) {
            writer.uint32(${fieldTag});
            ${encodeInstruction(`${fieldVariable}[i]`)};
          }
        }
      `;
    } else if (isNullableFieldType(fieldDescriptor)) {
      return `
        const ${fieldVariable} = message.${fieldName};
        if (${fieldVariable} !== null) {
          writer.uint32(${fieldTag});
          ${encodeInstruction(fieldVariable)};
        }
      `;
    } else {
      return `
        writer.uint32(${fieldTag});
        ${encodeInstruction(`message.${fieldName}`)};
      `;
    }
  }
}

export function generateFieldDecodeInstruction(
  fieldDescriptor: FieldDescriptorProto,
  scopeContext: ScopeContext
): string {
  const isRepeated = fieldDescriptor.getLabel() === Label.LABEL_REPEATED;
  const isMessage = fieldDescriptor.getType() === Type.TYPE_MESSAGE;
  const isPacked = fieldDescriptor.getOptions()?.hasPacked();

  const fieldNumber = fieldDescriptor.getNumber();
  assert.ok(fieldNumber !== undefined);
  const fieldName = generateFieldName(fieldDescriptor);

  const decodeInstruction = (
    descriptor: FieldDescriptorProto = fieldDescriptor
  ) => {
    const isMessage = descriptor.getType() === Type.TYPE_MESSAGE;

    if (isMessage) {
      const Message = generateRef(descriptor, scopeContext.getFileContext());
      return `${Message}.decode(reader, reader.uint32())`;
    } else {
      const fieldTypeInstruction = generateFieldTypeInstruction(descriptor);
      return `reader.${fieldTypeInstruction}()`;
    }
  };

  if (isMessage) {
    const messageDescriptor = getFieldMessageDescriptor(
      fieldDescriptor,
      scopeContext.getFileContext().getGeneratorContext()
    );
    assert.ok(messageDescriptor);
    const isMap = isMapMessageDescriptor(messageDescriptor);

    if (isMap) {
      const [keyDescriptor, valueDescriptor] =
        getMapKeyAndValueFieldDescriptors(messageDescriptor);
      const keyTypeBasic = generateFieldTypeBasic(
        keyDescriptor,
        scopeContext.getFileContext()
      );
      const keyType = generateFieldType(
        keyDescriptor,
        scopeContext.getFileContext()
      );
      const valueTypeBasic = generateFieldTypeBasic(
        valueDescriptor,
        scopeContext.getFileContext()
      );
      const valueType = generateFieldType(
        valueDescriptor,
        scopeContext.getFileContext()
      );
      const fieldVariable = scopeContext.getFreeName(fieldName);
      const keyVariable = scopeContext.getFreeName(fieldName + "Key");
      const hasKeyVariable = scopeContext.getFreeName(fieldName + "HasKey");
      const valueVariable = scopeContext.getFreeName(fieldName + "Value");
      const hasValueVariable = scopeContext.getFreeName(fieldName + "HasValue");
      const keyNumber = keyDescriptor.getNumber();
      const valueNumber = valueDescriptor.getNumber();
      const keyDefaultValue = generateFieldBasicDefaultValue(keyDescriptor);
      const valueDefaultValue = generateFieldBasicDefaultValue(valueDescriptor);
      const keyDecodeInstruction = decodeInstruction(keyDescriptor);
      const valueDecodeInstruction = decodeInstruction(valueDescriptor);
      const setMapConditions = [
        `${fieldVariable} !== null`,
        hasKeyVariable,
        hasValueVariable,
      ];
      if (isNullableFieldType(keyDescriptor)) {
        setMapConditions.push(`${keyVariable} !== null`);
      }
      if (isNullableFieldType(valueDescriptor)) {
        setMapConditions.push(`${valueVariable} !== null`);
      }

      return `
        case ${fieldNumber}:
          let ${keyVariable}: ${keyType} = ${keyDefaultValue};
          let ${valueVariable}: ${valueType} = ${valueDefaultValue};
          let ${hasKeyVariable}: bool = false;
          let ${hasValueVariable}: bool = false;
          for (const end: usize = reader.ptr + reader.uint32(); reader.ptr < end;) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case ${keyNumber}:
                ${keyVariable} = ${keyDecodeInstruction};
                ${hasKeyVariable} = true;
                break;
                
              case ${valueNumber}:
                ${valueVariable} = ${valueDecodeInstruction};
                ${hasValueVariable} = true;
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
            if (message.${fieldName} === null) {
              message.${fieldName} = new Map<${keyTypeBasic}, ${valueTypeBasic}>();
            }
            const ${fieldVariable} = message.${fieldName};
            if (${setMapConditions.join(" && ")}) {
              ${fieldVariable}.set(${keyVariable}, ${valueVariable});
            }
          }
          break;
      `;
    } else if (isRepeated && isPacked) {
      return `
        case ${fieldNumber}:
          for (const end: usize = reader.ptr + reader.uint32(); reader.ptr < end;) {
            message.${fieldName}.push(${decodeInstruction()});
          }
          break;
      `;
    } else if (isRepeated) {
      return `
        case ${fieldNumber}:
          message.${fieldName}.push(${decodeInstruction()});
          break;
      `;
    } else {
      return `
        case ${fieldNumber}:
          message.${fieldName} = ${decodeInstruction()};
          break;
      `;
    }
  } else {
    if (isRepeated && isPacked) {
      return `
        case ${fieldNumber}:
          for (const end: usize = reader.ptr + reader.uint32(); reader.ptr < end;) {
            message.${fieldName}.push(${decodeInstruction()});
          }
          break;
      `;
    } else if (isRepeated) {
      return `
        case ${fieldNumber}:
          message.${fieldName}.push(${decodeInstruction()});
          break;
      `;
    } else {
      return `
        case ${fieldNumber}:
          message.${fieldName} = ${decodeInstruction()};
          break;
      `;
    }
  }
}

export function generateFieldName(
  fieldDescriptor: FieldDescriptorProto
): string {
  const fieldName = fieldDescriptor.getName();
  assert.ok(fieldName);

  return camelize(fieldName);
}

export function generateFieldTypeBasic(
  fieldDescriptor: FieldDescriptorProto,
  fileContext: FileContext
): string {
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
    case Type.TYPE_MESSAGE: {
      const messageDescriptor = getFieldMessageDescriptor(
        fieldDescriptor,
        fileContext.getGeneratorContext()
      );
      const isMap =
        messageDescriptor && isMapMessageDescriptor(messageDescriptor);

      if (isMap) {
        const [keyFieldDescriptor, valueFieldDescriptor] =
          getMapKeyAndValueFieldDescriptors(messageDescriptor);

        return `Map<${generateFieldTypeBasic(
          keyFieldDescriptor,
          fileContext
        )}, ${generateFieldTypeBasic(valueFieldDescriptor, fileContext)}>`;
      } else {
        return generateRef(fieldDescriptor, fileContext);
      }
    }
    case Type.TYPE_ENUM:
      return generateRef(fieldDescriptor, fileContext);
    default:
      throw new Error(
        `Type "${fieldDescriptor.getTypeName()}" is not supported by as-proto-gen`
      );
  }
}

export function generateFieldType(
  fieldDescriptor: FieldDescriptorProto,
  fileContext: FileContext
): string {
  const isRepeated = fieldDescriptor.getLabel() === Label.LABEL_REPEATED;
  const isMap = isMapFieldDescriptor(
    fieldDescriptor,
    fileContext.getGeneratorContext()
  );

  let typeCode = generateFieldTypeBasic(fieldDescriptor, fileContext);

  if (isRepeated && !isMap) {
    typeCode = `Array<${typeCode}>`;
  } else if (isNullableFieldType(fieldDescriptor) && !isMap) {
    typeCode = `${typeCode} | null`;
  }

  return typeCode;
}

export function generateFieldDefaultValue(
  fieldDescriptor: FieldDescriptorProto,
  fileContext: FileContext
): string {
  const isRepeated = fieldDescriptor.getLabel() === Label.LABEL_REPEATED;
  const isMap = isMapFieldDescriptor(
    fieldDescriptor,
    fileContext.getGeneratorContext()
  );
  const defaultValue = fieldDescriptor.getDefaultValue();

  if (isMap) {
    return "new Map()";
  } else if (isRepeated) {
    return "[]";
  } else if (defaultValue) {
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
      case Type.TYPE_BOOL:
      case Type.TYPE_FLOAT:
      case Type.TYPE_DOUBLE:
        return defaultValue;
      case Type.TYPE_ENUM:
        return `${generateRef(fieldDescriptor, fileContext)}.${defaultValue}`;
      case Type.TYPE_STRING:
        return JSON.stringify(defaultValue);
      case Type.TYPE_BYTES:
        // TODO: handle default value for bytes
        return "new Uint8Array(0)";
      case Type.TYPE_MESSAGE:
        return "null";
      default:
        throw new Error(
          `Type "${fieldDescriptor.getTypeName()}" (${fieldDescriptor.getType()}) is not supported by as-proto-gen`
        );
    }
  } else {
    return generateFieldBasicDefaultValue(fieldDescriptor);
  }
}

function generateFieldBasicDefaultValue(fieldDescriptor: FieldDescriptorProto) {
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
      throw new Error(
        `Type "${fieldDescriptor.getTypeName()}" (${fieldDescriptor.getType()}) is not supported by as-proto-gen`
      );
  }
}

export function generateFieldTypeInstruction(
  fieldDescriptor: FieldDescriptorProto
): string | undefined {
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
      throw new Error(
        `Type "${fieldDescriptor.getTypeName()}" is not supported by as-proto-gen`
      );
  }
}

export function isNullableFieldType(
  fieldDescriptor: FieldDescriptorProto
): boolean {
  const fieldType = fieldDescriptor.getType();
  assert.ok(fieldType !== undefined);

  return fieldType === Type.TYPE_MESSAGE;
}

export function isManagedFieldType(
  fieldDescriptor: FieldDescriptorProto
): boolean {
  const fieldType = fieldDescriptor.getType();
  assert.ok(fieldType !== undefined);

  return (
    fieldType === Type.TYPE_MESSAGE ||
    fieldType === Type.TYPE_STRING ||
    fieldType === Type.TYPE_BYTES
  );
}

export function getFieldWireType(
  fieldDescriptor: FieldDescriptorProto
): number {
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

function getFieldMessageDescriptor(
  fieldDescriptor: FieldDescriptorProto,
  generatorContext: GeneratorContext
): DescriptorProto | undefined {
  assert.ok(fieldDescriptor.getType() === Type.TYPE_MESSAGE);

  return generatorContext.getMessageDescriptorByFieldTypeName(
    fieldDescriptor.getTypeName() || ""
  );
}

function isMapMessageDescriptor(messageDescriptor: DescriptorProto): boolean {
  return messageDescriptor.getOptions()?.getMapEntry() || false;
}

function isMapFieldDescriptor(
  fieldDescriptor: FieldDescriptorProto,
  generatorContext: GeneratorContext
): boolean {
  if (
    fieldDescriptor.getType() !== Type.TYPE_MESSAGE ||
    fieldDescriptor.getLabel() !== Label.LABEL_REPEATED
  ) {
    return false;
  }
  const messageDescriptor = getFieldMessageDescriptor(
    fieldDescriptor,
    generatorContext
  );
  return messageDescriptor ? isMapMessageDescriptor(messageDescriptor) : false;
}

function getMapKeyAndValueFieldDescriptors(
  messageDescriptor: DescriptorProto
): [FieldDescriptorProto, FieldDescriptorProto] {
  const [keyFieldDescriptor, valueFieldDescriptor] =
    messageDescriptor.getFieldList();
  assert.ok(keyFieldDescriptor !== undefined);
  assert.ok(valueFieldDescriptor !== undefined);

  return [keyFieldDescriptor, valueFieldDescriptor];
}
