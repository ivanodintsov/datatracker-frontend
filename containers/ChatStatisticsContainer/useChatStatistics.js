import * as R from '~/lib/ramda';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

export const chatStatisticsQuery = gql`
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

export const useChatStatistics = () => {
  const Router = useRouter();
  const chatId = parseInt(Router.query.chatId, 10);

  const query = useQuery(chatStatisticsQuery, {
    ssr: false,
    variables: {
      chat: chatId,
    },
    notifyOnNetworkStatusChange: true
  });

  const data = {
  };

  return {
    ...query,
    processed: data,
  };
};
