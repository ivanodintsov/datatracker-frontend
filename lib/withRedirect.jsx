import { Component } from 'react';
import nextRedirect from 'next-redirect';

class WithRedirect extends Component {
  static defaultProps = {
    redirect: nextRedirect,
    path: '/',
  };

  static getInitialProps(ctx) {
    return {
      redirect: (ctxB, path) => nextRedirect(ctx, path),
      path: ctx.asPath,
    };
  }
}

export default WithRedirect;
