import {
  CodeGeneratorRequest,
  CodeGeneratorResponse,
} from "google-protobuf/google/protobuf/compiler/plugin_pb";
import { GeneratorContext } from "./generator-context";
import { generateFiles } from "./generate/file";
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
      generatorContext.registerFile(fileDescriptor);

      if (compilerOptions.has("no-gen-dependencies")) {
        const fileName = fileDescriptor.getName();
        assert.ok(fileName);
        if (!codeGenRequest.getFileToGenerateList().includes(fileName)) {
          // file not listed directly in the command - skip
          continue;
        }
      }

      const outputFiles = generateFiles(
        fileDescriptor!,
        generatorContext,
        compilerOptions,
        compilerVersion
      );

      for (const outputFile of outputFiles) {
        try {
          // try to reformat code
          outputFile.setContent(
            prettier.format(outputFile.getContent() || "", {
              parser: "typescript",
            })
          );
        } catch (error) {
          console.error(error);
        }

        codeGenResponse.addFile(outputFile);
      }
    }

    process.stdout.write(Buffer.from(codeGenResponse.serializeBinary().buffer));
  } catch (error) {
    reportErrorAndExit(error);
  }
});
