import React from 'react';
import ChatMember from '~/components/ChatMember';
import { useChatMemberStatistics } from './useChatMemberStatistics';

const ChatMemberStatisticsContainer = () => {
  const query = useChatMemberStatistics();

  return (
    <ChatMember
      chatId={query.processed.chatId}
      memberId={query.processed.memberId}
      loading={query.loading}
      error={query.error}
      data={query.processed.data}
    />
  );
};

export default ChatMemberStatisticsContainer;
