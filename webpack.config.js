var path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/static',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /.js?/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /.scss?/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
};
