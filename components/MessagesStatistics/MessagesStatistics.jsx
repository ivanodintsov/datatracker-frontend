import React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { Typography } from 'antd';
import FontSizeOutlined from '@ant-design/icons/FontSizeOutlined';
import VideoCameraFilled from '@ant-design/icons/VideoCameraFilled';
import SoundFilled from '@ant-design/icons/SoundFilled';
import ContactsFilled from '@ant-design/icons/ContactsFilled';
import MessageFilled from '@ant-design/icons/MessageFilled';
import PictureFilled from '@ant-design/icons/PictureFilled';
import AudioFilled from '@ant-design/icons/AudioFilled';
import FileFilled from '@ant-design/icons/FileFilled';
import AimOutlined from '@ant-design/icons/AimOutlined';
import ForwardOutlined from '@ant-design/icons/ForwardOutlined';
import CameraFilled from '@ant-design/icons/CameraFilled';
import PushpinFilled from '@ant-design/icons/PushpinFilled';
import FileImageFilled from '@ant-design/icons/FileImageFilled';
import RocketFilled from '@ant-design/icons/RocketFilled';
import EditFilled from '@ant-design/icons/EditFilled';
import css from './MessagesStatistics.sass';
import { Container, HorizontalScroll } from '../Container';
import { withLoading } from '../Loading';

const { Title } = Typography;

const StatisticsIcon = (props) => (
  <span className={css.icon}>
    {props.icon}
  </span>
);

const StatisticsItem = ({ icon, title, number }) => (
  <div className={css.item}>
    <StatisticsIcon icon={icon} />
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
          icon={<FontSizeOutlined />}
          number={R.propOr(0, 'text', data)}
        />
        <StatisticsItem
          title='Video'
          icon={<CameraFilled />}
          number={R.propOr(0, 'video', data)}
        />
        <StatisticsItem
          title='Audio'
          icon={<SoundFilled />}
          number={R.propOr(0, 'audio', data)}
        />
        <StatisticsItem
          title='Contact'
          icon={<ContactsFilled />}
          number={R.propOr(0, 'contact', data)}
        />
        <StatisticsItem
          title='Reply'
          icon={<MessageFilled />}
          number={R.propOr(0, 'reply', data)}
        />
      </div>
      <div>
        <StatisticsItem
          title='Sticker'
          icon={<PictureFilled />}
          number={R.propOr(0, 'sticker', data)}
        />
        <StatisticsItem
          title='Voice'
          icon={<AudioFilled />}
          number={R.propOr(0, 'voice', data)}
        />
        <StatisticsItem
          title='Document'
          icon={<FileFilled />}
          number={R.propOr(0, 'document', data)}
        />
        <StatisticsItem
          title='Location'
          icon={<AimOutlined />}
          number={R.propOr(0, 'location', data)}
        />
        <StatisticsItem
          title='Forward'
          icon={<ForwardOutlined />}
          number={R.propOr(0, 'forward', data)}
        />
      </div>
      <div>
        <StatisticsItem
          title='Video note'
          icon={<VideoCameraFilled />}
          number={R.propOr(0, 'video_note', data)}
        />
        <StatisticsItem
          title='Pinned'
          icon={<PushpinFilled />}
          number={R.propOr(0, 'pinned', data)}
        />
        <StatisticsItem
          title='Photo'
          icon={<FileImageFilled />}
          number={R.propOr(0, 'photo', data)}
        />
        <StatisticsItem
          title='Game'
          icon={<RocketFilled />}
          number={R.propOr(0, 'game', data)}
        />
        <StatisticsItem
          title='Edit'
          icon={<EditFilled />}
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
