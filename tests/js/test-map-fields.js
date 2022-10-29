import "./proto/testbinary_pb.cjs";
import assert from "node:assert/strict";

export function encode() {
  const { TestMapFields, MapValueEnum, MapValueMessage } =
    global.proto.asproto.test;
  const message = new TestMapFields();

  message.getMapStringStringMap().set("foo", "bar");
  message.getMapStringStringMap().set("bar", "baz");

  message.getMapStringInt32Map().set("x", 10);
  message.getMapStringInt64Map().set("x", 0x5323423123);
  message.getMapStringBoolMap().set("gc", true);
  message.getMapStringBoolMap().set("simd", false);
  message.getMapStringEnumMap().set("foo", MapValueEnum.MAP_VALUE_BAZ);
  const valueMessage = new MapValueMessage();
  valueMessage.setFoo(1000);
  message.getMapStringMsgMap().set("foo", valueMessage);
  message.getMapInt32StringMap().set(10, "foo");
  message.getMapInt32StringMap().set(20, "bar");
  message.getMapInt64StringMap().set(-100, "foo");
  message.getMapBoolStringMap().set(true, "foo");

  return message.serializeBinary();
}

export function decode(bytes) {
  const { TestMapFields, MapValueEnum, MapValueMessage } =
    global.proto.asproto.test;

  const message = TestMapFields.deserializeBinary(bytes);

  assert(message.getMapStringStringMap().get("foo") === "bar");
  assert(message.getMapStringStringMap().get("bar") === "baz");
  assert(message.getMapStringInt32Map().get("x") === 10);
  assert(message.getMapStringInt64Map().get("x") === 0x5323423123);
  assert(message.getMapStringBoolMap().get("gc") === true);
  assert(message.getMapStringBoolMap().get("simd") === false);
  assert(
    message.getMapStringEnumMap().get("foo") === MapValueEnum.MAP_VALUE_BAZ
  );
  assert(message.getMapStringMsgMap().get("foo").getFoo() === 1000);
  assert(message.getMapInt32StringMap().get(10) === "foo");
  assert(message.getMapInt32StringMap().get(20) === "bar");
  assert(message.getMapInt64StringMap().get(-100) === "foo");
  assert(message.getMapBoolStringMap().get(true) === "foo");

  return true;
}
