var SessionManager = require('passport-multilogin').SessionManager;

exports = module.exports = function(serializeUser) {
  return new SessionManager(serializeUser);
};

exports['@singleton'] = true;
exports['@implements'] = 'module:passport.SessionManager';
exports['@require'] = [
  'module:passport.Authenticator~serializeUserFn'
];
