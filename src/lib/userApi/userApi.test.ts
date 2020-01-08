import users, { generateUser, generateUsersByAmount } from './index';

describe('userApi lib:', () => {
  it('should return an array of users', () => {
    expect(Array.isArray(users)).toBe(true);
  });

  describe('generateUser function:', () => {
    it('should return a user object', () => {
      const user = generateUser();

      expect(typeof user).toBe('object');
    });
  });

  describe('generateUsersByAmount function', () => {
    it('should return an array of user objects', () => {
      const userArray = generateUsersByAmount(5);

      expect(Array.isArray(userArray)).toBe(true);
    });
  });
});
