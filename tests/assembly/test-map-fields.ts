import { asproto } from "./proto/testbinary";
import { Protobuf } from "as-proto/assembly";

export function encode(): Uint8Array {
  const message = new asproto.test.TestMapFields();

  message.mapStringString.set("foo", "bar");
  message.mapStringString.set("bar", "baz");

  message.mapStringInt32.set("x", 10);
  message.mapStringInt64.set("x", 0x5323423123);
  message.mapStringBool.set("gc", true);
  message.mapStringBool.set("simd", false);
  message.mapStringEnum.set("foo", asproto.test.MapValueEnum.MAP_VALUE_BAZ);
  message.mapStringMsg.set("foo", new asproto.test.MapValueMessage(1000));
  message.mapInt32String.set(10, "foo");
  message.mapInt32String.set(20, "bar");
  message.mapInt64String.set(-100, "foo");
  message.mapBoolString.set(true, "foo");

  return Protobuf.encode<asproto.test.TestMapFields>(
    message,
    asproto.test.TestMapFields.encode
  );
}

export function decode(bytes: Uint8Array): boolean {
  const message = Protobuf.decode<asproto.test.TestMapFields>(
    bytes,
    asproto.test.TestMapFields.decode
  );

  assert(message.mapStringString.get("foo") === "bar");
  assert(message.mapStringString.get("bar") === "baz");
  assert(message.mapStringInt32.get("x") === 10);
  assert(message.mapStringInt64.get("x") === 0x5323423123);
  assert(message.mapStringBool.get("gc") === true);
  assert(message.mapStringBool.get("simd") === false);
  assert(
    message.mapStringEnum.get("foo") === asproto.test.MapValueEnum.MAP_VALUE_BAZ
  );
  assert(message.mapStringMsg.get("foo").foo === 1000);
  assert(message.mapInt32String.get(10) === "foo");
  assert(message.mapInt32String.get(20) === "bar");
  assert(message.mapInt64String.get(-100) === "foo");
  assert(message.mapBoolString.get(true) === "foo");

  return true;
}
