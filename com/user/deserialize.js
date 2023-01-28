exports = module.exports = function() {
  return function(user, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
  };
};

exports['@implements'] = 'module:passport.Authenticator~deserializeUserFn';
