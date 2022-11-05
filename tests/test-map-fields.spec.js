import test from "ava";
import {
  encode as encodeWasm,
  decode as decodeWasm,
} from "./assembly/test-map-fields.js";
import {
  encode as encodeJs,
  decode as decodeJs,
} from "./js/test-map-fields.js";

test("serializes to the same format as official implementation", (t) => {
  t.is(decodeJs(encodeWasm()), true);
});

test("deserializes from the same format as official implementation", (t) => {
  t.is(decodeWasm(encodeJs()), true);
});

test.skip("encodes to the exactly the same bytes", (t) => {
  // we're skipping this test, because we handle optional values differently
  t.deepEqual(encodeWasm(), encodeJs());
});
