import * as R from '~/lib/ramda';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

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

export const useChatMemberStatistics = () => {
  const Router = useRouter();
  const chatId = parseInt(Router.query.chatId, 10);
  const memberId = parseInt(Router.query.memberId, 10);

  const query = useQuery(chatMemberFullContainerQuery, {
    ssr: false,
    variables: {
      chat: chatId,
      user: memberId,
    },
    notifyOnNetworkStatusChange: true
  });

  const data = {
    data: R.pathOr({}, ['data'], query),
    chatId,
    memberId,
  };

  return {
    ...query,
    processed: data,
  };
};
