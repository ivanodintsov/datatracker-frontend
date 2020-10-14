import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import * as R from '~/lib/ramda';
import css from './Percentage.sass';

class Changes extends PureComponent {
  static propTypes = {
    number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    noChanges: PropTypes.bool,
    children: PropTypes.node,
  };

  static defaultProps = {
    number: 0,
    noChanges: false,
    children: '',
  };

  static formatNumber(number) {
    let formated = '';

    if (number > 0) {
      formated += '+';
    }

    return `${formated}${number}`;
  }

  static changeColor(number) {
    if (number < 0) {
      return {
        color: '#fa5252',
      };
    }

    if (number > 0) {
      return {
        color: '#38d9a9',
      };
    }

    return {
      color: '#000000',
    };
  }

  getNumber() {
    return parseInt(R.pathOr(0, ['props', 'number'], this), 10);
  }

  renderNumber() {
    const { noChanges } = this.props;
    const number = this.getNumber();

    if (noChanges && R.equals(number, 0)) {
      return 'No changes';
    }

    return Changes.formatNumber(number);
  }

  render() {
    const { children } = this.props;

    return (
      <div className={css.root}>
        {this.renderNumber()}
        {children}
      </div>
    );
  }
}

export default Changes;
