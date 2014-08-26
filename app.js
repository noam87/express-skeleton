global.APP = require('./config/config');

var path = require('path');

// easy access to directories
APP.root = __dirname;
APP.fromRoot = function (target) {
  return path.join(APP.root, target);
}

var cf = require('clusterfoo.express-helpers');
var http = require('http');
var express = require('express');

var app = express();

require("./init/set_app.js")(app);
require("./init/routes")(app);
app.use(cf.error);

var env = process.env.NODE_ENV || 'development';
if ('development' == env) app.use(require('errorhandler')());

// Set up http and websocket servers
var server = http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

var io = require('socket.io').listen(server);

require('./init/sockets')(io);

module.exports = app;
