import faker from 'faker';

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

const generateUser = (): User => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  birthYear: parseInt(
    faker.date
      .past(70)
      .toString()
      .split(' ')[3],
    10,
  ),
  address: {
    country: faker.address.country(),
    city: faker.address.city(),
  },
});

const generateUsersByAmount = (amount: number): Array<User> =>
  Array(amount)
    .fill(null)
    .map(() => generateUser());

const users = generateUsersByAmount(10);

export default users;
