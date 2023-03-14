const reverse = require('./reverse');

test('Reverses string', () => {
  expect(reverse('cat')).toBe('tac');
});