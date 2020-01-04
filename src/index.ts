import { add } from 'lodash/fp';
import { map } from 'ramda';

const addOne = add(1);

const mapArray = map(addOne, [1, 2, 3]);

console.log(mapArray);
