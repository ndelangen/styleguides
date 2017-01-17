/* eslint-disable */

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');
const spawn = require('child_process').spawn
const Promise = require('bluebird');
const chalk = require('chalk');

const app = express();
const compiler = webpack(config);

const serverPort = process.env.PORT || 3000;

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  quiet: true,
  publicPath: config.output.publicPath,
  watchOptions: {
    aggregateTimeout: 100,
    poll: false
  },
  stats: {
    colors: true
  },
});
const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  noInfo: true,
  quiet: true,
  log: false
});

app.use(devMiddleware);
app.use(hotMiddleware);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const server = new Promise((resolve, reject) => {
  app.listen(serverPort, 'localhost', (err, result) => {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});

const compilation = new Promise((resolve, reject) => {
  devMiddleware.waitUntilValid(results => {
    resolve(results);
  })
});

const ready = Promise.all([server, compilation]);

ready.then(([server, compilation]) => {
  const address = `http://localhost:${serverPort}`;

  console.log(chalk.gray('---'));
  console.log(`📦 `, chalk.cyan(`Compilation completed`));
  console.log(compilation.toString({
    colors: true,
    chunks: false
  }));
  console.log(chalk.gray('---'));
  console.log(`🌎 `, chalk.cyan(`Server listening at: ${chalk.bold(address)}`));

  spawn('open', [address]);
});
