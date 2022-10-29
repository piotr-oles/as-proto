import { execSync } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";
import * as url from "node:url";

const cwd = url.fileURLToPath(new URL(".", import.meta.url));

// generate AssemblyScript files
console.log("Generating AssemblyScript protobuf files...");
execSync(
  "protoc --plugin='protoc-gen-as=../packages/as-proto-gen/bin/as-proto-gen' --as_out='./assembly' ./proto/*.proto",
  { cwd: cwd, stdio: "pipe" }
);
// build AssemblyScript test files
console.log("Building AssemblyScript test files...");
const asDirectory = path.join(cwd, "assembly");
const asFiles = fs
  .readdirSync(asDirectory)
  .filter((file) => file.endsWith(".ts") && !file.endsWith(".d.ts"));
for (const asFile of asFiles) {
  const wasmFile = asFile.slice(0, -3) + ".wasm";
  execSync(`asc ${asFile} --outFile=${wasmFile} --config asconfig.json`, {
    cwd: asDirectory,
  });
}

// generate JavaScript files
console.log("Generating JavaScript protobuf files...");
execSync("protoc --js_out=import_style=commonjs,binary:./js ./proto/*.proto", {
  cwd: cwd,
  stdio: "pipe",
});
// rename generated files to have .cjs extension
console.log("Renaming generated JavaScript files to use .cjs extension...");
const jsDirectory = path.join(cwd, "js/proto");
const jsFiles = fs
  .readdirSync(jsDirectory)
  .filter((file) => file.endsWith(".js"));
for (const jsFile of jsFiles) {
  fs.renameSync(
    path.join(jsDirectory, jsFile),
    path.join(jsDirectory, jsFile.slice(0, -3) + ".cjs")
  );
}
