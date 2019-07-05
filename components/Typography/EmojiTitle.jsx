import React from 'react';
import PropTypes from 'prop-types';
import { emojify } from '../../utils/react-emojione';
import css from './EmojiTitle.sass';

export const EmojiTitle = ({
  emoji,
  children,
  options,
  as: Component,
}) => (
  <Component className={css.title}>
    <span role='img' aria-label={children}>
      {emojify(emoji, options)}
    </span>
    {children}
  </Component>
);

EmojiTitle.propTypes = {
  emoji: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  options: PropTypes.shape({}),
  as: PropTypes.string,
};

EmojiTitle.defaultProps = {
  options: {
    style: { height: 40, width: 40 },
  },
  as: 'h1',
};

EmojiTitle.h2 = props => (
  <EmojiTitle
    as='h2'
    options={{ style: { height: 26, width: 26 } }}
    {...props}
  />
);

EmojiTitle.h3 = props => (
  <EmojiTitle
    as='h3'
    options={{ style: { height: 20, width: 20 } }}
    {...props}
  />
);

export default EmojiTitle;
