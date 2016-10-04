'use strict';
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './public/main',
    output: {
        filename: 'main.js'
    },
    resolve: {
        extensions: [".ts", ".js"],
        modules: [
            path.resolve('.')
        ]
    },
    module: {
        loaders: [
            {
                test: /.ts$/,
                loader: 'ts-loader'
            }
        ]
    }
}