const timeWord = require('./timeWord');

describe('#toWord', () => {
  test('it is a function', () => {
    expect(typeof timeWord.toWord).toBe('function');
  });
  test('noon', () => {
    expect(timeWord.toWord("12", "00")).toBe('noon');
  })
});