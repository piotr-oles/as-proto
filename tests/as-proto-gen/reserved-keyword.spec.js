import test from "ava";
import {
  isReservedKeyword,
  getSafeName,
} from "as-proto-gen/lib/reserved-keywords.js";

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

test("getSafeName() returns original name for non-reserved keyword", (t) => {
  t.is(getSafeName("blabla"), "blabla");
});

test("getSafeName() returns suffixed name for reserved keyword", (t) => {
  t.is(getSafeName("for"), "for_");
});
