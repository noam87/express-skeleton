var some_middleware = require("../../lib/middleware/example");

exports.index = [
  some_middleware,
  index
];

function index(req, res){
  req.flash('info', '2014');
  res.render('index', { title: 'This App Does Nothing!', messages: req.flash('info') });
};
