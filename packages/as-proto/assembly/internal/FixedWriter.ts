import { Writer } from "../Writer";
import { FixedSizer } from "./FixedSizer";

/**
 * @internal
 *
 * Wire format writer using `Uint8Array`
 */
@final
export class FixedWriter extends Writer {
  /**
   * Related sizer
   */
  readonly sizer: FixedSizer;

  /**
   * Current pointer.
   */
  private ptr: usize;

  /**
   * Fixed buffer.
   */
  private buf: Uint8Array;

  /**
   * Index in varlen array from sizer.
   */
  private varlenidx: i32;

  constructor() {
    super();
    const sizer = this.sizer = new FixedSizer();
    const buf = this.buf = new Uint8Array(sizer.len);
    this.ptr = buf.dataStart;
    this.varlenidx = 0;
  }

  @inline
  uint32(value: u32): void {
    this.varint<u32>(value);
  }

  @inline
  int32(value: i32): void {
    if (value < 0) {
      this.int64(value);
    } else {
      this.varint<u32>(value);
    }
  }

  @inline
  sint32(value: i32): void {
    this.varint<u32>((value << 1) ^ (value >> 31));
  }

  @inline
  uint64(value: u64): void {
    this.varint<u64>(value);
  }

  @inline
  int64(value: i64): void {
    this.varint<u64>(value);
  }

  @inline
  sint64(value: i64): void {
    this.varint<u64>((value << 1) ^ (value >> 63));
  }

  @inline
  bool(value: bool): void {
    this.fixed<u8>(value ? 1 : 0);
  }

  @inline
  fixed32(value: u32): void {
    this.fixed<u32>(value);
  }

  @inline
  sfixed32(value: i32): void {
    this.fixed<u32>(value);
  }

  @inline
  fixed64(value: u64): void {
    this.fixed<u64>(value);
  }

  @inline
  sfixed64(value: i64): void {
    this.fixed<u64>(value);
  }

  @inline
  float(value: f32): void {
    this.fixed<f32>(value);
  }

  @inline
  double(value: f64): void {
    this.fixed<f64>(value);
  }

  bytes(value: Uint8Array): void {
    this.uint32(value.byteLength);
    memory.copy(this.ptr, value.dataStart, value.byteLength);
    this.ptr += value.byteLength;
  }

  string(value: string): void {
    const len = this.varlen(); // use precomputed length
    this.uint32(len);
    String.UTF8.encodeUnsafe(changetype<usize>(value), value.length, this.ptr);
    this.ptr += len;
  }

  @inline
  fork(): void {
    this.uint32(this.varlen()); // use precomputed length
  }

  @inline
  ldelim(): void {
    // nothing to do - all dirty work done by sizer
  }

  finish(): Uint8Array {
    return this.buf;
  }

  reset(): void {
    this.buf = new Uint8Array(this.sizer.len);
    this.ptr = this.buf.dataStart;
    this.varlenidx = 0;
  }

  @inline
  private varint<T extends number>(val: T): void {
    while (val > 0x7f) {
      store<u8>(this.ptr++, (val & 0x7f) | 0x80);
      val = <T>(val >>> 7);
    }
    store<u8>(this.ptr++, val);
  }

  @inline
  private fixed<T extends number>(val: T): void {
    store<T>(this.ptr, val);
    this.ptr += sizeof<T>();
  }

  @inline
  private varlen(): u32 {
    return this.varlenidx >= this.sizer.varlen.length
      ? 0
      : this.sizer.varlen[this.varlenidx++];
  }
}
