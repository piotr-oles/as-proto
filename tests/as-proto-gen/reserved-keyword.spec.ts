import test from "ava";
import { isReservedKeyword } from "../../packages/as-proto-gen/src/reserved-keywords";

test("isReservedKeyword() returns true for reserved keyword", (t) => {
  t.true(isReservedKeyword("for"));
  t.true(isReservedKeyword("if"));
});

test("isReservedKeyword() returns false for not reserved keyword", (t) => {
  t.false(isReservedKeyword("blabla"));
});

test("isReservedKeyword() returns false for empty input", (t) => {
  t.false(isReservedKeyword(""));
  t.false(isReservedKeyword("  "));
});
