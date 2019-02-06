'use strict';

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: './foo.js',
  output: {
    filename: 'bundle.js?[contenthash]',
    path: '/'
  },
  module: {
    rules: [
      {
        test: /\.(svg|html)$/,
        loader: 'file-loader',
        query: { name: '[name].[ext]' }
      }
    ]
  }
};
