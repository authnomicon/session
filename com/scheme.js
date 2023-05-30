// Module dependencies.
var SessionStrategy = require('passport-multilogin').Strategy;

exports = module.exports = function(deserializeUser) {
  return new SessionStrategy(deserializeUser);
};

exports['@singleton'] = true;
exports['@require'] = [
  'module:passport.Authenticator~deserializeUserFn'
];
