import React from 'react';
import App from 'next/app';
import Router from 'next/router';
import Head from 'next/head'
import ReactGA from 'react-ga';
import { ga } from '~/config';

import 'normalize.css';
import './ant.less';
import './_app.sass';

Router.events.on('routeChangeStart', (url) => {
  ReactGA.pageview(url);
});

class CustomApp extends App {
  componentDidMount() {
    ReactGA.initialize(ga.tag);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default CustomApp;
