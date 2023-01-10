import { Test } from "./generated/Test";
import { Outer } from "./generated/Outer";
import { Inner } from "./generated/Test/Inner";
import { InnerInner } from "./generated/Test/Inner/InnerInner";
import { Enum } from "./generated/Test/Enum";
import { Protobuf } from "as-proto/assembly";

const testDecoded = new Test(
  "Lorem ipsum dolor sit amet.",
  9000,
  new Inner(
    20161110,
    new InnerInner(682671883329470464, Enum.ONE, -42),
    new Outer([true, false, false, true, false, false, true], 204.8)
  ),
  0.25
);

const testEncoded = Protobuf.encode<Test>(testDecoded, Test.encode);

export function encode(): void {
  Protobuf.encode<Test>(testDecoded, Test.encode);
}

export function decode(): void {
  Protobuf.decode<Test>(testEncoded, Test.decode);
}

export function encodeDecode(): void {
  Protobuf.decode<Test>(
    Protobuf.encode<Test>(testDecoded, Test.encode),
    Test.decode
  );
}
