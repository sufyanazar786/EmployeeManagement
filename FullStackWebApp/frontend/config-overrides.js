const webpack = require('webpack');

module.exports = function override(config) {
  config.resolve.fallback = {
    "querystring": require.resolve("querystring-es3"),
    "fs": false,
    "net": false,
    "http": require.resolve("stream-http"),
    "path": require.resolve("path-browserify"),
    "zlib": require.resolve("browserify-zlib"),
    "process": require.resolve("process/browser"),
    "crypto": require.resolve("crypto-browserify"),
    "stream": require.resolve("stream-browserify"),
    "url": require.resolve("url"),
    "util": require.resolve("util"),
    "assert": require.resolve("assert"),
    "buffer": require.resolve("buffer"),
  };

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ]);

  return config;
};
