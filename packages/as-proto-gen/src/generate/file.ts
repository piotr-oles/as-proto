import { generateMessage } from "./message";
import {
  DescriptorProto,
  EnumDescriptorProto,
  FileDescriptorProto,
} from "google-protobuf/google/protobuf/descriptor_pb";
import {
  CodeGeneratorResponse,
  Version,
} from "google-protobuf/google/protobuf/compiler/plugin_pb";
import { FileContext } from "../file-context";
import { generateEnum } from "./enum";
import { generateHeaderComment } from "./header";
import { GeneratorContext } from "../generator-context";
import assert from "assert";
import { sanitizeFileName } from "../names";

export function generateFiles(
  fileDescriptor: FileDescriptorProto,
  generatorContext: GeneratorContext,
  compilerOptions: Set<string>,
  compilerVersion: Version | undefined
): CodeGeneratorResponse.File[] {
  const outputFiles: CodeGeneratorResponse.File[] = [];

  for (const messageDescriptor of fileDescriptor.getMessageTypeList()) {
    outputFiles.push(
      ...generateMessageFiles(
        fileDescriptor,
        messageDescriptor,
        generatorContext,
        compilerOptions,
        compilerVersion
      )
    );
  }
  for (const enumDescriptor of fileDescriptor.getEnumTypeList()) {
    outputFiles.push(
      generateEnumFile(
        fileDescriptor,
        enumDescriptor,
        generatorContext,
        compilerVersion
      )
    );
  }

  return outputFiles;
}

function getFilePrefix(
  fileDescriptor: FileDescriptorProto
): string | undefined {
  const filePackage = fileDescriptor.getPackage();
  if (!filePackage) {
    return undefined;
  }

  return filePackage
    .split(".")
    .map((filePackageSegment) => sanitizeFileName(filePackageSegment))
    .join("/");
}

function getNestedMessagePrefix(parentMessageDescriptors: DescriptorProto[]) {
  if (!parentMessageDescriptors.length) {
    return undefined;
  }

  return parentMessageDescriptors
    .map((messageDescriptor) => {
      const messageName = messageDescriptor.getName();
      assert.ok(messageName !== undefined);

      return sanitizeFileName(messageName);
    })
    .join("/");
}

export function getOutputFilePath(
  fileDescriptor: FileDescriptorProto,
  messageOrEnumDescriptor: DescriptorProto | EnumDescriptorProto,
  parentMessageDescriptors: DescriptorProto[] = []
) {
  const messageName = messageOrEnumDescriptor.getName();
  assert.ok(messageName !== undefined);

  const outputFileName = sanitizeFileName(`${messageName}.ts`);
  const path = [outputFileName];
  const filePrefix = getFilePrefix(fileDescriptor);
  const nestedMessagePrefix = getNestedMessagePrefix(parentMessageDescriptors);

  if (nestedMessagePrefix) {
    path.unshift(nestedMessagePrefix);
  }

  if (filePrefix) {
    path.unshift(filePrefix);
  }
  return path.join("/");
}

function generateMessageFiles(
  fileDescriptor: FileDescriptorProto,
  messageDescriptor: DescriptorProto,
  generatorContext: GeneratorContext,
  compilerOptions: Set<string>,
  compilerVersion: Version | undefined,
  parentMessageDescriptors: DescriptorProto[] = []
): CodeGeneratorResponse.File[] {
  const messageOptions = messageDescriptor.getOptions();

  if (messageOptions !== undefined && messageOptions.getMapEntry()) {
    // this message type is the entry tuple for a map
    // don't output it - we handle this using built-in Map structure
    return [];
  }

  const outputFile = new CodeGeneratorResponse.File();
  const outputFilePath = getOutputFilePath(
    fileDescriptor,
    messageDescriptor,
    parentMessageDescriptors
  );
  const outputFileContext = new FileContext(
    outputFilePath,
    generatorContext,
    fileDescriptor
  );

  const messageCode = generateMessage(
    messageDescriptor,
    outputFileContext,
    compilerOptions
  );
  outputFile.setContent(
    [
      generateHeaderComment(compilerVersion),
      outputFileContext.getImportsCode(),
      messageCode,
    ].join("\n")
  );
  outputFile.setName(outputFilePath);

  const nestedOutputFiles: CodeGeneratorResponse.File[] = [];
  for (const nestedMessageDescriptor of messageDescriptor.getNestedTypeList()) {
    nestedOutputFiles.push(
      ...generateMessageFiles(
        fileDescriptor,
        nestedMessageDescriptor,
        generatorContext,
        compilerOptions,
        compilerVersion,
        [...parentMessageDescriptors, messageDescriptor]
      )
    );
  }
  for (const nestedEnumDescriptor of messageDescriptor.getEnumTypeList()) {
    nestedOutputFiles.push(
      generateEnumFile(
        fileDescriptor,
        nestedEnumDescriptor,
        generatorContext,
        compilerVersion,
        [...parentMessageDescriptors, messageDescriptor]
      )
    );
  }

  return [outputFile, ...nestedOutputFiles];
}

function generateEnumFile(
  fileDescriptor: FileDescriptorProto,
  enumDescriptor: EnumDescriptorProto,
  generatorContext: GeneratorContext,
  compilerVersion: Version | undefined,
  parentMessageDescriptors: DescriptorProto[] = []
): CodeGeneratorResponse.File {
  const outputFile = new CodeGeneratorResponse.File();
  const outputFilePath = getOutputFilePath(
    fileDescriptor,
    enumDescriptor,
    parentMessageDescriptors
  );
  const outputFileContext = new FileContext(
    outputFilePath,
    generatorContext,
    fileDescriptor
  );

  const enumCode = generateEnum(enumDescriptor, outputFileContext);
  outputFile.setContent(
    [
      generateHeaderComment(compilerVersion),
      outputFileContext.getImportsCode(),
      enumCode,
    ].join("\n")
  );
  outputFile.setName(outputFilePath);

  return outputFile;
}
