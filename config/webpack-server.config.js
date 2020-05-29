const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack-base.config');
const webpackNodeExternals = require('webpack-node-externals');

const serverConfig = {
  target: 'node',
  entry: './server/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../build')
  },
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, serverConfig);
