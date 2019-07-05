import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import css from './Title.sass';

const cx = classnames.bind(css);

const Title = ({
  as: Component,
  type,
  children,
  ...props
}) => {
  const classNames = cx({
    [type]: type,
  });

  return (
    <Component className={classNames} {...props}>{children}</Component>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf([false, 'secondary']),
  as: PropTypes.string,
};

Title.defaultProps = {
  as: 'div',
  type: false,
};

export default Title;
