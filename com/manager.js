// Module dependencies.
var SessionManager = require('passport-multilogin').SessionManager;

/**
 * Create session manager.
 *
 * Returns a session manager that manages ongoing login sessions for a users of
 * a web application.
 *
 * The login session state is persisted using {@link https://github.com/expressjs/session express-session},
 * which sets a session ID cookie and stores the state in a backend session
 * store such as {@link https://redis.io/ Redis} or @{link https://memcached.org/ memcached}.
 * The cookie itself is typically HTTP-only, improving security by preventing
 * access by client-side scripts.
 *
 * Additionally, the session manager sets a login session state cookie, which
 * captures meaningful events such as login, logout, or change of authentication
 * level.  This state cookie is available to client-side JavaScript,
 * facilitating the implementation of optimized client-side session management
 * functionality such as {@link https://openid.net/specs/openid-connect-session-1_0.html OpenID
 * Connect Session Management}.
 *
 * The session manager supports mulit-login, allowing multiple users to be
 * logged in from the same browser.
 *
 * @returns {passport.SessionManager}
 */
exports = module.exports = function(serializeUser) {
  return new SessionManager({ jsCookie: true }, serializeUser);
};

exports['@singleton'] = true;
exports['@implements'] = 'module:passport.SessionManager';
exports['@require'] = [
  'module:passport.Authenticator~serializeUserFn'
];
