// DON'T DO THIS
global._ = require('./public/javascripts/funcderscore.js');
global.APP = require('./config');

var path = require('path');

APP.root = __dirname;
APP.fromRoot = function (target) {
  return path.join(APP.root, target);
}

var cf = require('clusterfoo.express-helpers');
var http = require('http');
var express = require('express');

var App = express();

require("./init/set_app.js")(App);
require("./init/routes")(App);
App.use(cf.error);

var env = process.env.NODE_ENV || 'development';
if ('development' == env) App.use(require('errorhandler')());

// Set up http and websocket servers
var server = http.createServer(App).listen(App.get('port'), function() {
  console.log('Express server listening on port ' + App.get('port'));
});

module.exports = App;
