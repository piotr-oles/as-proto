import { Writer, Reader, Protobuf } from "as-proto";

export class Test {
  static encode(message: Test, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.string);

    writer.uint32(16);
    writer.uint32(message.uint32);

    const inner_ = message.inner;
    if (inner_ !== null) {
      writer.uint32(26);
      writer.fork();
      Test.Inner.encode(inner_, writer);
      writer.ldelim();
    }

    writer.uint32(37);
    writer.float(message.float);
  }

  static decode(reader: Reader, length: i32): Test {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Test();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.string = reader.string();
          break;

        case 2:
          message.uint32 = reader.uint32();
          break;

        case 3:
          message.inner = Test.Inner.decode(reader, reader.uint32());
          break;

        case 4:
          message.float = reader.float();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  string: string;
  uint32: u32;
  inner: Test.Inner | null;
  float: f32;

  constructor(string: string = "", uint32: u32 = 0, inner: Test.Inner | null = null, float: f32 = 0.0) {
    this.string = string;
    this.uint32 = uint32;
    this.inner = inner;
    this.float = float;
  }
}

export function decodeTest(a: Uint8Array): Test {
  return Protobuf.decode<Test>(a, Test.decode);
}

export namespace Test {
  export class Inner {
    static encode(message: Inner, writer: Writer): void {
      writer.uint32(8);
      writer.int32(message.int32);

      const innerInner_ = message.innerInner;
      if (innerInner_ !== null) {
        writer.uint32(18);
        writer.fork();
        Test.Inner.InnerInner.encode(innerInner_, writer);
        writer.ldelim();
      }

      const outer_ = message.outer;
      if (outer_ !== null) {
        writer.uint32(26);
        writer.fork();
        Outer.encode(outer_, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): Inner {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new Inner();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.int32 = reader.int32();
            break;

          case 2:
            message.innerInner = Test.Inner.InnerInner.decode(reader, reader.uint32());
            break;

          case 3:
            message.outer = Outer.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    int32: i32;
    innerInner: Test.Inner.InnerInner | null;
    outer: Outer | null;

    constructor(int32: i32 = 0, innerInner: Test.Inner.InnerInner | null = null, outer: Outer | null = null) {
      this.int32 = int32;
      this.innerInner = innerInner;
      this.outer = outer;
    }
  }

  export function decodeInner(a: Uint8Array): Inner {
    return Protobuf.decode<Inner>(a, Inner.decode);
  }

  export namespace Inner {
    @unmanaged
    export class InnerInner {
      static encode(message: InnerInner, writer: Writer): void {
        writer.uint32(8);
        writer.int64(message.long);

        writer.uint32(16);
        writer.int32(message.enum);

        writer.uint32(24);
        writer.sint32(message.sint32);
      }

      static decode(reader: Reader, length: i32): InnerInner {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new InnerInner();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.long = reader.int64();
              break;

            case 2:
              message.enum = reader.int32();
              break;

            case 3:
              message.sint32 = reader.sint32();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      long: i64;
      enum: Enum;
      sint32: i32;

      constructor(long: i64 = 0, enum_: Enum = 0, sint32: i32 = 0) {
        this.long = long;
        this.enum = enum_;
        this.sint32 = sint32;
      }
    }

    export function decodeInnerInner(a: Uint8Array): InnerInner {
      return Protobuf.decode<InnerInner>(a, InnerInner.decode);
    }
  }

  export enum Enum {
    ONE = 0,
    TWO = 1,
    THREE = 2,
    FOUR = 3,
    FIVE = 4,
  }
}

export class Outer {
  static encode(message: Outer, writer: Writer): void {
    const bool_ = message.bool;
    if (bool_.length !== 0) {
      for (let i = 0; i < bool_.length; ++i) {
        writer.uint32(8);
        writer.bool(bool_[i]);
      }
    }

    writer.uint32(17);
    writer.double(message.double);
  }

  static decode(reader: Reader, length: i32): Outer {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Outer();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bool.push(reader.bool());
          break;

        case 2:
          message.double = reader.double();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  bool: Array<bool>;
  double: f64;

  constructor(bool: Array<bool> = [], double: f64 = 0.0) {
    this.bool = bool;
    this.double = double;
  }
}

export function decodeOuter(a: Uint8Array): Outer {
  return Protobuf.decode<Outer>(a, Outer.decode);
}
