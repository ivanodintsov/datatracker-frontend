import React from 'react';
import PropTypes from 'prop-types';
import * as R from '~/lib/ramda';
import EmojifyBase, { emojify as emojifyBase } from 'react-emojione';
import { reactEmojione } from '../config';

class Emojify extends EmojifyBase {
  static baseStyles = reactEmojione;

  static defaultProps = EmojifyBase.defaultProps;

  static propTypes = {
    style: PropTypes.shape({}),
  };

  render() {
    const { style, ...rest } = this.props;
    return (
      <EmojifyBase {...rest} style={{ ...Emojify.baseStyles, ...style }} />
    );
  }
}

export const emojify = (str, options) => emojifyBase(str, {
  ...options,
  style: {
    ...reactEmojione,
    ...R.propOr(undefined, 'style', options),
  },
});

export default Emojify;
