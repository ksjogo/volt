var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });
nodeModules["../../webpack.client"] = "require('../webpack.client');";

module.exports = {
    entry: './src/server/server.ts',
    target: 'node',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'backend.js'
    },
    externals: nodeModules,
    plugins: [
        new webpack.IgnorePlugin(/\.(css|less)$/),
        new webpack.BannerPlugin('require("source-map-support").install();', { raw: true, entryOnly: false })
    ],
    devtool: 'sourcemap',
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: "ts-loader",
            include: path.join(__dirname, "src")
        }]}
};
