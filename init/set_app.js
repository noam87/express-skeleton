var morgan = require('morgan');
var express = require('express');
var sass = require('node-sass');
var cf = require('clusterfoo.express-helpers');
var flash = require('connect-flash');

module.exports = function (app) {
  app.set('port', process.env.PORT || 3000);
  app.set('views', APP.fromRoot('views'));
  app.set('view engine', 'ejs');
  app.set('NOADHOST', APP.host);
  app.use(sass.middleware({
      src: __dirname
    , dest: APP.fromRoot('public')
    , debug: true
  }));
  app.use(cf.pass);
  // Pass config hash so that it can be used from within views
  app.use(function(req, res, next) { app.locals.APP = APP; next(); });
  app.use(morgan({ format: 'dev', immediate: true }));
  app.use(require('body-parser')());
  app.use(require('method-override')());
  app.use(require('cookie-parser')('secret'));
  app.use(require('express-session')({ key: 'hashbang', 
                                       cookie: { maxAge: APP.session_expire } }));
  app.use(flash());
  app.use(express.static(APP.fromRoot('public')));
};
