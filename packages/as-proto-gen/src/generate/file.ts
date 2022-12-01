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

function getFilePrefix(fileDescriptor: FileDescriptorProto) {
  const filePackage = fileDescriptor.getPackage();
  // TODO: sanitize prefix
  return filePackage ? filePackage.replace(/\./g, "/") : undefined;
}

function getNestedMessagePrefix(parentMessageDescriptors: DescriptorProto[]) {
  return parentMessageDescriptors.length
    ? parentMessageDescriptors
        // TODO: sanitize message name
        .map((messageDescriptor) => messageDescriptor.getName())
        .join("/")
    : undefined;
}

export function getOutputFilePath(
  fileDescriptor: FileDescriptorProto,
  messageOrEnumDescriptor: DescriptorProto | EnumDescriptorProto,
  parentMessageDescriptors: DescriptorProto[] = []
) {
  // TODO: sanitize message name
  return [
    getFilePrefix(fileDescriptor),
    getNestedMessagePrefix(parentMessageDescriptors),
    `${messageOrEnumDescriptor.getName()}.ts`,
  ]
    .filter(Boolean)
    .join("/");
}

function generateMessageFiles(
  fileDescriptor: FileDescriptorProto,
  messageDescriptor: DescriptorProto,
  generatorContext: GeneratorContext,
  compilerOptions: Set<string>,
  compilerVersion: Version | undefined,
  parentMessageDescriptors: DescriptorProto[] = []
): CodeGeneratorResponse.File[] {
  const outputFile = new CodeGeneratorResponse.File();
  const outputFilePath = getOutputFilePath(
    fileDescriptor,
    messageDescriptor,
    parentMessageDescriptors
  );
  const outputFileContext = new FileContext(outputFilePath, generatorContext);

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
  const outputFileContext = new FileContext(outputFilePath, generatorContext);

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
