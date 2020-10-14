import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as R from '~/lib/ramda';
import MessagesStatistics from '../MessagesStatistics';
import HoursActivity from '../HoursActivity';
import { Container } from '../Container';
import getHoursData from '../../utils/getHoursData';

export class ChatMember extends Component {
  static propTypes = {
    chatId: PropTypes.number.isRequired,
    memberId: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    data: PropTypes.shape({}),
    error: PropTypes.shape({}),
  };

  static defaultProps = {
    data: undefined,
    error: undefined,
  }

  render() {
    const {
      error, loading, data,
    } = this.props;

    return (
      <React.Fragment>
        <MessagesStatistics
          error={error}
          loading={loading}
          data={data.chatMemberStatistics}
        />
        <Container fixed>
          <HoursActivity
            error={error}
            loading={loading}
            data={getHoursData(R.pathOr([], ['chatMemberHourlyStatistics', 'data'], data))}
            range={R.pathOr({}, ['chatMemberHourlyStatistics', 'range'], data)}
          />
        </Container>
      </React.Fragment>
    );
  }
}

export default ChatMember;
