// Module dependencies.
var passport = require('passport');

/**
 * Create authenticator that authenticates requests occuring within a login
 * session.
 *
 * @returns {passport.Authenticator}
 */
exports = module.exports = function(sessionScheme, anonymousScheme, manager) {
  var authenticator = new passport.Authenticator();
  authenticator.sessions(manager);
  authenticator.unuse('session');
  authenticator.use('session', sessionScheme);
  authenticator.use('anonymous', anonymousScheme);
  // TODO: Use anonymous session here and make scheme strict
  
  return authenticator;
};

// Module annotations.
exports['@singleton'] = true;
exports['@implements'] = 'module:authnomicon.WebAuthenticator';
exports['@require'] = [
  './schemes/session',
  './schemes/anonymous',
  'module:passport.SessionManager'
];
