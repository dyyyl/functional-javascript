import countWords from './index'; // eslint-disable-line

describe('countWords lib:', () => {
  it('should return the length of a given string', () => {
    const string =
      'We can only see a short distance ahead but we can see plenty there that needs to be done';

    const wordCount = countWords(string);

    expect(wordCount).toBe(19);
  });
});
