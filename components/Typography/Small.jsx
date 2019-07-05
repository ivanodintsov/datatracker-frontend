import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './Small.sass';

const Small = ({ className, children }) => (
  <small className={cx(css.root, className)}>{children}</small>
);

Small.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Small.defaultProps = {
  className: '',
};

export default Small;
