import { Writer } from "../Writer";

/**
 * @internal
 */
@final
export class FixedSizer extends Writer {
  /**
   * Total length.
   */
  len: u32;

  /**
   * Position stack.
   */
  readonly pos: Array<u32>;

  /**
   * Variable length list.
   */
  readonly varlen: Array<i32>;

  /**
   * Variable length index stack.
   */
  readonly varlenidx: Array<i32>;

  constructor() {
    super();
    this.len = 0;
    this.pos = [];
    this.varlen = [];
    this.varlenidx = [];
  }

  @inline
  uint32(value: u32): void {
    this.varint32(value);
  }

  @inline
  int32(value: i32): void {
    if (value < 0) {
      // 10 bytes to encode negative number
      this.len += 10;
    } else {
      this.varint32(value);
    }
  }

  @inline
  sint32(value: i32): void {
    this.varint32((value << 1) ^ (value >> 31));
  }

  @inline
  uint64(value: u64): void {
    this.varint64(value);
  }

  @inline
  int64(value: i64): void {
    this.varint64(value);
  }

  @inline
  sint64(value: i64): void {
    this.varint64((value << 1) ^ (value >> 63));
  }

  @inline
  bool(value: bool): void {
    this.len += 1;
  }

  @inline
  fixed32(value: u32): void {
    this.len += 4;
  }

  @inline
  sfixed32(value: i32): void {
    this.len += 4;
  }

  @inline
  fixed64(value: u64): void {
    this.len += 8;
  }

  @inline
  sfixed64(value: i64): void {
    this.len += 8;
  }

  @inline
  float(value: f32): void {
    this.len += 4;
  }

  @inline
  double(value: f64): void {
    this.len += 8;
  }

  bytes(value: Uint8Array): void {
    this.uint32(value.byteLength);
    this.len += value.byteLength;
  }

  string(value: string): void {
    const len = String.UTF8.byteLength(value);
    this.varlen.push(len);
    this.uint32(len);
    this.len += len;
  }

  @inline
  fork(): void {
    this.pos.push(this.len); // save current position
    this.varlenidx.push(this.varlen.length); // save current index in varlen array
    this.varlen.push(0); // add 0 length to varlen array (to be updated in ldelim())
  }

  ldelim(): void {
    assert(
      this.pos.length && this.varlenidx.length,
      "Missing fork() before ldelim() call."
    );

    const endPos = this.len; // current position is end position
    const startPos = this.pos.pop(); // get start position from stack
    const idx = this.varlenidx.pop(); // get varlen index from stack
    const len = endPos - startPos; // calculate length

    this.varlen[idx] = len; // update variable length
    this.uint32(len); // add uint32 that should be called in fork()
  }

  reset(): void {
    this.len = 0;
    // re-use arrays
    this.pos.length = 0;
    this.varlen.length = 0;
    this.varlenidx.length = 0;
  }

  @inline
  private varint32(value: u32): void {
    this.len +=
      value < 0
        ? 10 // 10 bits with leading 1's
        : value < 0x80
        ? 1
        : value < 0x4000
        ? 2
        : value < 0x200000
        ? 3
        : value < 0x10000000
        ? 4
        : 5;
  }

  @inline
  private varint64(value: u64): void {
    this.len +=
      value < 0x80
        ? 1
        : value < 0x4000
        ? 2
        : value < 0x200000
        ? 3
        : value < 0x10000000
        ? 4
        : value < 0x400000000
        ? 5
        : value < 0x20000000000
        ? 6
        : value < 0x1000000000000
        ? 7
        : value < 0x80000000000000
        ? 8
        : value < 0x4000000000000000
        ? 9
        : 10;
  }
}
