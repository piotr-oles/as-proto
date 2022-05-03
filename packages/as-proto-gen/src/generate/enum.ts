import { EnumDescriptorProto, EnumValueDescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb";
import { FileContext } from "../file-context";
import * as assert from "assert";

export function generateEnum(enumDescriptor: EnumDescriptorProto, fileContext: FileContext): string {
  const enumName = enumDescriptor.getName();
  assert.ok(enumName !== undefined);

  const Enum = fileContext.registerDefinition(enumName);
  const enumValues = enumDescriptor.getValueList();

  return `
    export enum ${Enum} {
      ${enumValues.map((valueDescriptor) => generateEnumValue(valueDescriptor)).join(",\n")}
    }
  `;
}

function generateEnumValue(valueDescriptor: EnumValueDescriptorProto): string {
  const valueName = valueDescriptor.getName();
  assert.ok(valueName !== undefined);

  const valueNumber = valueDescriptor.getNumber();
  assert.ok(valueNumber !== undefined);

  return `${valueName} = ${valueNumber}`;
}
