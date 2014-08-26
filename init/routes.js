var Controllers = require(APP.fromRoot("controllers"));

module.exports = exports = setRoutes;
function setRoutes(app) {

  // App routes
  app.get('/', Controllers.root.index);

}
