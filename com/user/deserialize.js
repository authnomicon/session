exports = module.exports = function() {
  return function(obj, cb) {
    process.nextTick(function() {
      var user = { id: obj.id };
      if (obj.username) { user.username = obj.username; }
      if (obj.name) { user.displayName = obj.name; }
      if (obj.picture) {
        user.photos = [ { value: obj.picture } ];
      }
      return cb(null, user);
    });
  };
};

// Module annotations.
exports['@implements'] = 'module:passport.Authenticator~deserializeUserFn';
