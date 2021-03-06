import { chain } from 'lodash';

import countWords from './lib/countWords';
import users from './lib/userApi';

const string =
  'We can only see a short distance ahead but we can see plenty there that needs to be done';

const stringWordCount = countWords(string);

const youngishNonAmericans = chain(users)
  .filter((user) => user.birthYear > 1990 && user.address.country !== 'USA')
  .value();

console.log(youngishNonAmericans);
console.log(stringWordCount);
