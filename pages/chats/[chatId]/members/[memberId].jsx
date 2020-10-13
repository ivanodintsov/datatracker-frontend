import React from 'react';
import PropTypes from 'prop-types';
import nextRedirect from 'next-redirect';
import * as R from 'ramda';
import Query from 'react-apollo/Query';
import gql from 'graphql-tag';
import { withApollo } from '~/lib/withApolloClient';
import WithRedirect from '../../../../lib/withRedirect';
import ChatMember from '../../../../components/ChatMember';
import Layout from '../../../../components/Layout';
import { Content } from '../../../../components/Container';
import ChatMemberInfoContainer from '~/containers/ChatMemberInfoContainer';

const chatMemberFullContainerQuery = gql`
  query chatMemberFullContainer($chat: Float!, $user: Int!) {
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

export default withApollo(class ChatMemberPage extends WithRedirect {
  static propTypes = {
    chatId: PropTypes.string.isRequired,
    memberId: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    redirect: PropTypes.func,
  };

  static defaultProps = {
    redirect: nextRedirect,
  };

  static getInitialProps(ctx) {
    return {
      ...R.pick(['chatId', 'memberId'], ctx.query),
      ...WithRedirect.getInitialProps(ctx),
    };
  }

  renderFullContainer() {
    const { chatId, memberId } = this.props;

    return (
      <Query
        query={chatMemberFullContainerQuery}
        ssr={false}
        variables={{
          chat: parseInt(chatId, 10),
          user: parseInt(memberId, 10),
        }}
      >
        {({
          loading, error, data = {},
        }) => (
          <ChatMember
            chatId={chatId}
            memberId={memberId}
            loading={loading}
            error={error}
            data={data}
          />
        )}
      </Query>
    );
  }

  render() {
    return (
      <Layout>
        <Content>
          <ChatMemberInfoContainer />
          {this.renderFullContainer()}
        </Content>
      </Layout>
    );
  }
})
