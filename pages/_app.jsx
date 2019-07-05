import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';
import ReactGA from 'react-ga';
import { config } from '@fortawesome/fontawesome-svg-core';
import { ApolloProvider } from 'react-apollo';
import withApolloClient from '../lib/withApolloClient';
import { ga } from '../config';

import '@fortawesome/fontawesome-svg-core/styles.css';
import 'normalize.css';
import './ant.less';
import './_app.sass';

config.autoAddCss = false;

Router.events.on('routeChangeStart', (url) => {
  ReactGA.pageview(url);
});

class CustomApp extends App {
  componentDidMount() {
    ReactGA.initialize(ga.tag);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(CustomApp);
