import React from 'react';
import { Container } from '~/components/Container';
import MemberInfo from '~/components/ChatMember/MemberInfo/MemberInfo';
import HeadMeta from '~/components/HeadMeta';
import { useChatMember } from './useChatMember';
import { getTitle } from './helpers';

const ChatMemberInfoContainer = () => {
  const query = useChatMember();

  return (
    <React.Fragment>
      <HeadMeta title={getTitle(query.data)} description='Chat member statistics' />
      <Container fixed>
        <MemberInfo
          error={query.error}
          loading={query.loading}
          data={query.processed}
        />
      </Container>
    </React.Fragment>
  );
};

export default ChatMemberInfoContainer;
