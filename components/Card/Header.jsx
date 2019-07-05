import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Header.sass';

export class Header extends Component {
  static propTypes = {
    children: PropTypes.node,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  };

  static defaultProps = {
    children: '',
    as: 'div',
  };

  render() {
    const { children, as: Type } = this.props;

    return (
      <Type className={css.root}>{children}</Type>
    );
  }
}

export default Header;
