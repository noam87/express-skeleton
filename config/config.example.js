module.exports = {
  session_expire: daysFromNow(30),

  host: (function() { return process.env.HOST ? process.env.HOST : "http://localhost:3000" })(),
}

// Utility functions
function daysFromNow(days) {
  return new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * days))
}
