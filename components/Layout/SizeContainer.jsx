import React from 'react';
import PropTypes from 'prop-types';
import css from './SizeContainer.sass';

export const SizeContainer = ({ children }) => (
  <div className={css.root}>
    {children}
  </div>
);

SizeContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SizeContainer;
