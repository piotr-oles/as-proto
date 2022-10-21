const {
  TestAllTypes,
  ForeignMessage,
  ForeignEnum,
} = require("./proto/testbinary_pb");

function createTestAllTypesMessage() {
  const BYTES = new Uint8Array(4);
  BYTES[0] = 1;
  BYTES[1] = 2;
  BYTES[2] = 8;
  BYTES[3] = 9;

  const message = new TestAllTypes();
  // TODO: add support for optional
  // message.setOptionalInt32(-42);
  // // can be exactly represented by JS number (64-bit double, i.e., 52-bit
  // // mantissa).
  // message.setOptionalInt64(-0x7fffffff00000000);
  // message.setOptionalUint32(0x80000000);
  // message.setOptionalUint64(0xf000000000000000);
  // message.setOptionalSint32(-100);
  // message.setOptionalSint64(-0x8000000000000000);
  // message.setOptionalFixed32(1234);
  // message.setOptionalFixed64(0x1234567800000000);
  // message.setOptionalSfixed32(-1234);
  // message.setOptionalSfixed64(-0x1234567800000000);
  // message.setOptionalFloat(1.5);
  // message.setOptionalDouble(-1.5);
  // message.setOptionalBool(true);
  // message.setOptionalString("hello world");
  // message.setOptionalBytes(BYTES);
  // let subMessage = new ForeignMessage();
  // subMessage.setC(16);
  // message.setOptionalForeignMessage(subMessage);
  // message.setOptionalForeignEnum(ForeignEnum.FOREIGN_FOO);

  message.setRepeatedInt32List([-42]);
  message.setRepeatedInt64List([-0x7fffffff00000000]);
  message.setRepeatedUint32List([0x80000000]);
  message.setRepeatedUint64List([0xf000000000000000]);
  message.setRepeatedSint32List([-100]);
  message.setRepeatedSint64List([-0x8000000000000000]);
  message.setRepeatedFixed32List([1234]);
  message.setRepeatedFixed64List([0x1234567800000000]);
  message.setRepeatedSfixed32List([-1234]);
  message.setRepeatedSfixed64List([-0x1234567800000000]);
  message.setRepeatedFloatList([1.5]);
  message.setRepeatedDoubleList([-1.5]);
  message.setRepeatedBoolList([true]);
  message.setRepeatedStringList(["hello world"]);
  message.setRepeatedBytesList([BYTES, BYTES]);
  subMessage = new ForeignMessage();
  subMessage.setC(1000);
  message.setRepeatedForeignMessageList([subMessage]);
  message.setRepeatedForeignEnumList([ForeignEnum.FOREIGN_FOO]);

  // TODO: add support for packed
  // message.setPackedRepeatedInt32List([-42]);
  // message.setPackedRepeatedInt64List([-0x7fffffff00000000]);
  // message.setPackedRepeatedUint32List([0x80000000]);
  // message.setPackedRepeatedUint64List([0xf000000000000000]);
  // message.setPackedRepeatedSint32List([-100]);
  // message.setPackedRepeatedSint64List([-0x8000000000000000]);
  // message.setPackedRepeatedFixed32List([1234]);
  // message.setPackedRepeatedFixed64List([0x1234567800000000]);
  // message.setPackedRepeatedSfixed32List([-1234]);
  // message.setPackedRepeatedSfixed64List([-0x1234567800000000]);
  // message.setPackedRepeatedFloatList([1.5]);
  // message.setPackedRepeatedDoubleList([-1.5]);
  // message.setPackedRepeatedBoolList([true]);
  // TODO: add support for oneof

  return message;
}

function encodeTestAllTypesMessage() {
  return createTestAllTypesMessage().serializeBinary();
}

module.exports = {
  encodeTestAllTypesMessage,
};
