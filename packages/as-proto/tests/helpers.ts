import { Writer } from "../assembly/Writer";
import { FixedWriter } from "../assembly/internal/FixedWriter";
import { Reader } from "../assembly/Reader";
import { FixedReader } from "../assembly/internal/FixedReader";

const writer = new FixedWriter();

export function encode(steps: (writer: Writer) => void): Uint8Array {
  writer.sizer.reset();
  steps(writer.sizer);
  writer.reset();
  steps(writer);
  return writer.finish();
}

export function decode(steps: (writer: Writer) => void): Reader {
  return new FixedReader(encode(steps));
}

export function uint8(array: Array<u8>): Uint8Array {
  const typedArray = new Uint8Array(array.length);
  for (let i: i32 = 0; i < array.length; ++i) {
    typedArray[i] = array[i];
  }
  return typedArray;
}

export function nuint8(length: i32): Uint8Array {
  const typedArray = new Uint8Array(length);
  for (let i: i32 = 0; i < length; ++i) {
    typedArray[i] = i;
  }
  return typedArray;
}
