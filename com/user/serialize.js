exports = module.exports = function() {
  return function(user, cb) {
    // TODO: only do displayName, image, and username
    
    process.nextTick(function() {
      var obj = { id: user.id };
      if (user.username) { obj.username = user.username; }
      if (user.displayName) { obj.displayName = user.displayName; }
      return cb(null, obj);
    });
  };
};

exports['@implements'] = 'module:passport.Authenticator~serializeUserFn';
