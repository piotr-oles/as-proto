import * as assert from "assert";
import * as fs from "fs";
import { CodeGeneratorRequest, CodeGeneratorResponse } from "google-protobuf/google/protobuf/compiler/plugin_pb";

import { FileContext } from "./file-context";
import { processFile, addFile, generateExport } from "./generate/file";
import { GeneratorContext } from "./generator-context";
import { getPathWithoutProto } from "./names";

fs.readFile("./code_generator_request.pb.bin", (err, input) => {
  if (err !== null) {
    console.log("An error occurred in as-proto generator plugin.");
    console.error(err);
    process.exit(1);
  }

  try {
    const codeGenRequest = CodeGeneratorRequest.deserializeBinary(input);
    const codeGenResponse = new CodeGeneratorResponse();
    const generatorContext = new GeneratorContext();

    const PROTOC_VERSION = codeGenRequest.getCompilerVersion()?.toArray().slice(0, 3).join(".");

    codeGenResponse.setSupportedFeatures(CodeGeneratorResponse.Feature.FEATURE_PROTO3_OPTIONAL);

    for (const fileDescriptor of codeGenRequest.getProtoFileList()) {
      const fileDescriptorName = fileDescriptor.getName();
      assert.ok(fileDescriptorName);
      generatorContext.registerFile(fileDescriptor);
    }

    const codePart = new Map<string, string[]>();
    for (const fileName of codeGenRequest.getFileToGenerateList()) {
      const fileDescriptor = generatorContext.getFileDescriptorByFileName(fileName);
      assert.ok(fileDescriptor);

      const generatedCode = processFile(fileDescriptor, new FileContext(generatorContext, fileDescriptor));
      addFile(getPathWithoutProto(fileName) + ".ts", generatedCode, codeGenResponse, PROTOC_VERSION as string);
    }

    generateExport(codeGenRequest, codeGenResponse, generatorContext, PROTOC_VERSION as string);

    process.stdout.write(Buffer.from(codeGenResponse.serializeBinary().buffer));
  } catch (error) {
    console.log("An error occurred in as-proto generator plugin.");
    console.error(error);
    process.exit(1);
  }
});
