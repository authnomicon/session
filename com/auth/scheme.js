// Module dependencies.
var SessionStrategy = require('passport-multilogin').Strategy;

/**
 * Create session authentication scheme.
 *
 * Returns an authentication scheme that authenticates a user by verifying login
 * session state.
 *
 * @param {passport.Authenticator~deserializeUserFn} deserializeUser - User deserialization function.
 * @returns {passport.Strategy}
 */
exports = module.exports = function(deserializeUser) {
  return new SessionStrategy(deserializeUser);
};

// Module annotations.
exports['@singleton'] = true;
exports['@implements'] = 'module:passport.Strategy';
exports['@require'] = [
  'module:passport.Authenticator~deserializeUserFn'
];
