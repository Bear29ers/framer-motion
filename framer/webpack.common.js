const path = require('path');
const StylelintPlugin = require('stylelint-webpack-plugin');
const EslintWebpackPluign = require('eslint-webpack-plugin');

module.exports = ({ outputFile, assetFile }) => ({
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: `${outputFile}`,
    chunkFilename: `#${outputFile}`,
  },
  moudle: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['@babel/preset-env', '@babel/react'] },
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.json'),
            },
          },
        ],
      },
      {
        test: /\.(sass|scss)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg?g|gif|png|svg|woff2?|ttf|eot)$/,
        generator: {
          filename: `./images/${assetFile}[ext]`,
        },
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new StylelintPlugin({
      fix: true,
    }),
    new EslintWebpackPluign({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      fix: true,
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      cacheGroups: {
        defaultVendor: {
          name: 'vendor',
          test: /node_modules/,
          priority: -10,
          reuseExistingChunk: true,
        },
      },
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    moudles: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
});
