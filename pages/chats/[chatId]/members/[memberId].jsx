import React from 'react';
import dynamic from 'next/dynamic'
import { withApollo } from '~/lib/withApolloClient';
import Layout from '~/components/Layout';
import { Content } from '~/components/Container';
import ChatMemberInfoContainer from '~/containers/ChatMemberInfoContainer';
const ChatMemberStatisticsContainer = dynamic(
  () => import('~/containers/ChatMemberStatisticsContainer'),
  { ssr: false },
);

const Page = () => {
  return (
    <Layout>
      <Content>
        <ChatMemberInfoContainer />
        <ChatMemberStatisticsContainer />
      </Content>
    </Layout>
  );
};

export default withApollo(Page);
