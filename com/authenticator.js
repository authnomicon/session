// Module dependencies.
var passport = require('passport');

/**
 * Create authenticator that authenticates requests occuring within a login
 * session.
 *
 * @returns {passport.Authenticator}
 */
exports = module.exports = function(scheme, manager) {
  var authenticator = new passport.Authenticator();
  authenticator._sm = manager;
  authenticator.unuse('session');
  authenticator.use('session', scheme);
  // TODO: Use anonymous session here and make scheme strict
  
  return authenticator;
};

// Module annotations.
exports['@singleton'] = true;
exports['@implements'] = 'module:@authnomicon/session.Authenticator';
exports['@require'] = [
  './scheme',
  'module:passport.SessionManager'
];
