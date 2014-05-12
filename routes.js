var Controllers = require("./controllers");

module.exports = exports = setRoutes;
function setRoutes(App) {

  // App routes
  App.get('/', Controllers.root.index);

}
