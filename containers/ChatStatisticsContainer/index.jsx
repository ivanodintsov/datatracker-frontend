import React from 'react';
import Chat from '~/components/Chat';
import { useChatStatistics } from './useChatStatistics';

const ChatStatisticsContainer = () => {
  const query = useChatStatistics();

  return (
    <Chat
      loading={query.loading}
      error={query.error}
      data={query.data}
    />
  );
};

export default ChatStatisticsContainer;
