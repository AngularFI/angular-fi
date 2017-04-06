const clone = require('js.clone');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const DefinePlugin = webpack.DefinePlugin;
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const LoaderOptionsPlugin = webpack.LoaderOptionsPlugin;
const NormalModuleReplacementPlugin = webpack.NormalModuleReplacementPlugin;
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

import { root, includeClientPackages } from './helpers';
import * as commonWebpackConfig from './webpack.common';


export const commonPlugins = [
  // Loader options
  new LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),

  new NormalModuleReplacementPlugin(
    /facade(\\|\/)async/,
    root('node_modules/@angular/core/src/facade/async.js')
  ),
  new NormalModuleReplacementPlugin(
    /facade(\\|\/)collection/,
    root('node_modules/@angular/core/src/facade/collection.js')
  ),
  new NormalModuleReplacementPlugin(
    /facade(\\|\/)errors/,
    root('node_modules/@angular/core/src/facade/errors.js')
  ),
  new NormalModuleReplacementPlugin(
    /facade(\\|\/)lang/,
    root('node_modules/@angular/core/src/facade/lang.js')
  ),
  new NormalModuleReplacementPlugin(
    /facade(\\|\/)math/,
    root('node_modules/@angular/core/src/facade/math.js')
  )
];

export const commonConfig = {};


// Client.
export const clientPlugins = [
  new DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),

  new FaviconsWebpackPlugin({
    logo: './src/favicon.png',
    prefix: 'assets/favicon/',
    emitStats: false,
    statsFilename: 'iconstats.json',
    inject: true,
    background: '#ffffff',
    title: 'Angular Finland'
  }),

  new BundleAnalyzerPlugin({
    analyzerMode: 'disabled', // change it to `server` to view bundle stats
    reportFilename: 'report.html',
    generateStatsFile: true,
    statsFilename: 'stats.json',
  }),

  new UglifyJsPlugin({
    // beautify: true,
    // mangle: false,
    output: {
      comments: false
    },
    compress: {
      warnings: false,
      conditionals: true,
      unused: true,
      comparisons: true,
      sequences: true,
      dead_code: true,
      evaluate: true,
      if_return: true,
      join_vars: true,
      negate_iife: false // we need this for lazy v8
    },
    sourceMap: true
  })
];

export const clientConfig = {};


// Server.
export const serverPlugins = [
  new UglifyJsPlugin({
    // beautify: true,
    mangle: false, // to ensure process.env still works
    output: {
      comments: false
    },
    compress: {
      warnings: false,
      conditionals: true,
      unused: true,
      comparisons: true,
      sequences: true,
      dead_code: true,
      evaluate: true,
      if_return: true,
      join_vars: true,
      negate_iife: false // we need this for lazy v8
    },
    sourceMap: true
  }),
];

export const serverConfig = {};


export default [
  // Client
  webpackMerge(
    clone(commonWebpackConfig.commonConfig),
    commonWebpackConfig.clientConfig,
    clone(commonConfig),
    clientConfig,
    { plugins: [
      ...commonWebpackConfig.commonPlugins,
      ...commonWebpackConfig.clientPlugins,
      ...commonPlugins,
      ...clientPlugins
    ]}
  ),

  // Server
  webpackMerge(
    clone(commonWebpackConfig.commonConfig),
    commonWebpackConfig.serverConfig,
    clone(commonConfig),
    serverConfig,
    { plugins: [
      ...commonWebpackConfig.commonPlugins,
      ...commonWebpackConfig.serverPlugins,
      ...commonPlugins,
      ...serverPlugins
    ]}
  )
];
