const autoprefixer = require('autoprefixer');
const common = require('./webpack.common');
const path = require('path');
const webpack = require('webpack');

// plugins
const DefinePlugin = webpack.DefinePlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',

    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: [path.resolve(__dirname, '../node_modules')],
                loader: 'ts'
            },
            {
                test: /\.pug$/,
                loader: 'pug-html-loader'
            },
            {
                test: /\.styl$/,
                include: [path.resolve(__dirname, '../src/client')],
                loader: 'raw!postcss-loader!stylus-loader'
            },
            {
                test: /\.styl$/,
                exclude: [path.resolve(__dirname, '../src/client')],
                include: [path.resolve(__dirname, '../src/styles')],
                loader: ExtractTextPlugin.extract('raw!postcss-loader!stylus-loader')
            }
        ]
    },

    postcss: [
        autoprefixer({ browsers: ['last 3 versions'] })
    ],

    sassLoader: {
        outputStyle: 'compressed',
        precision: 10,
        sourceComments: false
    },

    plugins: [
        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('testing')
        })
    ],

    resolve: {
        extensions: ['', '.ts', '.js', '.json'],
        modulesDirectories: ['node_modules'],
        root: path.resolve('../src')
    }
};
