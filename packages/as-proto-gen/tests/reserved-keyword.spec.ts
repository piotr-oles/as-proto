import test from 'ava';
import {isReservedKeyword} from "../src/reserved-keywords";

test('isReservedKeyword', (t) => {
    t.true(isReservedKeyword('for'))
    t.false(isReservedKeyword('blabla'))
    t.false(isReservedKeyword(''))
})