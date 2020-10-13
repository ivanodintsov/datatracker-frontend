import React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import Typography from 'antd/es/typography';
import { withLoading } from '../../Loading';
import css from './MemberStatistics.sass';

const { Title } = Typography;

const StatisticsList = withLoading({}, ({ data }) => (
  <ul className={css.list}>
    <li>
      <span role='img' aria-label='Text'>📜</span>
      Text:
      {' '}
      {R.propOr(0, 'text', data)}
    </li>
    <li>
      <span role='img' aria-label='Voice'>🎤</span>
      Voice:
      {' '}
      {R.propOr(0, 'voice', data)}
    </li>
    <li>
      <span role='img' aria-label='Video note'>📹</span>
      Video note:
      {' '}
      {R.propOr(0, 'video_note', data)}
    </li>
    <li>
      <span role='img' aria-label='Video'>📼</span>
      Video:
      {' '}
      {R.propOr(0, 'video', data)}
    </li>
    <li>
      <span role='img' aria-label='Sticker'>🌅</span>
      Sticker:
      {' '}
      {R.propOr(0, 'sticker', data)}
    </li>
    <li>
      <span role='img' aria-label='Pinned'>📌</span>
      Pinned:
      {' '}
      {R.propOr(0, 'pinned', data)}
    </li>
    <li>
      <span role='img' aria-label='Audio'>🎧</span>
      Audio:
      {' '}
      {R.propOr(0, 'audio', data)}
    </li>
    <li>
      <span role='img' aria-label='Document'>📄</span>
      Document:
      {' '}
      {R.propOr(0, 'document', data)}
    </li>
    <li>
      <span role='img' aria-label='Photo'>📷</span>
      Photo:
      {' '}
      {R.propOr(0, 'photo', data)}
    </li>
    <li>
      <span role='img' aria-label='Contact'>🧔</span>
      Contact:
      {' '}
      {R.propOr(0, 'contact', data)}
    </li>
    <li>
      <span role='img' aria-label='Location'>📍</span>
      Location:
      {' '}
      {R.propOr(0, 'location', data)}
    </li>
    <li>
      <span role='img' aria-label='Game'>🎮</span>
      Game:
      {' '}
      {R.propOr(0, 'game', data)}
    </li>
    <li>
      <span role='img' aria-label='Reply'>↩️</span>
      Reply:
      {' '}
      {R.propOr(0, 'reply', data)}
    </li>
    <li>
      <span role='img' aria-label='Forward'>⏩</span>
      Forward:
      {' '}
      {R.propOr(0, 'forward', data)}
    </li>
    <li>
      <span role='img' aria-label='Edit'>✏️</span>
      Edit:
      {' '}
      {R.propOr(0, 'edit', data)}
    </li>
  </ul>
));

export const MemberStatistics = ({
  loading,
  error,
  data,
}) => (
  <React.Fragment>
    <Title level={2}>Statistics</Title>
    <StatisticsList loading={loading} error={error} data={{ data }} />
  </React.Fragment>
);

MemberStatistics.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  data: PropTypes.shape({}),
};

MemberStatistics.defaultProps = {
  data: undefined,
};

export default MemberStatistics;
