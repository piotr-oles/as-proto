import test from 'ava';
import {getFieldTypeName, getPathWithoutProto, ensureRelativeImportDot, getTypeName} from "../src/names";

test('getPathWithoutProto', (t) => {
    t.is(getPathWithoutProto('./test.proto'), './test');
    t.is(getPathWithoutProto('./test.ts'), './test.ts');
    t.is(getPathWithoutProto('./test'), './test');
    t.is(getPathWithoutProto(''), '');
})

test('getFieldTypeName', (t) => {
    t.is(getFieldTypeName('some.file.package', 'Some.Type'), '.some.file.package.Some.Type')
    t.is(getFieldTypeName('', 'Some.Type'), '.Some.Type')
    t.is(getFieldTypeName('some.file.package', ''), '.some.file.package')
    t.is(getFieldTypeName('', ''), '')
})

test('getTypeName', (t) => {
    t.is(getTypeName('.some.file.package.Some.Type'), 'some.file.package.Some.Type')
    t.is(getTypeName('.Some.Type'), 'Some.Type')
    t.is(getTypeName('.some.file.package'), 'some.file.package')
    t.is(getTypeName('some.file.package.Some.Type'), 'some.file.package.Some.Type')
    t.is(getTypeName(''), '')
    t.is(getTypeName('.'), '')
})

test('ensureRelativeImportDot', (t) => {
   t.is(ensureRelativeImportDot('test'), './test')
   t.is(ensureRelativeImportDot('./test'), './test')
   t.is(ensureRelativeImportDot('../test'), '../test')
   t.is(ensureRelativeImportDot('test/test'), './test/test')
   t.is(ensureRelativeImportDot('/test/test'), '/test/test')
});