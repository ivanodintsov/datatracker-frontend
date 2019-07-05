import React from 'react';
import Layout from '../components/Layout';
import css from './_app.sass';
import { Content } from '../components/Container';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const resCode = res && res.statusCode;
    const errCode = err && err.statusCode;
    return { statusCode: resCode || errCode };
  }

  render() {
    const { statusCode, } = this.props;

    return (
      <Layout footer={false}>
        <Content className={css.errorRoot}>
          <h1 className={css.error}>
            {statusCode || 'An error occurred on client'}
          </h1>
        </Content>
      </Layout>
    );
  }
}

export default Error;
