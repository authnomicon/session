exports = module.exports = function() {
  return function(obj, cb) {
    process.nextTick(function() {
      var user = { id: obj.id };
      if (obj.username) { user.username = obj.username; }
      if (obj.displayName) { user.displayName = obj.displayName; }
      if (obj.photo) {
        user.photos = [ { value: obj.photo } ];
      }
      return cb(null, user);
    });
  };
};

exports['@implements'] = 'module:passport.Authenticator~deserializeUserFn';
