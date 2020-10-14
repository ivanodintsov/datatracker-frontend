import * as R from '~/lib/ramda';

export const getFullName = (data) => {
  // eslint-disable-next-line no-underscore-dangle
  const name = R.propOr('', R.__, data);
  const firstName = name('first_name');
  const lastName = name('last_name');

  return {
    fullName: R.trim(`${firstName} ${lastName}`),
    firstName,
    lastName,
  };
};

export default {
  getFullName,
};
