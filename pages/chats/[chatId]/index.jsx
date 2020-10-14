import React from 'react';
import { withApollo } from '~/lib/withApolloClient';
import Layout from '~/components/Layout';
import { Content } from '~/components/Container';
import ChatMainInfoContainer from '~/containers/ChatMainInfoContainer';
import ChatStatisticsContainer from '~/containers/ChatStatisticsContainer';

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
