////
// This is the place to configure all varibale settings in the application.
// Ideally no values should be hardcoded into the code.
module.exports = {
  session_expire: daysFromNow(30),

  host: (function() { return process.env.HOST ? process.env.HOST : "http://localhost:3000" })(),
}

// Utility functions
function daysFromNow(days) {
  return new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * days))
}
