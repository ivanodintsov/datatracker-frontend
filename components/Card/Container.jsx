import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import HorizontalScroll from '../HorizontalScroll';
import { Container as ContainerBase } from '../Container';
import css from './Container.sass';

const cx = classnames.bind(css);

export class Container extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    children: '',
    className: '',
  };

  render() {
    const { className, children } = this.props;
    const classNames = cx('row', className);

    return (
      <HorizontalScroll className={css.root}>
        <ContainerBase className={classNames} padding={false} border={false} fixed>
          {children}
        </ContainerBase>
      </HorizontalScroll>
    );
  }
}

export default Container;
