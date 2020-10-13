/* eslint-disable react/no-multi-comp */
import React from 'react';
import PropTypes from 'prop-types';
import Query from 'react-apollo/Query';
import gql from 'graphql-tag';
import * as R from 'ramda';
import { baseUrl } from '../../../config';
import WithRedirect from '../../../lib/withRedirect';
import renderError from '../../../lib/renderError';
import Layout from '../../../components/Layout';
import { ChatInfo, ChatFn } from '../../../components/Chat';
import HeadMeta from '../../../components/HeadMeta';
import { Content, Container } from '../../../components/Container';

export const chatMainContainerQuery = gql`
  query chatMainContainer($chat: Float!) {
    chat(id: $chat) {
      title
      description
      photo {
        small_file
        big_file
      }
    }
  }
`;

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

const getTitle = data => R.pathOr('Chat', ['chat', 'title'], data);

const chatMainQueryRender = ({
  loading,
  error,
  data,
  path,
}) => {
  const url = `${baseUrl}${path}`;
  const title = `${getTitle(data)} | Data Tracker`;
  const description = R.pathOr('', ['chat', 'description'], data);
  const photo = R.pathOr('', ['chat', 'photo', 'big_file'], data);

  return (
    <>
      <HeadMeta url={url} title={title} description={description} photo={photo} />
      <Container fixed>
        <ChatInfo loading={loading} error={error} data={data} />
      </Container>
    </>
  );
};

chatMainQueryRender.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  data: PropTypes.shape({}),
};

chatMainQueryRender.defaultProps = {
  data: undefined,
};

export default class ChatPage extends WithRedirect {
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
          <Query
            query={chatMainContainerQuery}
            variables={{ chat: parseInt(chatId, 10) }}
            errorPolicy='all'
          >
            {renderError(chatMainQueryRender, this.props, this.props)}
          </Query>
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
}
