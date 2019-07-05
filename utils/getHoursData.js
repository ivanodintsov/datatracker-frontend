import * as R from 'ramda';
import kFormatNumber from './kFormatNumber';

export const formatStats = (data) => {
  const total = R.propOr(0, 'total', data);
  const membersCount = R.propOr(0, 'members_count', data);

  return {
    total: kFormatNumber.unFormat(total),
    members_count: kFormatNumber.unFormat(membersCount),
  };
};

const getHoursData = (data = []) => R.times((idx) => {
  if (!R.is(Object, data)) {
    return {};
  }

  const hour = R.find(R.pipe(
    R.prop('hour'),
    R.equals(idx),
  ), data);

  return {
    hour: idx < 10 ? `0${idx}` : idx,
    ...formatStats(hour),
  };
}, 24);

export default getHoursData;
