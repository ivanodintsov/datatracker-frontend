import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { Header } from './Header';
import { Footer } from './Footer';
import { FullWidth } from './FullWidth';
import { Content } from './Content';
import { Container } from './Container';
import { Chart } from './Chart';
import css from './Card.sass';

const cx = classnames.bind(css);

export class Card extends Component {
  static Header = Header;

  static Footer = Footer;

  static FullWidth = FullWidth;

  static Content = Content;

  static Container = Container;

  static Chart = Chart;

  static propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf([false, 'blue', 'green', 'red']),
  };

  static defaultProps = {
    color: false,
  };

  render() {
    const { color, children } = this.props;
    const className = cx('root', color);

    return (
      <div className={className}>
        {children}
      </div>
    );
  }
}

export default Card;
