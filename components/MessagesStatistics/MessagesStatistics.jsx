import React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { Typography } from 'antd';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faFont, faMicrophoneAlt, faVideo, faFileVideo, faStickyNote,
//   faThumbtack, faFileAudio, faFile, faImage,
//   faFileContract, faLocationArrow, faGamepad,
//   faReply, faForward, faPen,
// } from '@fortawesome/free-solid-svg-icons';
import css from './MessagesStatistics.sass';
import { Container, HorizontalScroll } from '../Container';
import { withLoading } from '../Loading';

const { Title } = Typography;

const StatisticsIcon = ({ ...props }) => (
  <span className={css.icon}>
    {/* <FontAwesomeIcon {...props} /> */}
  </span>
);

const StatisticsItem = ({ icon, title, number }) => (
  <div className={css.item}>
    <StatisticsIcon //icon={icon}
    />
    <div className={css.text}>
      <span>{title}</span>
      <span>{number}</span>
    </div>
  </div>
);

const MessageList = withLoading({}, ({ data }) => (
  <HorizontalScroll className={css.root}>
    <div className={css.list}>
      <div>
        <StatisticsItem
          title='Text'
          //icon={faFont}
          number={R.propOr(0, 'text', data)}
        />
        <StatisticsItem
          title='Video'
          //icon={faFileVideo}
          number={R.propOr(0, 'video', data)}
        />
        <StatisticsItem
          title='Audio'
          //icon={faFileAudio}
          number={R.propOr(0, 'audio', data)}
        />
        <StatisticsItem
          title='Contact'
          //icon={faFileContract}
          number={R.propOr(0, 'contact', data)}
        />
        <StatisticsItem
          title='Reply'
          //icon={faReply}
          number={R.propOr(0, 'reply', data)}
        />
      </div>
      <div>
        <StatisticsItem
          title='Sticker'
          //icon={faStickyNote}
          number={R.propOr(0, 'sticker', data)}
        />
        <StatisticsItem
          title='Voice'
          //icon={faMicrophoneAlt}
          number={R.propOr(0, 'voice', data)}
        />
        <StatisticsItem
          title='Document'
          //icon={faFile}
          number={R.propOr(0, 'document', data)}
        />
        <StatisticsItem
          title='Location'
          //icon={faLocationArrow}
          number={R.propOr(0, 'location', data)}
        />
        <StatisticsItem
          title='Forward'
          //icon={faForward}
          number={R.propOr(0, 'forward', data)}
        />
      </div>
      <div>
        <StatisticsItem
          title='Video note'
          //icon={faVideo}
          number={R.propOr(0, 'video_note', data)}
        />
        <StatisticsItem
          title='Pinned'
          //icon={faThumbtack}
          number={R.propOr(0, 'pinned', data)}
        />
        <StatisticsItem
          title='Photo'
          //icon={faImage}
          number={R.propOr(0, 'photo', data)}
        />
        <StatisticsItem
          title='Game'
          //icon={faGamepad}
          number={R.propOr(0, 'game', data)}
        />
        <StatisticsItem
          title='Edit'
          //icon={faPen}
          number={R.propOr(0, 'edit', data)}
        />
      </div>
    </div>
  </HorizontalScroll>
));

export const MessagesStatistics = ({
  loading,
  error,
  data,
}) => (
  <Container fixed>
    <Title level={2}>Message types</Title>
    <MessageList loading={loading} error={error} data={{ data }} />
  </Container>
);

MessagesStatistics.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.shape({}),
  error: PropTypes.shape({}),
};

MessagesStatistics.defaultProps = {
  data: undefined,
  error: undefined,
};

export default MessagesStatistics;
