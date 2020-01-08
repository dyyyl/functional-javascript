import { compose } from 'ramda';

import count from '../../helpers/count'; // eslint-disable-line
import explode from '../../helpers/explode'; // eslint-disable-line

const countWords = compose(count, explode);

export default countWords;
