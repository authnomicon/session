exports = module.exports = function() {
  return function(user, cb) {
    process.nextTick(function() {
      var obj = { id: user.id };
      if (user.username) { obj.username = user.username; }
      if (user.displayName) { obj.name = user.displayName; }
      if (user.photos) {
        obj.picture = user.photos[0].value;
      }
      return cb(null, obj);
    });
  };
};

// Module annotations.
exports['@implements'] = 'module:passport.Authenticator~serializeUserFn';
