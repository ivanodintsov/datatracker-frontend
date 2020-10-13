import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Query from 'react-apollo/Query';
import gql from 'graphql-tag';
import MemberStatistics from '../components/MemberStatistics';

export const chatMemberStatisticsQuery = gql`
  query chatMemberStatistics($chat: Float!, $user: Int!) {
    chatMemberStatistics(chat: $chat, user: $user) {
      text
      voice
      video_note
      video
      sticker
      pinned
      audio
      document
      photo
      reply
      forward
      edit
      contact
      location
      game
    }
  }
`;

export default class MemberStatisticsContainer extends Component {
  render() {
    const { chatId, memberId } = this.props;

    return (
      <Query
        query={chatMemberStatisticsQuery}
        ssr={false}
        variables={{
          chat: chatId,
          user: memberId,
        }}
      >
        {({
          loading, error, data: { chatMemberStatistics: data } = {},
        }) => (
          <MemberStatistics
            loading={loading}
            error={error}
            data={data}
          />
        )}
      </Query>
    );
  }
}

MemberStatisticsContainer.propTypes = {
  chatId: PropTypes.string.isRequired,
  memberId: PropTypes.string.isRequired,
};
