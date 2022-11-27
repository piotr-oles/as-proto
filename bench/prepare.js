import { execSync } from "node:child_process";
import * as path from "node:path";
import * as url from "node:url";

const cwd = url.fileURLToPath(new URL(".", import.meta.url));
const dataDir = path.join(cwd, "./data");

// generate AssemblyScript files
console.log("Generating AssemblyScript protobuf file...");
execSync(
  "protoc --plugin='protoc-gen-as=../../packages/as-proto-gen/bin/as-proto-gen' --as_out='./assembly' ./bench.proto",
  { cwd: dataDir, stdio: "pipe" }
);
// build AssemblyScript bench files
console.log("Building AssemblyScript bench file...");
execSync(
  `asc ./assembly/static_aspr.ts --outFile=./static_aspr.wasm --config ./assembly/asconfig.json`,
  {
    cwd: dataDir,
  }
);
