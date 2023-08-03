function WebAuthenticator(authenticator) {
  this._authenticator = authenticator;
}

WebAuthenticator.prototype.authenticate = function(strategy, options, cb) {
  if (!Array.isArray(strategy) && typeof strategy == 'object' && typeof strategy.authenticate !== 'function') {
    cb = options;
    options = strategy;
    strategy = 'session';
  }
  strategy = strategy || 'session';
  options = options || {};
  options.failureRedirect =  options.failureRedirect || '/login';
  // TODO: Ensure that state and referrer are being tracked correctly and returning
  // user to original destination post-login.
  
  return this._authenticator.authenticate(strategy, options, cb);
};

module.exports = WebAuthenticator;
