import {
  CodeGeneratorRequest,
  CodeGeneratorResponse,
} from "google-protobuf/google/protobuf/compiler/plugin_pb";
import { GeneratorContext } from "./generator-context";
import { generateFile } from "./generate/file";
import { getPathWithoutExtension } from "./names";
import { FileContext } from "./file-context";
import prettier from "prettier";
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
      const outputFile = new CodeGeneratorResponse.File();
      const outputFilePath =
        getPathWithoutExtension(fileName, ".proto") + ".ts";
      outputFile.setName(outputFilePath);

      const generatedCode = generateFile(
        fileDescriptor,
        new FileContext(outputFilePath, generatorContext, fileDescriptor),
        compilerOptions,
        compilerVersion
      );
      let formattedCode = generatedCode;
      try {
        formattedCode = prettier.format(generatedCode, {
          parser: "typescript",
        });
      } catch (error) {
        console.error(error);
      }

      outputFile.setContent(formattedCode);
      codeGenResponse.addFile(outputFile);
    }

    process.stdout.write(Buffer.from(codeGenResponse.serializeBinary().buffer));
  } catch (error) {
    reportErrorAndExit(error);
  }
});
