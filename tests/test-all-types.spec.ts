import test from "ava";
import * as fs from "fs-extra";
import * as path from "path";
import { instantiate } from "@assemblyscript/loader";
import { encodeTestAllTypesMessage as encodeTestAllTypesMessageJs } from "./js/test-all-types";

const loadAssembly = async <TExports extends Record<string, unknown>>(
  fileName: string
) => {
  const wasmBuffer = await fs.readFile(path.join(__dirname, fileName));
  const { exports } = await instantiate<TExports>(wasmBuffer);

  return exports;
};

type TestAllTypesWasm = {
  encodeTestAllTypesMessage(): number;
  decodeTestAllTypesMessage(bytes: number): number;
  UINT8_ARRAY_ID: number;
};

test("serializes to the same format as official implementation", async (t) => {
  const { encodeTestAllTypesMessage, __getUint8Array } =
    await loadAssembly<TestAllTypesWasm>("assembly/test-all-types.wasm");

  const wasmResult = __getUint8Array(encodeTestAllTypesMessage());
  const jsResult = encodeTestAllTypesMessageJs();

  t.deepEqual(wasmResult, jsResult);
});

test("deserializes from the same format as official implementation", async (t) => {
  const {
    decodeTestAllTypesMessage,
    UINT8_ARRAY_ID,
    __newArray,
    __pin,
    __unpin,
  } = await loadAssembly<TestAllTypesWasm>("assembly/test-all-types.wasm");

  const jsResult = encodeTestAllTypesMessageJs();
  const wasmBytes = __newArray(UINT8_ARRAY_ID, jsResult);
  __pin(wasmBytes);
  const wasmResult = decodeTestAllTypesMessage(wasmBytes);
  __unpin(wasmBytes);

  t.is(wasmResult, 1);
});
