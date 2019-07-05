import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import * as R from 'ramda';
import { List, Avatar, Typography } from 'antd';
import { Container } from '../Container';
import MessagesStatistics from '../MessagesStatistics';
import getHoursData from '../../utils/getHoursData';
import { getFullName } from '../../utils/selectors';
import HoursActivity from '../HoursActivity';
import CardsStatistics from './CardsStatistics';
import colorFromString from '../../lib/colorFromString';

export class Chat extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    data: PropTypes.shape({
      chat: PropTypes.shape({
        statistics: PropTypes.shape({}).isRequired,
      }),
      chatStatistics4days: PropTypes.arrayOf(PropTypes.shape({})),
    }),
    error: PropTypes.shape({}),
  };

  static defaultProps = {
    data: undefined,
    error: undefined,
  }

  render() {
    const { error, loading } = this.props;
    const data = R.propOr({}, 'data', this.props);
    const chatInfoData = R.pick(['chat', 'chatStatistics4days'], data);
    const chatMembers = R.pathOr([], ['chatMembers'], data);
    const statsData = R.path(['chat', 'statistics'], data);
    const hoursActivityData = getHoursData(R.pathOr([], ['chatHourlyStatistics', 'data'], data));
    const hoursActivityRange = R.pathOr({}, ['chatHourlyStatistics', 'range'], data);

    return (
      <>
        <Container fixed>
          <List>
            {R.map(
              (data) => {
                const title = getFullName(R.pathOr({}, ['user'], data));
                const date = R.pathOr(false, ['last_message_date'], data);

                return (
                  <List.Item>
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
                    <div>
                      <h4>{title.fullName}</h4>
                      {date && (<div>{moment(date).fromNow()}</div>)}
                    </div>
                  </List.Item>
                );
              },
              chatMembers,
            )}
          </List>
        </Container>
        <CardsStatistics
          error={error}
          loading={loading}
          data={chatInfoData}
        />
        <MessagesStatistics error={error} loading={loading} data={statsData} />
        <Container fixed>
          <HoursActivity
            error={error}
            loading={loading}
            data={hoursActivityData}
            range={hoursActivityRange}
          />
        </Container>
      </>
    );
  }
}

export const ChatFn = props => (
  <Chat {...props} />
);

export default Chat;
