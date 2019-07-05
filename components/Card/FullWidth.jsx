import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import css from './FullWidth.sass';

const cx = classnames.bind(css);

export class FullWidth extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    children: '',
    className: '',
  };

  render() {
    const { children, className } = this.props;
    const classNames = cx(css.root, className);

    return (
      <div className={classNames}>{children}</div>
    );
  }
}

export default FullWidth;
