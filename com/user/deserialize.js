exports = module.exports = function() {
  return function(obj, cb) {
    process.nextTick(function() {
      return cb(null, obj);
    });
  };
};

exports['@implements'] = 'module:passport.Authenticator~deserializeUserFn';
