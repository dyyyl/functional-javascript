import count from './index';
describe('count function:', () => {
  it('should return the length of an array', () => {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const length = count(array);

    expect(length).toBe(10);
  });
});
