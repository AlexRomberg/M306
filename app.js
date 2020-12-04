// imports
const cm = require('./src/js/consoleModule');
const express = require('express');
const app = express();
cm.log("green", "starting...");


// parameters
let permitted = new RegExp(".css|.js|.gif|.xml|.png|.ico|.webmanifest");
let port = 80;

// handle process arguments
if (process.argv.length > 2) {
    port = process.argv[2];
}


// listen for requests
app.listen(port);

// handle requests
app.get('/', function (req, res) {
    cm.log("white", req.path);
    res.sendFile("./src/index.html", {
        root: __dirname
    });
});
app.get('/index.html', function (req, res) {
    cm.log("yellow", req.path);
    res.redirect(301, '/');
})

// 404
app.use((req, res) => {
    if (permitted.test(req.path)) {
        cm.log("white", req.path);
        res.sendFile(("./src" + req.path), {
            root: __dirname
        });
    } else {
        cm.log("red", req.path);
        res.sendFile("./src/404.html", {
            root: __dirname
        });
    }
});

// done loading
cm.log("green", "Server is up and running.");
cm.log("cyan", "Link: http://localhost:" + port + "/");