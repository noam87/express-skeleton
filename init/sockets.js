var game = require(APP.fromRoot('lib/game'));

module.exports = function(io) {
  io.on('connection', function (socket) {
    console.log("user did some socket thingy");
  });
};
