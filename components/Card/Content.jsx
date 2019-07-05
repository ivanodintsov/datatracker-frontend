import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import css from './Content.sass';

const cx = classnames.bind(css);

export class Content extends Component {
  static propTypes = {
    children: PropTypes.node,
    extra: PropTypes.bool,
  };

  static defaultProps = {
    children: '',
    extra: false,
  };

  render() {
    const { children, extra } = this.props;
    const className = cx('root', { extra });

    return (
      <div className={className}>{children}</div>
    );
  }
}

export default Content;
