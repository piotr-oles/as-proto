import { Reader } from "../Reader";
import { WireType } from "../WireType";

/**
 * @internal
 *
 * Wire format reader using `Uint8Array`
 */
@final
export class FixedReader extends Reader {
  /**
   * Read buffer
   */
  private buf: Uint8Array;

  constructor(buf: Uint8Array) {
    super();
    this.ptr = buf.dataStart;
    this.end = buf.dataStart + buf.byteLength;
    this.buf = buf;
  }

  @inline
  uint32(): u32 {
    return this.varint32();
  }

  @inline
  int32(): i32 {
    return this.varint32();
  }

  @inline
  sint32(): i32 {
    const value: u32 = this.varint32();
    return (value >>> 1) ^ -(value & 1);
  }

  @inline
  uint64(): u64 {
    return this.varint64();
  }

  @inline
  int64(): i64 {
    return this.varint64();
  }

  @inline
  sint64(): i64 {
    const value = this.varint64();
    return (value >>> 1) ^ -(value & 1);
  }

  @inline
  bool(): bool {
    return this.varint32() !== 0;
  }

  @inline
  fixed32(): u32 {
    return load<u32>(this.inc(4));
  }

  @inline
  sfixed32(): i32 {
    return this.fixed32();
  }

  @inline
  fixed64(): u64 {
    return load<u64>(this.inc(8));
  }

  @inline
  sfixed64(): u64 {
    return this.fixed64();
  }

  @inline
  float(): f32 {
    return load<f32>(this.inc(4));
  }

  @inline
  double(): f64 {
    return load<f64>(this.inc(8));
  }

  bytes(): Uint8Array {
    const length = this.uint32();
    const buffer = new Uint8Array(length);
    memory.copy(buffer.dataStart, this.inc(length), length);
    return buffer;
  }

  string(): string {
    const bytes = this.bytes();
    return String.UTF8.decodeUnsafe(bytes.dataStart, bytes.byteLength);
  }

  skip(length: u32): void {
    if (length === 0) {
      // skip varint
      while (load<u8>(this.inc()) & 0x80);
    } else {
      this.inc(length);
    }
  }

  skipType(wireType: WireType = WireType.VARINT): void {
    switch (wireType) {
      case WireType.VARINT:
        this.skip(0);
        break;
      case WireType.FIXED_64:
        this.skip(8);
        break;
      case WireType.LENGTH_DELIMITED:
        this.skip(this.uint32());
        break;
      case WireType.START_GROUP:
        while ((wireType = this.uint32() & 0x07) !== WireType.END_GROUP) {
          this.skipType(wireType);
        }
        break;
      case WireType.FIXED_32:
        this.skip(4);
        break;
      default:
        throw new Error("Invalid wire type " + wireType.toString());
    }
  }

  reset(buf: Uint8Array): void {
    this.ptr = buf.dataStart;
    this.end = buf.dataStart + buf.byteLength;
    this.buf = buf;
  }

  private varint32(): u32 {
    let loaded: u32;
    let value: u32;

    value = (loaded = load<u8>(this.inc())) & 0x7f;
    if (loaded < 0x80) return value;

    value |= ((loaded = load<u8>(this.inc())) & 0x7f) << 7;
    if (loaded < 0x80) return value;

    value |= ((loaded = load<u8>(this.inc())) & 0x7f) << 14;
    if (loaded < 0x80) return value;

    value |= ((loaded = load<u8>(this.inc())) & 0x7f) << 21;
    if (loaded < 0x80) return value;

    value |= ((loaded = load<u8>(this.inc())) & 0xf) << 28;
    if (loaded < 0x80) return value;

    // increment position until there is no continuation bit or until we read 10 bytes
    if (load<u8>(this.inc()) < 0x80) return value;
    if (load<u8>(this.inc()) < 0x80) return value;
    if (load<u8>(this.inc()) < 0x80) return value;
    if (load<u8>(this.inc()) < 0x80) return value;
    if (load<u8>(this.inc()) < 0x80) return value;

    return value;
  }

  private varint64(): u64 {
    let loaded: u64;
    let value: u64;

    value = (loaded = load<u8>(this.inc())) & 0x7f;
    if (loaded < 0x80) return value;

    value |= ((loaded = load<u8>(this.inc())) & 0x7f) << 7;
    if (loaded < 0x80) return value;

    value |= ((loaded = load<u8>(this.inc())) & 0x7f) << 14;
    if (loaded < 0x80) return value;

    value |= ((loaded = load<u8>(this.inc())) & 0x7f) << 21;
    if (loaded < 0x80) return value;

    value |= ((loaded = load<u8>(this.inc())) & 0x7f) << 28;
    if (loaded < 0x80) return value;

    value |= ((loaded = load<u8>(this.inc())) & 0x7f) << 35;
    if (loaded < 0x80) return value;

    value |= ((loaded = load<u8>(this.inc())) & 0x7f) << 42;
    if (loaded < 0x80) return value;

    value |= ((loaded = load<u8>(this.inc())) & 0x7f) << 49;
    if (loaded < 0x80) return value;

    value |= ((loaded = load<u8>(this.inc())) & 0x7f) << 56;
    if (loaded < 0x80) return value;

    value |= (load<u8>(this.inc()) & 0x1) << 63;

    return value;
  }

  @inline
  private inc(step: u32 = 1): usize {
    const ptr = this.ptr;
    this.ptr += step;
    assert(this.ptr <= this.end, "Index out of range");

    return ptr;
  }
}
