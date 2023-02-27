exports = module.exports = function() {
  return function(user, cb) {
    process.nextTick(function() {
      var obj = { id: user.id };
      if (user.username) { obj.username = user.username; }
      if (user.displayName) { obj.displayName = user.displayName; }
      if (user.photos) {
        obj.photo = user.photos[0].value;
      }
      return cb(null, obj);
    });
  };
};

exports['@implements'] = 'module:passport.Authenticator~serializeUserFn';
