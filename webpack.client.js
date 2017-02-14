var path = require("path");
var webpack = require("webpack");

var cssvariables =  require("./src/client/style/variables");
cssvariables["test"] =  "yellow";

module.exports = {
    devtool: "inline-module-source-map",
    entry: [
        "react-hot-loader/patch",
        "webpack-hot-middleware/client",
        "./src/client/index"
    ],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "client.js",
        publicPath: "/webpack/"
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: "ts-loader",
            include: path.join(__dirname, "src")
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader!postcss-loader"
        }]
    },
    postcss: function (webpack) {
        return [
            require("postcss-import")(),
            require("postcss-url")(),
            require("postcss-cssnext")({
                features: {
                    customProperties: {
                        variables:  cssvariables
                    }
                }
            }),
            require("postcss-browser-reporter")(),
            require("postcss-reporter")()
        ];
    }
};
