import * as assert from "assert";
import * as fs from "fs-extra";
import {
  CodeGeneratorRequest,
  CodeGeneratorResponse,
} from "google-protobuf/google/protobuf/compiler/plugin_pb";

import { FileContext } from "./file-context";
import { generateFile, addFile, generateExport } from "./generate/file";
import { GeneratorContext } from "./generator-context";
import { getPathWithoutProto } from "./names";

fs.readFile(process.stdin.fd, (err, input) => {
  if (err !== null) {
    console.log("An error occurred in as-proto generator plugin.");
    console.error(err);
    process.exit(1);
  }

  try {
    const codeGenRequest = CodeGeneratorRequest.deserializeBinary(input);
    const codeGenResponse = new CodeGeneratorResponse();
    const generatorContext = new GeneratorContext();

    const v = codeGenRequest.getCompilerVersion();
    let PROTOC_VERSION = "";
    if (v) {
      PROTOC_VERSION = v.toArray().slice(0, 3).join(".");
      PROTOC_VERSION += v.toArray()[3];
    } else {
      PROTOC_VERSION = "undefined";
    }

    codeGenResponse.setSupportedFeatures(
      CodeGeneratorResponse.Feature.FEATURE_PROTO3_OPTIONAL
    );

    for (const fileDescriptor of codeGenRequest.getProtoFileList()) {
      const fileDescriptorName = fileDescriptor.getName();
      assert.ok(fileDescriptorName);
      generatorContext.registerFile(fileDescriptor);
    }

    for (const fileName of codeGenRequest.getFileToGenerateList()) {
      const fileDescriptor =
        generatorContext.getFileDescriptorByFileName(fileName);
      assert.ok(fileDescriptor);

      const generatedCode = generateFile(
        fileDescriptor,
        new FileContext(generatorContext, fileDescriptor)
      );
      addFile(
        getPathWithoutProto(fileName) + ".ts",
        generatedCode,
        codeGenResponse,
        PROTOC_VERSION as string
      );
    }

    const parameters: Set<string> = new Set(
      codeGenRequest.getParameter()?.split(",")
    );
    if (parameters.has("gen-dependencies")) {
      for (const fileName of generatorContext.getProtoDependencies()) {
        if (codeGenRequest.getFileToGenerateList().includes(fileName)) {
          continue;
        }
        const fileDescriptor =
          generatorContext.getFileDescriptorByFileName(fileName);
        assert.ok(fileDescriptor);

        const generatedCode = generateFile(
          fileDescriptor,
          new FileContext(generatorContext, fileDescriptor)
        );
        addFile(
          getPathWithoutProto(fileName) + ".ts",
          generatedCode,
          codeGenResponse,
          PROTOC_VERSION as string
        );
        codeGenRequest.addFileToGenerate(fileName);
      }
    }

    generateExport(
      codeGenRequest,
      codeGenResponse,
      generatorContext,
      PROTOC_VERSION as string
    );

    process.stdout.write(Buffer.from(codeGenResponse.serializeBinary().buffer));
  } catch (error) {
    console.log("An error occurred in as-proto generator plugin.");
    console.error(error);
    process.exit(1);
  }
});
