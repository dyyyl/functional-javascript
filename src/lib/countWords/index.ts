import { compose } from 'ramda';

import count from '../../helpers/count';
import explode from '../../helpers/explode';

const countWords = compose(count, explode);

export default countWords;
