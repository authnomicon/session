/**
 * Create user deserialization function.
 *
 * Returns a function that deserializes a user object from data stored in a
 * session to an object expected by the application.
 *
 * The data stored in the session was previously serialized by the corresponding
 * `serialize` function.  It is deserialized into an object that conforms to
 * Passport's {@link https://www.passportjs.org/reference/normalized-profile/ normalized profile}.
 *
 * @returns {passport.Authenticator~deserializeUserFn}
 */
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
