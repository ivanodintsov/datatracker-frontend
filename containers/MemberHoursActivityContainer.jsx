import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import Query from 'react-apollo/Query';
import gql from 'graphql-tag';
import MemberHoursActivity from '../components/MemberHoursActivity';

export const chatMemberHourlyStatisticsQuery = gql`
  query chatMemberHourlyStatistics($chat: Float!, $user: Int!) {
    chatMemberHourlyStatistics(chat: $chat, user: $user) {
      data {
        text
        total
        hour
      }
      range {
        from
        to
      }
    }
  }
`;

const getHoursData = (data = []) => R.times((idx) => {
  if (!R.is(Object, data)) {
    return {};
  }

  const hour = R.find(R.pipe(
    R.prop('hour'),
    R.equals(idx),
  ), data);

  return {
    hour: idx < 10 ? `0${idx}` : idx,
    total: R.propOr(0, 'total', hour),
  };
}, 24);

export default class MemberHoursActivityContainer extends Component {
  render() {
    const { chatId, memberId } = this.props;

    return (
      <Query
        query={chatMemberHourlyStatisticsQuery}
        ssr={false}
        variables={{
          chat: chatId,
          user: memberId,
        }}
      >
        {({
          loading, error, data: { chatMemberHourlyStatistics: data } = {},
        }) => (
          <MemberHoursActivity
            loading={loading}
            error={error}
            data={getHoursData(R.propOr([], 'data', data))}
            range={R.propOr({}, 'range', data)}
          />
        )}
      </Query>
    );
  }
}

MemberHoursActivityContainer.propTypes = {
  chatId: PropTypes.string.isRequired,
  memberId: PropTypes.string.isRequired,
};
