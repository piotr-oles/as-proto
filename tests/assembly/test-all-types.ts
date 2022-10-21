import { asproto } from "./proto/testbinary";
import { Protobuf } from "as-proto";

function createTestAllTypesMessage(): asproto.test.TestAllTypes {
  const BYTES = new Uint8Array(4);
  BYTES[0] = 1;
  BYTES[1] = 2;
  BYTES[2] = 8;
  BYTES[3] = 9;

  return new asproto.test.TestAllTypes(
    // TODO: add support for optional
    // -42,
    // -0x7fffffff00000000,
    // 0x80000000,
    // 0xf000000000000000,
    // -100,
    // -0x8000000000000000,
    // 1234,
    // 0x1234567800000000,
    // -1234,
    // -0x1234567800000000,
    // 1.5,
    // -1.5,
    // true,
    // "hello world",
    // BYTES,
    // new asproto.test.ForeignMessage(16),
    // asproto.test.ForeignEnum.FOREIGN_FOO,
    [-42],
    [-0x7fffffff00000000],
    [0x80000000],
    [0xf000000000000000],
    [-100],
    [-0x8000000000000000],
    [1234],
    [0x1234567800000000],
    [-1234],
    [-0x1234567800000000],
    [1.5],
    [-1.5],
    [true],
    ["hello world"],
    [BYTES, BYTES],
    [new asproto.test.ForeignMessage(1000)],
    [asproto.test.ForeignEnum.FOREIGN_FOO]
    // TODO: add support for packed
    // [-42],
    // [-0x7fffffff00000000],
    // [0x80000000],
    // [0xf000000000000000],
    // [-100],
    // [-0x8000000000000000],
    // [1234],
    // [0x1234567800000000],
    // [-1234],
    // [-0x1234567800000000],
    // [1.5],
    // [-1.5],
    // [true]
    // TODO: add support for oneof
  );
}

export function encodeTestAllTypesMessage(): Uint8Array {
  return Protobuf.encode<asproto.test.TestAllTypes>(
    createTestAllTypesMessage(),
    asproto.test.TestAllTypes.encode
  );
}

export function decodeTestAllTypesMessage(bytes: Uint8Array): boolean {
  const message = Protobuf.decode<asproto.test.TestAllTypes>(
    bytes,
    asproto.test.TestAllTypes.decode
  );

  // TODO: add support for optional
  assert(message.repeatedInt32[0] === -42);
  assert(message.repeatedInt64[0] === -0x7fffffff00000000);
  assert(message.repeatedUint32[0] === 0x80000000);
  assert(message.repeatedUint64[0] === 0xf000000000000000);
  assert(message.repeatedSint32[0] === -100);
  assert(message.repeatedSint64[0] === -0x8000000000000000);
  assert(message.repeatedFixed32[0] === 1234);
  assert(message.repeatedFixed64[0] === 0x1234567800000000);
  assert(message.repeatedSfixed32[0] === -1234);
  assert(message.repeatedSfixed64[0] === -0x1234567800000000);
  assert(message.repeatedFloat[0] === 1.5);
  assert(message.repeatedDouble[0] === -1.5);
  assert(message.repeatedBool[0] === true);
  // XXX: === doesn't work here - probably because old version of AS
  assert(message.repeatedString[0] == "hello world");
  assert(message.repeatedBytes[0][0] === 1);
  assert(message.repeatedBytes[0][1] === 2);
  assert(message.repeatedBytes[0][2] === 8);
  assert(message.repeatedBytes[0][3] === 9);
  assert(message.repeatedBytes[1][0] === 1);
  assert(message.repeatedBytes[1][1] === 2);
  assert(message.repeatedBytes[1][2] === 8);
  assert(message.repeatedBytes[1][3] === 9);
  assert(message.repeatedForeignMessage[0].c === 1000);
  assert(
    message.repeatedForeignEnum[0] === asproto.test.ForeignEnum.FOREIGN_FOO
  );
  // TODO: add support for packed
  // TODO: add support for oneof

  return true;
}

export const UINT8_ARRAY_ID = idof<Uint8Array>();
