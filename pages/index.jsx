import React from 'react';
import Head from 'next/head';
import Home from '../components/Home';
import Layout from '../components/Layout';

export default () => (
  <>
    <Head>
      <title>Data Tracker | Just a chat activity bot</title>
    </Head>
    <Layout footer={false}>
      <Home />
    </Layout>
  </>
);
