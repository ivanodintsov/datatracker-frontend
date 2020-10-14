const webpack = require('webpack');
const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const cssLoaderConfig = require('@zeit/next-css/css-loader-config');
const CleanCSSPlugin = require('less-plugin-clean-css');
const defaultGetLocalIdent = require('css-loader/lib/getLocalIdent');
const path = require('path');
const withTM = require('next-transpile-modules')([
  'antd/es',
  'rc-pagination',
  'rc-calendar',
  'rc-util',
  'rc-tooltip',
  'css-animation',
  'ramda/es',
]);
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withLess = (config, options) => {
  const { dev, isServer } = options;

  config.resolve.alias['~'] = path.join(__dirname);

  // eslint-disable-next-line no-param-reassign
  options.defaultLoaders.less = cssLoaderConfig(config, {
    extensions: ['less'],
    dev,
    isServer,
    loaders: [
      {
        loader: 'less-loader',
        options: {
          javascriptEnabled: true,
          sourceMap: dev,
          plugins: [
            new CleanCSSPlugin({
              sourceMap: dev,
              debug: dev,
              advanced: true,
              rebase: true,
              level: {
                0: {
                  all: false,
                },
                1: {
                  all: false,
                },
                2: {
                  all: false,
                  removeDuplicateRules: true,
                },
              },
            }),
          ],
        },
      },
    ],
  });

  config.plugins.push(new webpack.IgnorePlugin({
    resourceRegExp: /^\.\/locale$/,
    contextRegExp: /moment$/
  }));

  config.module.rules.push({
    test: /\.less$/,
    use: options.defaultLoaders.less,
  });

  return config;
};

module.exports = withPlugins(
  [
    withTM,
    withBundleAnalyzer,
  ],
  {
    transpileModules: ['pretty-bytes'],
    publicRuntimeConfig: {
      NODE_ENV: process.env.NODE_ENV,
    },
    webpack: (config, options) => {
      const sassConfig = withSass(withCss({
        cssModules: true,
        cssLoaderOptions: {
          localIdentName: '[hash:base64:5]',
          getLocalIdent: (loaderContext, localIdentName, localName, options) => {
            if (loaderContext.resourcePath.includes('node_modules')) {
              return localName;
            }

            return defaultGetLocalIdent(loaderContext, localIdentName, localName, options);
          },
        },
      })).webpack(config, options);
      return withLess(sassConfig, options);
    },
  },
);
