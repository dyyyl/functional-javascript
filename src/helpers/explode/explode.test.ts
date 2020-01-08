import explode from './index';
describe('explode function:', () => {
  it('should return an array of elements, given an input', () => {
    const string =
      'We can only see a short distance ahead but we can see plenty there that needs to be done';

    const stringArray = explode(string);

    expect(Array.isArray(stringArray)).toBe(true);
  });
});
