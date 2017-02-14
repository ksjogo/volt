var path = require("path");
var webpack = require("webpack");
var express = require("express");
var devMiddleware = require("webpack-dev-middleware");
var hotMiddleware = require("webpack-hot-middleware");
var config = require("../../webpack.client");

var app = express();
var compiler = webpack(config);

app.use(devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true
}));

app.use(hotMiddleware(compiler));

app.use(express.static("static"));

// Load the Platform.sh configuration
var psh = require("platformsh").config();
var port = psh && psh.port || 3000;

app.listen(port, function (err) {
    if (err)
        return console.error(err);
    return console.log("Listening at http://localhost:" + port);
});
