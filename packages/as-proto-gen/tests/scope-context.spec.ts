import test from "ava";
import { ScopeContext } from "../src/scope-context";
import { FileContext } from "../src/file-context";
import { GeneratorContext } from "../src/generator-context";
import { FileDescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb";

const fileContext = new FileContext(
  {} as GeneratorContext,
  {} as FileDescriptorProto
);

test("ScopeContext.getFileContext() returns file context passed to constructor", (t) => {
  const scopeContext = new ScopeContext(fileContext);

  t.is(scopeContext.getFileContext(), fileContext);
});

test("ScopeContext.getSafeName() returns original name for non-reserved keyword", (t) => {
  const scopeContext = new ScopeContext(fileContext);

  t.is(scopeContext.getSafeName("blabla"), "blabla");
});

test("ScopeContext.getSafeName() returns suffixed name for reserved keyword", (t) => {
  const scopeContext = new ScopeContext(fileContext);

  t.is(scopeContext.getSafeName("for"), "for_");
});

test("ScopeContext.getFreeName() returns original name for empty reserved set", (t) => {
  const scopeContext = new ScopeContext(fileContext);

  t.is(scopeContext.getFreeName("blabla"), "blabla");
});

test("ScopeContext.getFreeName() returns suffixed name for reserved keyword", (t) => {
  const scopeContext = new ScopeContext(fileContext);

  t.is(scopeContext.getFreeName("if"), "if_");
});

test("ScopeContext.getFreeName() returns suffixed name for reserved word", (t) => {
  const scopeContext = new ScopeContext(fileContext, [
    "blabla",
    "blabla_2",
    "blabla_3",
  ]);

  t.is(scopeContext.getFreeName("blabla"), "blabla_4");
});

test("ScopeContext.getFreeName() returns suffixed name for reserved keyword in reserved set", (t) => {
  const scopeContext = new ScopeContext(fileContext, ["if_", "if_2"]);

  t.is(scopeContext.getFreeName("if"), "if_3");
});
