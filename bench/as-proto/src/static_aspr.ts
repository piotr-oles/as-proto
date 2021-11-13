import * as fs from "fs";
import * as path from "path";
import { instantiateSync } from "@assemblyscript/loader";

const instance = instantiateSync<typeof import("../../data/static_aspr")>(
  fs.readFileSync(path.resolve(__dirname, "./static_aspr.wasm"))
);

export function encode(): void {
  instance.exports.encode();
}

export function decode(): void {
  instance.exports.decode();
}

export function encodeDecode(): void {
  instance.exports.encodeDecode();
}
