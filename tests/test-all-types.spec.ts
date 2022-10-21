import test from "ava";
import * as fs from "fs-extra";
import * as path from "path";
import { instantiate } from "@assemblyscript/loader";
import { encodeTestAllTypesMessage as encodeTestAllTypesMessageJs } from "./js/test-all-types";

const loadWasm = async <TExports extends Record<string, unknown>>(
  fileName: string
) => {
  const { exports } = await instantiate<TExports>(
    await fs.readFile(path.join(__dirname, fileName))
  );

  return exports;
};

type TestAllTypesWasm = {
  encodeTestAllTypesMessage(): number;
  decodeTestAllTypesMessage(bytes: number): number;
  UINT8_ARRAY_ID: number;
};

test("serializes to the same format as official implementation", async (t) => {
  const { encodeTestAllTypesMessage, __getUint8Array } =
    await loadWasm<TestAllTypesWasm>("assembly/test-all-types.wasm");

  const wasmBytes = __getUint8Array(encodeTestAllTypesMessage());
  const jsBytes = encodeTestAllTypesMessageJs();

  t.deepEqual(wasmBytes, jsBytes);
});

test("deserializes from the same format as official implementation", async (t) => {
  const { decodeTestAllTypesMessage, UINT8_ARRAY_ID, __newArray } =
    await loadWasm<TestAllTypesWasm>("assembly/test-all-types.wasm");

  const jsBytes = encodeTestAllTypesMessageJs();
  const jsBytesInWasmPointer = __newArray(UINT8_ARRAY_ID, jsBytes);
  const wasmResult = decodeTestAllTypesMessage(jsBytesInWasmPointer);

  t.is(wasmResult, 1);
});
