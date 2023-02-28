// Module dependencies.
var passport = require('passport');

exports = module.exports = function(scheme, manager) {
  var authenticator = new passport.Authenticator();
  authenticator._sm = manager;
  authenticator.unuse('session');
  authenticator.use('session', scheme);
  
  return authenticator;
};

exports['@singleton'] = true;
exports['@implements'] = 'module:@authnomicon/session.Authenticator';
exports['@require'] = [
  './scheme',
  'module:passport.SessionManager'
];
