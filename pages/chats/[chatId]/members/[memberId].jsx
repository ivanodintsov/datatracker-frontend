import React from 'react';
import { withApollo } from '~/lib/withApolloClient';
import Layout from '~/components/Layout';
import { Content } from '~/components/Container';
import ChatMemberInfoContainer from '~/containers/ChatMemberInfoContainer';
import ChatMemberStatisticsContainer from '~/containers/ChatMemberStatisticsContainer';

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
