import { encode, nuint8, uint8 } from "./helpers";

describe("Writer", () => {
  it("encodes uint32", () => {
    expect(
      encode((writer) => {
        writer.uint32(8);
        writer.uint32(100);
        writer.uint32(4294967295);
        writer.uint32(0);
      })
    ).toStrictEqual(
      uint8([
        0b00001000, 0b01100100, 0b11111111, 0b11111111, 0b11111111, 0b11111111,
        0b00001111, 0b00000000,
      ])
    );
  });

  it("encodes int32", () => {
    expect(
      encode((writer) => {
        writer.int32(8);
        writer.int32(-100);
        writer.int32(2147483647);
        writer.int32(0);
      })
    ).toStrictEqual(
      uint8([
        0b00001000, 0b10011100, 0b11111111, 0b11111111, 0b11111111, 0b11111111,
        0b11111111, 0b11111111, 0b11111111, 0b11111111, 0b00000001, 0b11111111,
        0b11111111, 0b11111111, 0b11111111, 0b00000111, 0b00000000,
      ])
    );
  });

  it("encodes sint32", () => {
    expect(
      encode((writer) => {
        writer.sint32(8);
        writer.sint32(-100);
        writer.sint32(2147483647);
        writer.sint32(0);
      })
    ).toStrictEqual(
      uint8([
        0b00010000, 0b11000111, 0b00000001, 0b11111110, 0b11111111, 0b11111111,
        0b11111111, 0b00001111, 0b00000000,
      ])
    );
  });

  it("encodes uint64", () => {
    expect(
      encode((writer) => {
        writer.uint64(8);
        writer.uint64(100);
        writer.uint64(2147483647);
        writer.uint64(0);
        writer.uint64(137438953472);
      })
    ).toStrictEqual(
      uint8([
        0b00001000, 0b01100100, 0b11111111, 0b11111111, 0b11111111, 0b11111111,
        0b00000111, 0b00000000, 0b10000000, 0b10000000, 0b10000000, 0b10000000,
        0b10000000, 0b00000100,
      ])
    );
  });

  it("encodes int64", () => {
    expect(
      encode((writer) => {
        writer.int64(8);
        writer.int64(-100);
        writer.int64(2147483647);
        writer.int64(0);
        writer.int64(137438953472);
        writer.int64(-643743532543);
      })
    ).toStrictEqual(
      uint8([
        0b00001000, 0b10011100, 0b11111111, 0b11111111, 0b11111111, 0b11111111,
        0b11111111, 0b11111111, 0b11111111, 0b11111111, 0b00000001, 0b11111111,
        0b11111111, 0b11111111, 0b11111111, 0b00000111, 0b00000000, 0b10000000,
        0b10000000, 0b10000000, 0b10000000, 0b10000000, 0b00000100, 0b10000001,
        0b11110100, 0b10010100, 0b11101111, 0b10100001, 0b11101101, 0b11111111,
        0b11111111, 0b11111111, 0b00000001,
      ])
    );
  });

  it("encodes sint64", () => {
    expect(
      encode((writer) => {
        writer.sint64(8);
        writer.sint64(-100);
        writer.sint64(2147483647);
        writer.sint64(0);
        writer.sint64(137438953472);
        writer.sint64(-643743532543);
      })
    ).toStrictEqual(
      uint8([
        0b00010000, 0b11000111, 0b00000001, 0b11111110, 0b11111111, 0b11111111,
        0b11111111, 0b00001111, 0b00000000, 0b10000000, 0b10000000, 0b10000000,
        0b10000000, 0b10000000, 0b00001000, 0b11111101, 0b10010111, 0b11010110,
        0b10100001, 0b10111100, 0b00100101,
      ])
    );
  });

  it("encodes bool", () => {
    expect(
      encode((writer) => {
        writer.bool(true);
        writer.bool(false);
        writer.bool(false);
        writer.bool(true);
        writer.bool(false);
      })
    ).toStrictEqual(
      uint8([0b00000001, 0b00000000, 0b00000000, 0b00000001, 0b00000000])
    );
  });

  it("encodes fixed32", () => {
    expect(
      encode((writer) => {
        writer.fixed32(8);
        writer.fixed32(100);
        writer.fixed32(4294967295);
        writer.fixed32(0);
      })
    ).toStrictEqual(
      uint8([
        0b00001000, 0b00000000, 0b00000000, 0b00000000, 0b01100100, 0b00000000,
        0b00000000, 0b00000000, 0b11111111, 0b11111111, 0b11111111, 0b11111111,
        0b00000000, 0b00000000, 0b00000000, 0b00000000,
      ])
    );
  });

  it("encodes sfixed32", () => {
    expect(
      encode((writer) => {
        writer.sfixed32(8);
        writer.sfixed32(-100);
        writer.sfixed32(4294967295);
        writer.sfixed32(0);
      })
    ).toStrictEqual(
      uint8([
        0b00001000, 0b00000000, 0b00000000, 0b00000000, 0b10011100, 0b11111111,
        0b11111111, 0b11111111, 0b11111111, 0b11111111, 0b11111111, 0b11111111,
        0b00000000, 0b00000000, 0b00000000, 0b00000000,
      ])
    );
  });

  it("encodes fixed64", () => {
    expect(
      encode((writer) => {
        writer.fixed64(8);
        writer.fixed64(100);
        writer.fixed64(2147483647);
        writer.fixed64(0);
        writer.fixed64(137438953472);
        writer.fixed64(643743532543);
      })
    ).toStrictEqual(
      uint8([
        0b00001000, 0b00000000, 0b00000000, 0b00000000, 0b00000000, 0b00000000,
        0b00000000, 0b00000000, 0b01100100, 0b00000000, 0b00000000, 0b00000000,
        0b00000000, 0b00000000, 0b00000000, 0b00000000, 0b11111111, 0b11111111,
        0b11111111, 0b01111111, 0b00000000, 0b00000000, 0b00000000, 0b00000000,
        0b00000000, 0b00000000, 0b00000000, 0b00000000, 0b00000000, 0b00000000,
        0b00000000, 0b00000000, 0b00000000, 0b00000000, 0b00000000, 0b00000000,
        0b00100000, 0b00000000, 0b00000000, 0b00000000, 0b11111111, 0b11000101,
        0b00011010, 0b11100010, 0b10010101, 0b00000000, 0b00000000, 0b00000000,
      ])
    );
  });

  it("encodes sfixed64", () => {
    expect(
      encode((writer) => {
        writer.sfixed64(8);
        writer.sfixed64(-100);
        writer.sfixed64(2147483647);
        writer.sfixed64(0);
        writer.sfixed64(137438953472);
        writer.sfixed64(-643743532543);
      })
    ).toStrictEqual(
      uint8([
        0b00001000, 0b00000000, 0b00000000, 0b00000000, 0b00000000, 0b00000000,
        0b00000000, 0b00000000, 0b10011100, 0b11111111, 0b11111111, 0b11111111,
        0b11111111, 0b11111111, 0b11111111, 0b11111111, 0b11111111, 0b11111111,
        0b11111111, 0b01111111, 0b00000000, 0b00000000, 0b00000000, 0b00000000,
        0b00000000, 0b00000000, 0b00000000, 0b00000000, 0b00000000, 0b00000000,
        0b00000000, 0b00000000, 0b00000000, 0b00000000, 0b00000000, 0b00000000,
        0b00100000, 0b00000000, 0b00000000, 0b00000000, 0b00000001, 0b00111010,
        0b11100101, 0b00011101, 0b01101010, 0b11111111, 0b11111111, 0b11111111,
      ])
    );
  });

  it("encodes float", () => {
    expect(
      encode((writer) => {
        writer.float(5.3);
        writer.float(-1.3);
        writer.float(0);
        writer.float(335345214.53);
      })
    ).toStrictEqual(
      uint8([
        0b10011010, 0b10011001, 0b10101001, 0b01000000, 0b01100110, 0b01100110,
        0b10100110, 0b10111111, 0b00000000, 0b00000000, 0b00000000, 0b00000000,
        0b10110010, 0b11100111, 0b10011111, 0b01001101,
      ])
    );
  });

  it("encodes double", () => {
    expect(
      encode((writer) => {
        writer.double(5.3);
        writer.double(-1.3);
        writer.double(0);
        writer.double(335345214.53);
      })
    ).toStrictEqual(
      uint8([
        0b00110011, 0b00110011, 0b00110011, 0b00110011, 0b00110011, 0b00110011,
        0b00010101, 0b01000000, 0b11001101, 0b11001100, 0b11001100, 0b11001100,
        0b11001100, 0b11001100, 0b11110100, 0b10111111, 0b00000000, 0b00000000,
        0b00000000, 0b00000000, 0b00000000, 0b00000000, 0b00000000, 0b00000000,
        0b00010100, 0b10101110, 0b10000111, 0b00111110, 0b11110110, 0b11111100,
        0b10110011, 0b01000001,
      ])
    );
  });

  it("encodes bytes", () => {
    expect(
      encode((writer) => {
        writer.bytes(
          uint8([0b00000010, 0b00010100, 0b00000000, 0b00100000, 0b00000001])
        );
        writer.bytes(uint8([0b11111111, 0b00010100]));
        writer.bytes(uint8([]));
      })
    ).toStrictEqual(
      uint8([
        0b00000101, 0b00000010, 0b00010100, 0b00000000, 0b00100000, 0b00000001,
        0b00000010, 0b11111111, 0b00010100, 0b00000000,
      ])
    );
  });

  it("encodes long array of bytes (> 128 (u7) length)", () => {
    const generated = nuint8(300);
    const result = encode((writer) => {
      writer.bytes(nuint8(300));
    });
    const varint = load<u16>(result.dataStart);

    expect(varint).toBe(0b0000001010101100);
    expect(result.subarray(2)).toStrictEqual(generated);
  });

  it("encodes string", () => {
    expect(
      encode((writer) => {
        writer.string("test test test");
        writer.string("");
        writer.string("🌈🌱");
      })
    ).toStrictEqual(
      uint8([
        // "test test test"
        0b00001110, 0b01110100, 0b01100101, 0b01110011, 0b01110100, 0b00100000,
        0b01110100, 0b01100101, 0b01110011, 0b01110100, 0b00100000, 0b01110100,
        0b01100101, 0b01110011, 0b01110100,
        // ""
        0b00000000,
        // "🌈🌱"
        0b00001000, 0b11110000, 0b10011111, 0b10001100, 0b10001000, 0b11110000,
        0b10011111, 0b10001100, 0b10110001,
      ])
    );
  });

  it("encodes array", () => {
    expect(
      encode((writer) => {
        writer.uint32(34);
        writer.fork();
        writer.uint64(53);
        writer.string("test");
        writer.ldelim();
      })
    ).toStrictEqual(
      uint8([
        0b00100010, 0b00000110, 0b00110101, 0b00000100, 0b01110100, 0b01100101,
        0b01110011, 0b01110100,
      ])
    );
  });

  it("encodes nested array", () => {
    expect(
      encode((writer) => {
        writer.uint32(10);
        writer.string("Lorem ipsum dolor sit amet.");
        writer.uint32(16);
        writer.uint32(9000);
        writer.uint32(26);
        writer.fork();
        writer.uint32(8);
        writer.int32(20161110);
        writer.uint32(18);
        writer.fork();
        writer.uint32(8);
        writer.uint32(16);
        writer.int32(1);
        writer.uint32(24);
        writer.sint32(-42);
        writer.ldelim();
        writer.uint32(26);
        writer.fork();
        writer.uint32(10);
        writer.fork();
        const bool = [true, false, false, true, false, false, true];
        for (let i = 0; i < bool.length; ++i) {
          writer.bool(bool[i]);
        }
        writer.ldelim();
        writer.uint32(17);
        writer.double(204.8);
        writer.ldelim();
        writer.ldelim();
        writer.uint32(37);
        writer.float(0.25);
      })
    ).toStrictEqual(
      uint8([
        0b00001010, 0b00011011, 0b01001100, 0b01101111, 0b01110010, 0b01100101,
        0b01101101, 0b00100000, 0b01101001, 0b01110000, 0b01110011, 0b01110101,
        0b01101101, 0b00100000, 0b01100100, 0b01101111, 0b01101100, 0b01101111,
        0b01110010, 0b00100000, 0b01110011, 0b01101001, 0b01110100, 0b00100000,
        0b01100001, 0b01101101, 0b01100101, 0b01110100, 0b00101110, 0b00010000,
        0b10101000, 0b01000110, 0b00011010, 0b00100000, 0b00001000, 0b11010110,
        0b11000100, 0b11001110, 0b00001001, 0b00010010, 0b00000101, 0b00001000,
        0b00010000, 0b00000001, 0b00011000, 0b01010011, 0b00011010, 0b00010010,
        0b00001010, 0b00000111, 0b00000001, 0b00000000, 0b00000000, 0b00000001,
        0b00000000, 0b00000000, 0b00000001, 0b00010001, 0b10011010, 0b10011001,
        0b10011001, 0b10011001, 0b10011001, 0b10011001, 0b01101001, 0b01000000,
        0b00100101, 0b00000000, 0b00000000, 0b10000000, 0b00111110,
      ])
    );
  });
});
