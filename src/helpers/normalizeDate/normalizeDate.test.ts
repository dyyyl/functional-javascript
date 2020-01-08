import normalizeDate from './index'; // eslint-disable-line

describe('normalizeDate function:', () => {
  const currentYear = new Date().getFullYear();
  const date = new Date();

  const yeetedYear = normalizeDate(date);

  it('should yeet a year from a given date', () => {
    expect(yeetedYear).toBe(currentYear);
  });

  it('should return a number', () => {
    expect(typeof yeetedYear).toBe('number');
  });
});
