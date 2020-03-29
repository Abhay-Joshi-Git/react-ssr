const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack-base.config');

const serverConfig = {
  target: 'node',
  entry: './server/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../build')
  }
};

module.exports = merge(baseConfig, serverConfig);
