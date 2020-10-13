import React from 'react';
import PropTypes from 'prop-types';
import nextRedirect from 'next-redirect';
import * as R from 'ramda';
import Query from 'react-apollo/Query';
import gql from 'graphql-tag';
import WithRedirect from '../../../../lib/withRedirect';
import renderError from '../../../../lib/renderError';
import ChatMember from '../../../../components/ChatMember';
import { getFullName } from '../../../../utils/selectors';
import Layout from '../../../../components/Layout';
import { Content, Container } from '../../../../components/Container';
import MemberInfo from '../../../../components/ChatMember/MemberInfo/MemberInfo';
import HeadMeta from '../../../../components/HeadMeta';
import { baseUrl } from '../../../../config';

const chatMemberInfoQuery = gql`
  query chatMemberInfo($chat: Float!, $user: Int!) {
    chatMember(chat: $chat, user: $user) {
      chat {
        title
      }
      user {
        first_name
        last_name
        username
      }
      last_message_date
      online
    }
  }
`;

export const chatMemberFullContainerQuery = gql`
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

const getTitle = (data) => {
  const fullName = getFullName(R.pathOr({}, ['chatMember', 'user'], data)) || 'Chat';
  const chatTitle = R.pathOr('member', ['chatMember', 'chat', 'title'], data);

  return `${fullName.fullName} | ${chatTitle}`;
};

const chatMemberInfoQueryRender = ({
  loading, error, data,
  path, chatId, memberId,
}) => {
  const url = `${baseUrl}${path}`;
  const title = `${getTitle(data)} | Data Tracker`;

  return (
    <React.Fragment>
      <HeadMeta title={title} url={url} description='Chat member statistics' />
      <Container fixed>
        <MemberInfo
          error={error}
          loading={loading}
          data={{
            data: R.propOr({}, 'chatMember', data),
            chatId: parseInt(chatId, 10),
            memberId: parseInt(memberId, 10),
          }}
        />
      </Container>
    </React.Fragment>
  );
};

chatMemberInfoQueryRender.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  chatId: PropTypes.string.isRequired,
  memberId: PropTypes.string.isRequired,
  data: PropTypes.shape({}),
};

chatMemberInfoQueryRender.defaultProps = {
  data: undefined,
};

export default class ChatMemberPage extends WithRedirect {
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

  renderMainInfo() {
    const { chatId, memberId } = this.props;

    return (
      <Query
        query={chatMemberInfoQuery}
        ssr={false}
        errorPolicy='all'
        variables={{
          chat: parseInt(chatId, 10),
          user: parseInt(memberId, 10),
        }}
      >
        {renderError(chatMemberInfoQueryRender, this.props, this.props)}
      </Query>
    );
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
    console.log(this.props)
    return (
      <Layout>
        <Content>
          {this.renderMainInfo()}
          {this.renderFullContainer()}
        </Content>
      </Layout>
    );
  }
}
