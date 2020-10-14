import * as R from '~/lib/ramda';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

const chatQuery = gql`
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

export const useChat = () => {
  const Router = useRouter();
  const chatId = parseInt(Router.query.chatId, 10);

  const query = useQuery(chatQuery, {
    ssr: true,
    variables: {
      chat: chatId,
    },
    notifyOnNetworkStatusChange: true
  });

  const data = {
    description: R.pathOr('', ['data', 'chat', 'description'], query),
    photo: R.pathOr('', ['data', 'chat', 'photo', 'big_file'], query),
  };

  return {
    ...query,
    processed: data,
  };
};
