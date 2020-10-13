import { useMemo } from 'react';
import * as R from '~/lib/ramda';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

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

export const useChatMember = () => {
  const Router = useRouter();
  const chatId = parseInt(Router.query.chatId, 10);
  const memberId = parseInt(Router.query.memberId, 10);

  const query = useQuery(chatMemberInfoQuery, {
    ssr: true,
    variables: {
      chat: chatId,
      user: memberId,
    },
    notifyOnNetworkStatusChange: true
  });

  const data = useMemo(() => ({
    data: R.pathOr({}, ['data', 'chatMember'], query),
    chatId,
    memberId,
  }), [query.data])

  return {
    ...query,
    processed: data,
  };
};
