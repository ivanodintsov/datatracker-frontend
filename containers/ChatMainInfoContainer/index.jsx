import React from 'react';
import { getTitle } from './helpers';
import { useChat } from './useChat';
import HeadMeta from '~/components/HeadMeta';
import { Container } from '~/components/Container';
import { ChatInfo } from '~/components/Chat';

const ChatMainInfoContainer = () => {
  const query = useChat();

  return (
    <>
      <HeadMeta
        title={getTitle(query.data)}
        description={query.processed.description}
        photo={query.processed.photo}
      />
      <Container fixed>
        <ChatInfo
          loading={query.loading}
          error={query.error}
          data={query.data} />
      </Container>
    </>
  );
};

export default ChatMainInfoContainer;
