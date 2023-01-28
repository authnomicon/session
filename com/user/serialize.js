exports = module.exports = function() {
  return function(user, cb) {
    // TODO: only do displayName, image, and username
    
    process.nextTick(function() {
      return cb(null, user);
    });
  };
};

exports['@implements'] = 'module:passport.Authenticator~serializeUserFn';
