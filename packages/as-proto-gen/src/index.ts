import {
  CodeGeneratorRequest,
  CodeGeneratorResponse,
} from "google-protobuf/google/protobuf/compiler/plugin_pb";
import { GeneratorContext } from "./generator-context";
import { generateFile, addFile, generateExport } from "./generate/file";
import { getPathWithoutProto } from "./names";
import { FileContext } from "./file-context";
import * as fs from "fs-extra";
import * as assert from "assert";

const reportErrorAndExit = (error: unknown) => {
  console.log("An error occurred in as-proto generator plugin.");
  console.error(error);
  process.exit(1);
};

fs.readFile(process.stdin.fd, (error, input) => {
  if (error) {
    reportErrorAndExit(error);
    return;
  }

  try {
    const codeGenRequest = CodeGeneratorRequest.deserializeBinary(input);
    const codeGenResponse = new CodeGeneratorResponse();
    const generatorContext = new GeneratorContext();

    const compilerOptions = new Set(codeGenRequest.getParameter()?.split(","));
    const compilerVersion = codeGenRequest.getCompilerVersion();

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
        new FileContext(generatorContext, fileDescriptor),
        compilerOptions
      );

      addFile(
        getPathWithoutProto(fileName) + ".ts",
        generatedCode,
        codeGenResponse,
        compilerVersion
      );
    }

    if (compilerOptions.has("gen-dependencies")) {
      for (const fileName of generatorContext.getProtoDependencies()) {
        if (codeGenRequest.getFileToGenerateList().includes(fileName)) {
          continue;
        }

        const fileDescriptor =
          generatorContext.getFileDescriptorByFileName(fileName);
        assert.ok(fileDescriptor);

        const generatedCode = generateFile(
          fileDescriptor,
          new FileContext(generatorContext, fileDescriptor),
          compilerOptions
        );

        addFile(
          getPathWithoutProto(fileName) + ".ts",
          generatedCode,
          codeGenResponse,
          compilerVersion
        );
        codeGenRequest.addFileToGenerate(fileName);
      }
    }

    generateExport(
      codeGenRequest,
      codeGenResponse,
      generatorContext,
      compilerVersion
    );

    process.stdout.write(Buffer.from(codeGenResponse.serializeBinary().buffer));
  } catch (error) {
    reportErrorAndExit(error);
  }
});
