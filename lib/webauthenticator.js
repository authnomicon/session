function WebAuthenticator(authenticator) {
  this._authenticator = authenticator;
}

WebAuthenticator.prototype.authenticate = function(strategy, options, cb) {
  if (typeof strategy == 'object' && typeof strategy.authenticate !== 'function') {
    cb = options;
    options = strategy;
    strategy = 'session';
  }
  strategy = strategy || 'session';
  
  return this._authenticator.authenticate(strategy, options, cb);
};

module.exports = WebAuthenticator;
