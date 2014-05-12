module.exports = function(req, res, next) {
  console.log("This middleware does nothing useful!");
  next();
}
