import { add } from 'lodash/fp';
import R, { map } from 'ramda';

const addOneLodash = add(1);

const addedArrayLodash = [1, 2, 3].map(addOneLodash);

console.log({ lodash: addedArrayLodash });

const addedArrayRamda = map(R.add(1), [1, 2, 3]);

console.log({ ramda: addedArrayRamda });
