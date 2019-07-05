import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import * as R from 'ramda';
import moment from 'moment-timezone';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { Badge, Typography, Avatar } from 'antd';
import { withLoading } from '../../Loading';
import css from './MemberInfo.sass';
import { getFullName } from '../../../utils/selectors';
import colorFromString from '../../../lib/colorFromString';
import Tooltip from './Tooltip';

const { Title } = Typography;

export class MemberInfoView extends Component {
  static propTypes = {
    chatId: PropTypes.string.isRequired,
    memberId: PropTypes.string.isRequired,
    data: PropTypes.shape({
      user: PropTypes.shape({}).isRequired,
      last_message_date: PropTypes.number,
    }),
  };

  static defaultProps = {
    data: undefined,
  }

  render() {
    const { chatId, ...props } = this.props;
    const isOnline = R.pathOr(false, ['data', 'online'], props);
    const lastMessageDate = R.pathOr(false, ['data', 'last_message_date'], props);
    const title = getFullName(R.pathOr({}, ['data', 'user'], props));

    return (
      <React.Fragment>
        <div>
          <div className={css.head}>
            <div>
              <Link href={`/Chat?chatId=${chatId}`} as={`/chats/${chatId}`}>
                <a className={css.chat}>
                  <span>{R.pathOr('', ['data', 'chat', 'title'], props)}</span>
                </a>
              </Link>
              <Title level={1} className={css.title}>{title.fullName}</Title>
              {lastMessageDate && (
                <Tooltip icon={faClock}>{moment(lastMessageDate).fromNow()}</Tooltip>
              )}
            </div>
            <Badge
              status={isOnline && 'success'}
              title='Online'
              dot={isOnline}
              offset={[5]}
            >
              <Avatar
                alt={title.fullName}
                size='large'
                style={{
                  boxShadow: `inset 0 -35px 50px -10px rgba(17, 54, 84, .4), inset 0 -35px 50px -10px ${colorFromString(title.fullName)}`,
                  backgroundColor: 'white',
                }}
              >
                {R.head(title.firstName)}
                {R.head(title.lastName)}
              </Avatar>
            </Badge>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withLoading({}, MemberInfoView);
