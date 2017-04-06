const autoprefixer = require('autoprefixer');
const common = require('./webpack.common');
const path = require('path');
const webpack = require('webpack');

// plugins
const DefinePlugin = webpack.DefinePlugin;
const LoaderOptionsPlugin = webpack.LoaderOptionsPlugin;

module.exports = {
  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [path.resolve(__dirname, '../node_modules')],
        loader: 'ts-loader'
      },
      {
        test: /\.pug$/,
        loader: 'pug-html-loader'
      },
      {
        test: /\.styl$/,
        loader: 'raw-loader!postcss-loader!stylus-loader'
      }
    ]
  },

  postcss: [
    autoprefixer({ browsers: ['last 3 versions'] })
  ],

  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('testing')
    }),
    new LoaderOptionsPlugin({
      debug: false,
      options: {
        postcss: [
          autoprefixer({ browsers: ['last 3 versions', 'Firefox ESR'] })
        ],
        resolve: {}
      }
    })
  ],

  resolve: {
    extensions: ['', '.ts', '.js', '.json'],
    modulesDirectories: ['node_modules'],
    root: path.resolve('../src')
  }
};
