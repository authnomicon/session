/**
 * Create user serialization function.
 *
 * Returns a function that serializes a user object into a data structure
 * suitable for serializing into a session.
 *
 * The user object is expected to conform to Passport's
 * {@link https://www.passportjs.org/reference/normalized-profile/ normalized profile}.
 * It is serialized to a format inspired by OpenID Connect @{link https://openid.net/specs/openid-connect-core-1_0.html#Claims claims},
 * with some revisions to account for the fact that usage is not in a federated
 * context.  This format flattens the structure, reducing its storage size.
 *
 * This function serializes only the properties that are typically needed by
 * requests to the majority of endpoints in an application.  This allows
 * responses from those endpoints to be sent without querying the database for
 * user information.  Endpoints that need non-serialized properties will need
 * to query the database.
 *
 * @returns {passport.Authenticator~serializeUserFn}
 */
exports = module.exports = function() {
  return function(user, cb) {
    process.nextTick(function() {
      // The user ID is seraialized to an `id` property (rather than `sub` as
      // defined by OpenID Connect) as the ID is local to this application's
      // domain, rather than that of a federated system.
      var obj = { id: user.id };
      // The username is serialized to a `username` property (rather than
      // `preferred_username` as defined by OpenID Connect), as the username is
      // local to this application's domain, rather than being suggested by a
      // federated system.
      if (user.username) { obj.username = user.username; }
      if (user.displayName) { obj.name = user.displayName; }
      if (user.photos && user.photos.length > 0) {
        obj.picture = user.photos[0].value;
      }
      return cb(null, obj);
    });
  };
};

// Module annotations.
exports['@implements'] = 'module:passport.Authenticator~serializeUserFn';
