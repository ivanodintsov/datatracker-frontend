/* eslint-disable react/no-multi-comp */
import React from 'react';
import PropTypes from 'prop-types';
import Query from 'react-apollo/Query';
import gql from 'graphql-tag';
import * as R from 'ramda';
import { withApollo } from '~/lib/withApolloClient';
import WithRedirect from '../../../lib/withRedirect';
import Layout from '../../../components/Layout';
import { ChatFn } from '../../../components/Chat';
import { Content } from '~/components/Container';
import ChatMainInfoContainer from '~/containers/ChatMainInfoContainer';

export const chatFullContainerQuery = gql`
  query chatFullContainer($chat: Float!) {
    chat(id: $chat) {
      members_count
      statistics {
        total
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
      avg_daily {
        total
      }
      avg_hourly {
        total
      }
    }

    chatHourlyStatistics(chat: $chat) {
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

    chatStatistics4days(chat: $chat) {
      text
      total
      sticker
      members_count
      percentage_change {
        total
        members_count
      }
      subtract_change {
        members_count
      }
    }
  }
`;

export default withApollo(class ChatPage extends WithRedirect {
  static propTypes = {
    chatId: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    redirect: PropTypes.func,
  };

  static getInitialProps(ctx) {
    return {
      ...R.pick(['chatId'], ctx.query),
      ...WithRedirect.getInitialProps(ctx),
    };
  }

  render() {
    const { chatId } = this.props;

    return (
      <Layout>
        <Content>
          <ChatMainInfoContainer />
          <Query
            query={chatFullContainerQuery}
            ssr={false}
            variables={{ chat: parseInt(chatId, 10) }}
          >
            {ChatFn}
          </Query>
        </Content>
      </Layout>
    );
  }
})
