var expect = require('chai').expect;
var factory = require('../../com/user/deserialize');


describe('user/deserialize', function() {
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.equal('module:passport.Authenticator~deserializeUserFn');
  });
  
  
  describe('deserializeUserFn', function() {
    var deserializeFn;
    
    before(function() {
      deserializeFn = factory();
    });
    
    
    it('should yield object with username', function(done) {
      deserializeFn({ id: '703887', username: 'mhashimoto' }, function(err, user) {
        if (err) { return done(err); }
        expect(user).to.deep.equal({ id: '703887', username: 'mhashimoto' });
        done();
      });
    }); // should yield object with username
    
    it('should yield object with display name', function(done) {
      deserializeFn({ id: '703887', name: 'Mork Hashimoto' }, function(err, user) {
        if (err) { return done(err); }
        expect(user).to.deep.equal({ id: '703887', displayName: 'Mork Hashimoto' });
        done();
      });
    }); // should yield object with display name
    
    it('should yield object with photos', function(done) {
      deserializeFn({ id: '703887', name: 'Mork Hashimoto', picture: 'http://sample.site.org/photos/12345.jpg' }, function(err, user) {
        if (err) { return done(err); }
        expect(user).to.deep.equal({
          id: '703887',
          displayName: 'Mork Hashimoto',
          photos: [ {
            value: 'http://sample.site.org/photos/12345.jpg'
          } ]
        });
        done();
      });
    }); // should yield object with photos
    
  }); // deserializeUserFn

});
