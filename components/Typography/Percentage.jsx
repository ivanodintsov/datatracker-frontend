import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { Icon } from 'antd';
import Changes from './Changes';
import css from './Percentage.sass';

class Percentage extends PureComponent {
  static propTypes = {
    number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  static defaultProps = {
    number: 0,
  };

  static renderPercent(number) {
    if (number === 0) {
      return '';
    }

    return '%';
  }

  static getIcon(number) {
    if (number < 0) {
      return 'caret-down';
    }

    if (number > 0) {
      return 'caret-up';
    }
  }

  getNumber() {
    return Number.parseFloat(
      R.pathOr(0, ['props', 'number'], this),
    );
  }

  render() {
    const number = this.getNumber();
    const styles = Changes.changeColor(number);
    const icon = this.constructor.getIcon(number);

    return (
      <Changes number={number} noChanges>
        {this.constructor.renderPercent(number)}
        {icon && (<Icon type={icon} className={css.changeIcon} style={styles} />)}
      </Changes>
    );
  }
}

export default Percentage;
