import test from 'ava';
import {getFieldTypeName, getPathWithoutProto, ensureRelativeImportDot, getTypeName} from "../src/names";

test('getPathWithoutProto() returns file name without .proto suffix', (t) => {
    t.is(getPathWithoutProto('./test.proto'), './test');
    t.is(getPathWithoutProto('./test.ts'), './test.ts');
    t.is(getPathWithoutProto('./test'), './test');
    t.is(getPathWithoutProto(''), '');
})

test('getFieldTypeName() returns valid field type name for package and type', (t) => {
    t.is(getFieldTypeName('some.file.package', 'Some.Type'), '.some.file.package.Some.Type')
    t.is(getFieldTypeName('', 'Some.Type'), '.Some.Type')
    t.is(getFieldTypeName('some.file.package', ''), '.some.file.package')
})

test('getFieldTypeName() returns empty string for empty input', (t) => {
    t.is(getFieldTypeName('', ''), '')
})

test('getTypeName() returns valid type name for field type name', (t) => {
    t.is(getTypeName('.some.file.package.Some.Type'), 'some.file.package.Some.Type')
    t.is(getTypeName('.Some.Type'), 'Some.Type')
    t.is(getTypeName('.some.file.package'), 'some.file.package')
    t.is(getTypeName('some.file.package.Some.Type'), 'some.file.package.Some.Type')
})

test('getTypeName() returns empty string for empty input', (t) => {
    t.is(getTypeName(''), '')
    t.is(getTypeName('.'), '')
})

test('ensureRelativeImportDot() adds dot for relative imports', (t) => {
   t.is(ensureRelativeImportDot('test'), './test')
   t.is(ensureRelativeImportDot('./test'), './test')
   t.is(ensureRelativeImportDot('../test'), '../test')
   t.is(ensureRelativeImportDot('test/test'), './test/test')
});

test('ensureRelativeImportDot() keeps original absolute import', (t) => {
    t.is(ensureRelativeImportDot('/test/test'), '/test/test')
});