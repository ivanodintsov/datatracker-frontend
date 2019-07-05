import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import MemberInfo from '../components/MemberInfo';

export const chatMemberQuery = gql`
  query queryChatMember($chat: Float!, $user: Int!) {
    chatMember(chat: $chat, user: $user) {
      chat {
        title
      }
      user {
        id
        first_name
        last_name
        username
      }
    }
  }
`;

export default class MemberInfoContainer extends Component {
  render() {
    const { chatId, memberId } = this.props;

    return (
      <Query
        query={chatMemberQuery}
        ssr={false}
        variables={{
          chat: chatId,
          user: memberId,
        }}
      >
        {({
          loading, error, data: { chatMember: data } = {},
        }) => (
          <MemberInfo loading={loading} error={error} data={data} />
        )}
      </Query>
    );
  }
}

MemberInfoContainer.propTypes = {
  chatId: PropTypes.string.isRequired,
  memberId: PropTypes.string.isRequired,
};
