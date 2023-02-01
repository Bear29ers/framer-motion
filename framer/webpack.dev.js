const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const commonConf = require('./webpack.common');
const outputFile = '[name]';
const assetFile = '[name]';

module.exports = merge(commonConf({ outputFile, assetFile }), {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    open: true,
    static: path.join(__dirname, 'dist'),
    port: 3000,
    host: '0.0.0.0',
    hot: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
    }),
  ],
});
