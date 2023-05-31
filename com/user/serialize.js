/**
 * Create user serialization function.
 *
 * Returns a function that serializes a user object into a data structure
 * suitable for serializing into a session.
 *
 * The user object is expected to conform to Passport's
 * {@link https://www.passportjs.org/reference/normalized-profile/ normalized profile}
 *
 * @returns {passport.Authenticator~serializeUserFn}
 */
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
