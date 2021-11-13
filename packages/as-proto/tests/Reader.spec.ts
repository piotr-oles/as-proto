import { decode, uint8 } from "./helpers";
import { WireType } from "../assembly/WireType";

describe("Reader", () => {
  it("decodes uint32", () => {
    const reader = decode((writer) => {
      writer.uint32(8);
      writer.uint32(100);
      writer.uint32(4294967295);
      writer.uint32(0);
      writer.uint32(1230);
    });
    expect(reader.uint32()).toBe(8);
    expect(reader.uint32()).toBe(100);
    expect(reader.uint32()).toBe(4294967295);
    expect(reader.uint32()).toBe(0);
    expect(reader.uint32()).toBe(1230);
  });

  it("throws index out of range on uint32", () => {
    expect(() => {
      const reader = decode((writer) => {
        writer.uint32(8);
      });
      reader.uint32();
      reader.uint32();
    }).toThrow("Index out of range");
  });

  it("decodes int32", () => {
    const reader = decode((writer) => {
      writer.int32(8);
      writer.int32(-100);
      writer.int32(2147483647);
      writer.int32(0);
    });
    expect(reader.int32()).toBe(8);
    expect(reader.int32()).toBe(-100);
    expect(reader.int32()).toBe(2147483647);
    expect(reader.int32()).toBe(0);
  });

  it("throws index out of range on int32", () => {
    expect(() => {
      const reader = decode((writer) => {
        writer.int32(8);
      });
      reader.int32();
      reader.int32();
    }).toThrow("Index out of range");
  });

  it("decodes sint32", () => {
    const reader = decode((writer) => {
      writer.sint32(8);
      writer.sint32(-100);
      writer.sint32(2147483647);
      writer.sint32(0);
    });
    expect(reader.sint32()).toBe(8);
    expect(reader.sint32()).toBe(-100);
    expect(reader.sint32()).toBe(2147483647);
    expect(reader.sint32()).toBe(0);
  });

  it("throws index out of range on sint32", () => {
    expect(() => {
      const reader = decode((writer) => {
        writer.sint32(8);
      });
      reader.sint32();
      reader.sint32();
    }).toThrow("Index out of range");
  });

  it("decodes uint64", () => {
    const reader = decode((writer) => {
      writer.uint64(8);
      writer.uint64(100);
      writer.uint64(2147483647);
      writer.uint64(0);
      writer.uint64(137438953472);
      writer.uint64(532);
    });

    expect(reader.uint64()).toBe(8);
    expect(reader.uint64()).toBe(100);
    expect(reader.uint64()).toBe(2147483647);
    expect(reader.uint64()).toBe(0);
    expect(reader.uint64()).toBe(137438953472);
    expect(reader.uint64()).toBe(532);
  });

  it("throws index out of range on uint64", () => {
    expect(() => {
      const reader = decode((writer) => {
        writer.uint64(8);
      });
      reader.uint64();
      reader.uint64();
    }).toThrow("Index out of range");
  });

  it("decodes int64", () => {
    const reader = decode((writer) => {
      writer.int64(8);
      writer.int64(-100);
      writer.int64(2147483647);
      writer.int64(0);
      writer.int64(137438953472);
      writer.int64(-643743532543);
      writer.int64(643);
    });

    expect(reader.int64()).toBe(8);
    expect(reader.int64()).toBe(-100);
    expect(reader.int64()).toBe(2147483647);
    expect(reader.int64()).toBe(0);
    expect(reader.int64()).toBe(137438953472);
    expect(reader.int64()).toBe(-643743532543);
    expect(reader.int64()).toBe(643);
  });

  it("throws index out of range on int64", () => {
    expect(() => {
      const reader = decode((writer) => {
        writer.int64(8);
      });
      reader.int64();
      reader.int64();
    }).toThrow("Index out of range");
  });

  it("decodes sint64", () => {
    const reader = decode((writer) => {
      writer.sint64(8);
      writer.sint64(-100);
      writer.sint64(2147483647);
      writer.sint64(0);
      writer.sint64(137438953472);
      writer.sint64(-643743532543);
      writer.sint64(643);
    });

    expect(reader.sint64()).toBe(8);
    expect(reader.sint64()).toBe(-100);
    expect(reader.sint64()).toBe(2147483647);
    expect(reader.sint64()).toBe(0);
    expect(reader.sint64()).toBe(137438953472);
    expect(reader.sint64()).toBe(-643743532543);
    expect(reader.sint64()).toBe(643);
  });

  it("throws index out of range on sint64", () => {
    expect(() => {
      const reader = decode((writer) => {
        writer.sint64(8);
      });
      reader.sint64();
      reader.sint64();
    }).toThrow("Index out of range");
  });

  it("decodes bool", () => {
    const reader = decode((writer) => {
      writer.bool(true);
      writer.bool(false);
      writer.bool(false);
      writer.bool(true);
    });
    expect(reader.bool()).toBe(true);
    expect(reader.bool()).toBe(false);
    expect(reader.bool()).toBe(false);
    expect(reader.bool()).toBe(true);
  });

  it("throws index out of range on bool", () => {
    expect(() => {
      const reader = decode((writer) => {
        writer.bool(true);
      });
      reader.bool();
      reader.bool();
    }).toThrow("Index out of range");
  });

  it("decodes fixed32", () => {
    const reader = decode((writer) => {
      writer.fixed32(8);
      writer.fixed32(100);
      writer.fixed32(4294967295);
      writer.fixed32(0);
    });
    expect(reader.fixed32()).toBe(8);
    expect(reader.fixed32()).toBe(100);
    expect(reader.fixed32()).toBe(4294967295);
    expect(reader.fixed32()).toBe(0);
  });

  it("throws index out of range on fixed32", () => {
    expect(() => {
      const reader = decode((writer) => {
        writer.fixed32(8);
      });
      reader.fixed32();
      reader.fixed32();
    }).toThrow("Index out of range");
  });

  it("decodes sfixed32", () => {
    const reader = decode((writer) => {
      writer.sfixed32(8);
      writer.sfixed32(-100);
      writer.sfixed32(2147483647);
      writer.sfixed32(0);
    });
    expect(reader.sfixed32()).toBe(8);
    expect(reader.sfixed32()).toBe(-100);
    expect(reader.sfixed32()).toBe(2147483647);
    expect(reader.sfixed32()).toBe(0);
  });

  it("throws index out of range on sfixed32", () => {
    expect(() => {
      const reader = decode((writer) => {
        writer.sfixed32(8);
      });
      reader.sfixed32();
      reader.sfixed32();
    }).toThrow("Index out of range");
  });

  it("decodes fixed64", () => {
    const reader = decode((writer) => {
      writer.fixed64(8);
      writer.fixed64(100);
      writer.fixed64(2147483647);
      writer.fixed64(0);
      writer.fixed64(137438953472);
      writer.fixed64(643743532543);
    });
    expect(reader.fixed64()).toBe(8);
    expect(reader.fixed64()).toBe(100);
    expect(reader.fixed64()).toBe(2147483647);
    expect(reader.fixed64()).toBe(0);
    expect(reader.fixed64()).toBe(137438953472);
    expect(reader.fixed64()).toBe(643743532543);
  });

  it("throws index out of range on fixed64", () => {
    expect(() => {
      const reader = decode((writer) => {
        writer.fixed64(8);
      });
      reader.fixed64();
      reader.fixed64();
    }).toThrow("Index out of range");
  });

  it("decodes sfixed64", () => {
    const reader = decode((writer) => {
      writer.sfixed64(8);
      writer.sfixed64(-100);
      writer.sfixed64(2147483647);
      writer.sfixed64(0);
      writer.sfixed64(137438953472);
      writer.sfixed64(-643743532543);
    });
    expect(reader.sfixed64()).toBe(8);
    expect(reader.sfixed64()).toBe(-100);
    expect(reader.sfixed64()).toBe(2147483647);
    expect(reader.sfixed64()).toBe(0);
    expect(reader.sfixed64()).toBe(137438953472);
    expect(reader.sfixed64()).toBe(-643743532543);
  });

  it("throws index out of range on sfixed64", () => {
    expect(() => {
      const reader = decode((writer) => {
        writer.sfixed64(8);
      });
      reader.sfixed64();
      reader.sfixed64();
    }).toThrow("Index out of range");
  });

  it("decodes float", () => {
    const reader = decode((writer) => {
      writer.float(5.3);
      writer.float(-1.3);
      writer.float(0);
      writer.float(335345214.53);
    });
    expect(reader.float()).toBe(5.300000190734863);
    expect(reader.float()).toBe(-1.2999999523162842);
    expect(reader.float()).toBe(0);
    expect(reader.float()).toBe(335345216);
  });

  it("throws index out of range on float", () => {
    expect(() => {
      const reader = decode((writer) => {
        writer.float(5.3);
      });
      reader.float();
      reader.float();
    }).toThrow("Index out of range");
  });

  it("decodes double", () => {
    const reader = decode((writer) => {
      writer.double(5.3);
      writer.double(-1.3);
      writer.double(0);
      writer.double(335345214.53);
    });
    expect(reader.double()).toBe(5.3);
    expect(reader.double()).toBe(-1.3);
    expect(reader.double()).toBe(0);
    expect(reader.double()).toBe(335345214.53);
  });

  it("throws index out of range on double", () => {
    expect(() => {
      const reader = decode((writer) => {
        writer.double(5.3);
      });
      reader.double();
      reader.double();
    }).toThrow("Index out of range");
  });

  it("decodes bytes", () => {
    const reader = decode((writer) => {
      writer.bytes(
        uint8([0b00000010, 0b00010100, 0b00000000, 0b00100000, 0b00000001])
      );
      writer.bytes(uint8([0b11111111, 0b00010100]));
      writer.bytes(uint8([]));
    });
    expect(reader.bytes()).toStrictEqual(
      uint8([0b00000010, 0b00010100, 0b00000000, 0b00100000, 0b00000001])
    );
    expect(reader.bytes()).toStrictEqual(uint8([0b11111111, 0b00010100]));
    expect(reader.bytes()).toStrictEqual(uint8([]));
  });

  it("throws index out of range on bytes", () => {
    expect(() => {
      const reader = decode((writer) => {
        writer.bytes(uint8([2, 32, 0, 32, 1]));
      });
      reader.bytes();
      reader.bytes();
    }).toThrow("Index out of range");
  });

  it("decodes string", () => {
    const reader = decode((writer) => {
      writer.string("test test test");
      writer.string("");
      writer.string("🌈🌱");
    });
    expect(reader.string()).toBe("test test test");
    expect(reader.string()).toBe("");
    expect(reader.string()).toBe("🌈🌱");
  });

  it("throws index out of range on string", () => {
    expect(() => {
      const reader = decode((writer) => {
        writer.string("test test test");
      });
      reader.string();
      reader.string();
    }).toThrow("Index out of range");
  });

  it("skips bytes", () => {
    const reader = decode((writer) => {
      writer.fixed64(8);
      writer.int32(-100);
      writer.sint64(124);
      writer.string("test");
      writer.bool(true);
      writer.bool(false);
      writer.int32(5);
    });
    // skip 8 bytes - fixed64
    reader.skip(8);
    expect(reader.int32()).toBe(-100);
    // skip varint
    reader.skip(0);
    expect(reader.string()).toBe("test");
    // skip 2 bytes - bool and bool
    reader.skip(2);
    expect(reader.int32()).toBe(5);
  });

  it("throws index out of range on skip", () => {
    expect(() => {
      const reader = decode((writer) => {
        writer.fixed64(8);
      });
      // skip 8 bytes - fixed64
      reader.skip(8);
      // skip varint
      reader.skip(0);
    }).toThrow("Index out of range");
  });

  it("skips types", () => {
    const reader = decode((writer) => {
      writer.fixed64(8);
      writer.int32(-100);
      writer.sint64(124);
      writer.string("test");
      writer.fixed32(100);
      writer.fixed32(5);
      writer.sint32(-5);
    });
    reader.skipType(WireType.FIXED_64);
    expect(reader.int32()).toBe(-100);
    reader.skipType(WireType.VARINT);
    reader.skipType(WireType.LENGTH_DELIMITED);
    expect(reader.fixed32()).toBe(100);
    reader.skipType(WireType.FIXED_32);
    expect(reader.sint32()).toBe(-5);
  });

  it("throws index out of range on skipType", () => {
    expect(() => {
      const reader = decode((writer) => {
        writer.fixed64(8);
      });
      reader.skipType(WireType.FIXED_64);
      reader.skipType(WireType.VARINT);
    }).toThrow("Index out of range");
  });

  it("throws invalid wire type on skipType", () => {
    expect(() => {
      const reader = decode((writer) => {
        writer.fixed64(8);
      });
      reader.skipType(100);
    }).toThrow("Invalid wire type 100");
  });
});
