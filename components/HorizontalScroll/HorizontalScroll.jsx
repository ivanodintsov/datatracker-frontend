import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './HorizontalScroll.sass';

const HorizontalScroll = ({ className, innerClassName, children }) => (
  <div className={cx(className, css.root)}>
    <div className={innerClassName}>
      {children}
    </div>
  </div>
);

HorizontalScroll.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  innerClassName: PropTypes.string,
};

HorizontalScroll.defaultProps = {
  className: '',
  innerClassName: '',
};

export default HorizontalScroll;
