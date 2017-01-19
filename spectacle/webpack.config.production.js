/* eslint-disable */

var path = require("path");
var webpack = require("webpack");
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: [
    "babel-polyfill",
    "./index"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
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
      loader: "babel-loader",
    }, {
      test: /\.css$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'raw-loader' },
      ],
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: "url-loader",
      query: {
        limit: 8192
      }
    }, {
      test: /\.svg$/,
      loader: "url-loader",
      query: {
        limit: 10000,
        mimetype: 'image/svg+xml'
      }
    }]
  }
};
