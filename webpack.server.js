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

module.exports = {
    entry: [
        'webpack/hot/poll?1000',
        './backend.js'
    ],
    target: 'node',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'backend.js'
    },
    externals: nodeModules,
    plugins: [
        new webpack.IgnorePlugin(/\.(css|less)$/),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.BannerPlugin('require("source-map-support").install();', { raw: true, entryOnly: false })
    ],
    devtool: 'sourcemap',
    resolve: {
        extensions: ["", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: "ts-loader",
            include: path.join(__dirname, "src")
        }]}
};
