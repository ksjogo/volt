var express = require("express");
var app = express();

// Load the Platform.sh configuration
var psh = require("platformsh").config();
var port = psh && psh.port || 3000;

app.listen(port, function (err) {
    if (err)
        return console.error(err);
    return console.log("Listening at http://localhost:" + port);
});

var router = require("./src/server/Router").default;

app.use(function(req, res, next) {
    router(req,  res,  next);
});

if (module.hot) {
    module.hot.accept("./src/server/Router", () =>  {
        router =  require("./src/server/Router").default;
        console.log("hot reloaded");
    });
}
