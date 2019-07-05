import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import css from './Range.sass';

export const Range = ({ range }) => (
  <span className={css.range}>
    {moment(range.from).tz('UTC').format('MM-DD-YYYY HH:mm:ss')}
    {' - '}
    {moment(range.to).tz('UTC').format('MM-DD-YYYY HH:mm:ss')}
    {' UTC'}
  </span>
);

Range.propTypes = {
  range: PropTypes.shape({
    from: PropTypes.number.isRequired,
    to: PropTypes.number.isRequired,
  }).isRequired,
};

export default Range;
