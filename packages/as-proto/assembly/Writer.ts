/**
 * Wire format writer using `Uint8Array`
 */
export abstract class Writer {
  /**
   * Writes an unsigned 32 bit value as a varint.
   */
  abstract uint32(value: u32): void;

  /**
   * Writes a signed 32 bit value as a varint.
   */
  abstract int32(value: i32): void;

  /**
   * Writes a 32 bit value as a varint, zig-zag encoded.
   */
  abstract sint32(value: i32): void;

  /**
   * Writes an unsigned 64 bit value as a varint.
   */
  abstract uint64(value: u64): void;

  /**
   * Writes a signed 64 bit value as a varint.
   */
  abstract int64(value: i64): void;

  /**
   * Writes a signed 64 bit value as a varint, zig-zag encoded.
   */
  abstract sint64(value: i64): void;

  /**
   * Writes a boolish value as a varint.
   */
  abstract bool(value: bool): void;

  /**
   * Writes an unsigned 32 bit value as fixed 32 bits.
   */
  abstract fixed32(value: u32): void;

  /**
   * Writes a signed 32 bit value as fixed 32 bits.
   */
  abstract sfixed32(value: i32): void;

  /**
   * Writes an unsigned 64 bit value as fixed 64 bits.
   */
  abstract fixed64(value: u64): void;

  /**
   * Writes a signed 64 bit value as fixed 64 bits.
   */
  abstract sfixed64(value: i64): void;

  /**
   * Writes a float (32 bit).
   */
  abstract float(value: f32): void;

  /**
   * Writes a double (64 bit float).
   */
  abstract double(value: f64): void;

  /**
   * Writes a sequence of bytes.
   */
  abstract bytes(value: Uint8Array): void;

  /**
   * Writes a string.
   */
  abstract string(value: string): void;

  /**
   * Forks this writer's state.
   * Calling {@link ldelim} resets the writer to the previous state.
   */
  abstract fork(): void;

  /**
   * Resets to the last state.
   */
  abstract ldelim(): void;
}
