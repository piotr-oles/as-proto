import test from "ava";
import {
  encode as encodeWasm,
  decode as decodeWasm,
} from "./assembly/test-all-types.js";
import { encode as encodeJs, decode as decodeJs } from "./js/test-all-types.js";

test("serializes to the same format as official implementation", (t) => {
  t.is(decodeJs(encodeWasm()), true);
});

test("deserializes from the same format as official implementation", (t) => {
  t.is(decodeWasm(encodeJs()), true);
});

test("encodes to the exactly the same bytes", (t) => {
  t.deepEqual(encodeWasm(), encodeJs());
});
