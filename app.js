var Express = require('express');
// logger
var morgan = require('morgan');
var HTTP = require('http');
var Path = require('path');
var Sass = require('node-sass');
var Cf = require('clusterfoo.express-helpers');
var flash = require('connect-flash');

// Set Up Application

var App = Express();
var APP = require('./config');
module.exports = App;

////
// All environments
App.set('port', process.env.PORT || 3000);
App.set('views', Path.join(__dirname, 'views'));
App.set('view engine', 'ejs');
App.set('NOADHOST', APP.host);
App.use(Sass.middleware({
    src: __dirname
  , dest: Path.join(__dirname, 'public')
  , debug: true
}));
//App.use(require('serve-favicon')());
App.use(Cf.pass);
// Pass config hash so that it can be used from within views
App.use(function(req, res, next) { App.locals.APP = APP; next(); });
App.use(morgan({ format: 'dev', immediate: true }));
App.use(require('body-parser')());
App.use(require('method-override')());
App.use(require('cookie-parser')('secret'));
App.use(require('express-session')({ key: 'booblue.session', 
                                     cookie: { maxAge: APP.session_expire } }));
App.use(flash());

// routes
require("./routes")(App);

App.use(Cf.error);
App.use(Express.static(Path.join(__dirname, 'public')));

// Development only
var env = process.env.NODE_ENV || 'development';
if ('development' == env) App.use(require('errorhandler')());

// Routes

// Serve
HTTP.createServer(App).listen(App.get('port'), function() {
  console.log('Express server listening on port ' + App.get('port'));
});
