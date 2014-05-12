////
// A simple object forpassing stuff around.
//
//     res.pass.whatever = function() { .... }
module.exports.pass = pass;
function pass(req, res, next) {
  res.pass = {};
  next();
}

////
// CORS middleware: allow cross-domain.
module.exports.allowCrossDomain = allowCrossDomain;
function allowCrossDomain(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  // intercept OPTIONS method
  if ('OPTIONS' == req.method) res.send(200);
  next();
};

////
// Handle errors that are thrown.
// Default behavior is to respond "500 server error".
// If custom behavior is desired, the custom error-handling function must
// be passed along with the request a `res.pass.errFn(err)`.
module.exports.error = error;
function error(err, req, res, next) {
  console.error(err);
  if (typeof res.pass.errFn == 'function') {
    res.pass.errFn(err);
  } else {
    res.json(500, { error: "Woops! Looks like we broke something... our bad" });
  }
}
