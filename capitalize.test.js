const string = require('./capitalize');

test('Capitalize string', () => {
  expect(string('cat')).toBe('Cat');
});
