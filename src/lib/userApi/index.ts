import faker from 'faker';

import normalizeDate from '../../helpers/normalizeDate';
interface Address {
  country: string;
  city: string;
}

interface User {
  firstName: string;
  lastName: string;
  birthYear: number;
  address: Address;
}

export const generateUser = (): User => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  birthYear: normalizeDate(faker.date.past(70)),
  address: {
    country: faker.address.country(),
    city: faker.address.city(),
  },
});

export const generateUsersByAmount = (amount: number): Array<User> =>
  Array(amount)
    .fill(null)
    .map(() => generateUser());

const users = generateUsersByAmount(10);

export default users;
