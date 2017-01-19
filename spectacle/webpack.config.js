/* eslint-disable */

const path = require('path');
const webpack = require('webpack');
const GaugePlugin = require('gauge-webpack-plugin');

console.log('dirname', __dirname);

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    // GaugePlugin('webpack dev build'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    rules: [{
      test: /\.md$/,
      use: [
        { loader: 'html-loader' },
        { loader: 'markdown-loader', query: { gfm: false } },
      ]
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      include: [
        __dirname,
        path.join(__dirname, '..', 'components')
      ],
      loader: 'babel-loader',
    }, {
      test: /\.css$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'raw-loader' },
      ],
      include: path.join(__dirname, '..') // !!! THIS DOES INCLUDE NODE_MODULES !!!
    }, {
      test: /\.svg$/,
      loader: 'url-loader',
      include: path.join(__dirname, 'assets'),
      query: {
        limit: 10000,
        mimetype: 'image/svg+xml'
      }
    }, {
      test: /\.png$/,
      loader: 'url-loader',
      include: path.join(__dirname, 'assets'),
      query: {
        mimetype: 'image/png'
      }
    }, {
      test: /\.gif$/,
      loader: 'url-loader',
      include: path.join(__dirname, 'assets'),
      query: {
        mimetype: 'image/gif'
      }
    }, {
      test: /\.jpg$/,
      loader: 'url-loader',
      include: path.join(__dirname, 'assets'),
      query: {
        mimetype: 'image/jpg'
      }
    }, {
      test: /\.(?!png|svg|gif|jpg).*$/,
      loader: 'raw-loader',
      include: path.join(__dirname, 'assets')
    }]
  }
};
