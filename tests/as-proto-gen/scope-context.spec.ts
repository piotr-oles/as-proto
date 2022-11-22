import test from "ava";
import { ScopeContext } from "../../packages/as-proto-gen/src/scope-context";
import { FileContext } from "../../packages/as-proto-gen/src/file-context";

const fileContext: FileContext = {} as FileContext;

test("ScopeContext.getFileContext() returns file context passed to constructor", (t) => {
  const scopeContext = new ScopeContext(fileContext);

  t.is(scopeContext.getFileContext(), fileContext);
});

test("ScopeContext.registerName() returns original name for empty reserved set", (t) => {
  const scopeContext = new ScopeContext(fileContext);

  t.is(scopeContext.registerName("blabla"), "blabla");
});

test("ScopeContext.registerName() returns suffixed name for reserved keyword", (t) => {
  const scopeContext = new ScopeContext(fileContext);

  t.is(scopeContext.registerName("if"), "if_");
});

test("ScopeContext.registerName() returns suffixed name for reserved word", (t) => {
  const scopeContext = new ScopeContext(fileContext, [
    "blabla",
    "blabla_2",
    "blabla_3",
  ]);

  t.is(scopeContext.registerName("blabla"), "blabla_4");
});

test("ScopeContext.registerName() returns suffixed name for reserved keyword in reserved set", (t) => {
  const scopeContext = new ScopeContext(fileContext, ["if_", "if_2"]);

  t.is(scopeContext.registerName("if"), "if_3");
});
