
import React from 'react';
import PropTypes from 'prop-types';
import * as R from '~/lib/ramda';
import Typography from 'antd/es/typography';
import Badge from 'antd/es/badge';
import Avatar from 'antd/es/avatar';
import { withLoading } from '../Loading';
import colorFromString from '../../lib/colorFromString';
import css from './Title.sass';

const { Title: TitleAnt } = Typography;

const Photo = ({ src, alt }) => (
  <div className={css.avatar}>
    <img src={src} alt={alt} />
  </div>
);

Photo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export const Title = ({
  title,
  src,
  badge,
}) => (
  <div className={css.head}>
    <TitleAnt level={1} className={css.headTitle}>{title}</TitleAnt>
    <Badge {...badge}>
      <Avatar
        src={src}
        alt={title}
        size='large'
        style={{
          boxShadow: `inset 0 -35px 50px -10px rgba(17, 54, 84, .4), inset 0 -35px 50px -10px ${colorFromString(title)}`,
          backgroundColor: 'white',
        }}
      >
        {R.head(title)}
      </Avatar>
    </Badge>
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string,
  badge: PropTypes.shape({}),
};

Title.defaultProps = {
  src: undefined,
  badge: {},
};

export default withLoading({}, Title);
