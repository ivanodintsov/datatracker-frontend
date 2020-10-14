import React from 'react';
import dynamic from 'next/dynamic';
import { withApollo } from '~/lib/withApolloClient';
import Layout from '~/components/Layout';
import { Content } from '~/components/Container';
import ChatMainInfoContainer from '~/containers/ChatMainInfoContainer';
const ChatStatisticsContainer = dynamic(
  () => import('~/containers/ChatStatisticsContainer'),
  { ssr: false },
);

const Page = () => {
  return (
    <Layout>
      <Content>
        <ChatMainInfoContainer />
        <ChatStatisticsContainer />
      </Content>
    </Layout>
  );
};

export default withApollo(Page);
