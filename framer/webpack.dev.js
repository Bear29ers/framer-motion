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
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    host: '0.0.0.0',
    allowedHosts: 'all',
    hot: true,
    port: 3002,
    historyApiFallback: true,
    client: {
      webSocketURL: 'ws://0.0.0.0:3002/ws',
      reconnect: true,
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  watchOptions: {
    poll: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
    }),
  ],
});
