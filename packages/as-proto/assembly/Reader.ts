import { WireType } from "./WireType";

export abstract class Reader {
  /**
   * Read buffer pointer.
   */
  ptr: usize;

  /**
   * Read buffer end pointer.
   */
  end: usize;

  /**
   * Reads a varint as an unsigned 32 bit value.
   */
  abstract uint32(): u32;

  /**
   * Reads a varint as a signed 32 bit value.
   */
  abstract int32(): i32;

  /**
   * Reads a zig-zag encoded varint as a signed 32 bit value.
   */
  abstract sint32(): i32;

  /**
   * Reads a varint as an unsigned 64 bit value.
   */
  abstract uint64(): u64;

  /**
   * Reads a varint as a signed 64 bit value.
   */
  abstract int64(): i64;

  /**
   * Reads a zig-zag encoded varint as a signed 64 bit value.
   */
  abstract sint64(): i64;

  /**
   * Reads a varint as a boolean.
   */
  abstract bool(): bool;

  /**
   * Reads fixed 32 bits as an unsigned 32 bit integer.
   */
  abstract fixed32(): u32;

  /**
   * Reads fixed 32 bits as a signed 32 bit integer.
   */
  abstract sfixed32(): i32;

  /**
   * Reads fixed 64 bits as an unsigned 64 bit integer.
   */
  abstract fixed64(): u64;

  /**
   * Reads fixed 64 bits as a signed 64 bit integer.
   */
  abstract sfixed64(): u64;

  /**
   * Reads a float (32 bit) as a number.
   */
  abstract float(): f32;

  /**
   * Reads a double (64 bit float) as a number.
   */
  abstract double(): f64;

  /**
   * Reads a sequence of bytes preceeded by its length as a varint.
   */
  abstract bytes(): Uint8Array;

  /**
   * Reads a string preceeded by its byte length as a varint.
   */
  abstract string(): string;

  /**
   * Skips the specified number of bytes, if zero, skips a varint.
   */
  abstract skip(length: u32): void;

  /**
   * Skips the next element of the specified wire type.
   */
  abstract skipType(wireType: WireType): void;

  /**
   * Resets reader state to re-use it for different buffer.
   */
  abstract reset(buf: Uint8Array): void;
}
