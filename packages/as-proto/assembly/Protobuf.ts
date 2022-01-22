import { FixedWriter } from "./internal/FixedWriter";
import { FixedReader } from "./internal/FixedReader";
import { Writer } from "./Writer";
import { Reader } from "./Reader";

// re-use instances to reduce allocations and GC
const WRITER = new FixedWriter();
const READER = new FixedReader(new Uint8Array(0));

@final
export class Protobuf {
  static encode<TMessage>(
    message: TMessage,
    encoder: (message: TMessage, writer: Writer) => void
  ): Uint8Array {
    // 1st pass - calculate length
    WRITER.sizer.reset();
    encoder(message, WRITER.sizer);
    // 2nd pass - write data using length from the 1st pass
    WRITER.reset();
    encoder(message, WRITER);
    return WRITER.finish();
  }

  static decode<TMessage>(
    buffer: Uint8Array,
    decoder: (reader: Reader, length: i32) => TMessage,
    length: i32 = -1
  ): TMessage {
    READER.reset(buffer);
    return decoder(READER, length);
  }
}
