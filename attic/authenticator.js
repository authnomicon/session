// Module dependencies.
var passport = require('passport');
var WebAuthenticator = require('../lib/webauthenticator');

/**
 * Create authenticator that authenticates requests occuring within a login
 * session.
 *
 * @returns {authnomicon.WebAuthenticator}
 */
exports = module.exports = function(sessionScheme, anonymousScheme, manager) {
  var authenticator = new passport.Authenticator();
  authenticator.sessions(manager);
  authenticator.unuse('session');
  // TODO: Make session scheme strict
  authenticator.use('session', sessionScheme);
  authenticator.use('anonymous', anonymousScheme);
  
  // TODO: Resolve login endpoint and set it as an option to default in WebAuthenticator wrapper
  
  return new WebAuthenticator(authenticator);
};

// Module annotations.
exports['@singleton'] = true;
exports['@implements'] = 'module:authnomicon.WebAuthenticator';
exports['@require'] = [
  './schemes/session',
  './schemes/anonymous',
  'module:passport.SessionManager'
];
