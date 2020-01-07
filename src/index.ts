import { chain } from 'lodash';

import users from './lib/userApi'; // eslint-disable-line

const youngishNonAmericans = chain(users)
  .filter((user) => user.birthYear > 1990 && user.address.country !== 'USA')
  .value();

console.log(youngishNonAmericans);
