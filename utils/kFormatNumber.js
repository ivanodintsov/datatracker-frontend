import numeral from 'numeral';
import * as R from 'ramda';

const format = x => numeral(x).format('0.[0]a');
const unFormat = R.ifElse(
  R.is(String),
  numeral._.stringToNumber,
  R.identity,
);

export default {
  format,
  unFormat,
};
