import * as R from '~/lib/ramda';

const hashCode = R.reduce((acc, item) => item.charCodeAt() + ((acc << 5) - acc), 0);

const intToRGB = (num) => {
  const color = (num & 0x00FFFFFF).toString(16).toUpperCase();
  return '00000'.substring(0, 6 - color.length) + color;
};

const colorFromString = R.pipe(hashCode, intToRGB, R.concat('#'));

export default colorFromString;
