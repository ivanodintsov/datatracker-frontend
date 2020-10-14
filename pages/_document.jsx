import React from 'react';
import Document, { Head, Main, NextScript, Html } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png?v=2b0QPQw3ol' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png?v=2b0QPQw3ol' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png?v=2b0QPQw3ol' />
          <link rel='manifest' href='/favicon/site.webmanifest?v=2b0QPQw3ol' />
          <link rel='mask-icon' href='/favicon/safari-pinned-tab.svg?v=2b0QPQw3ol' color='#5bbad5' />
          <link rel='shortcut icon' href='/favicon/favicon.ico?v=2b0QPQw3ol' />
          <meta name='msapplication-TileColor' content='#2d89ef' />
          <meta name='msapplication-config' content='/favicon/browserconfig.xml?v=2b0QPQw3ol' />
          <meta name='theme-color' content='#ffffff' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
