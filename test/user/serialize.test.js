var expect = require('chai').expect;
var factory = require('../../com/user/serialize');


describe('user/serialize', function() {
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.equal('module:passport.Authenticator~serializeUserFn');
  });
  
  
  describe('serializeUserFn', function() {
    var serializeFn;
    
    before(function() {
      serializeFn = factory();
    });
    
    
    it('should yield object with username', function(done) {
      serializeFn({ id: '703887', username: 'mhashimoto' }, function(err, user) {
        if (err) { return done(err); }
        expect(user).to.deep.equal({ id: '703887', username: 'mhashimoto' });
        done();
      });
    }); // should yield object with username
    
    it('should yield object with name', function(done) {
      serializeFn({ id: '703887', displayName: 'Mork Hashimoto' }, function(err, user) {
        if (err) { return done(err); }
        expect(user).to.deep.equal({ id: '703887', name: 'Mork Hashimoto' });
        done();
      });
    }); // should yield object with name
    
    it('should yield object with picture', function(done) {
      serializeFn({
        id: '703887',
        displayName: 'Mork Hashimoto',
        photos: [ {
          value: 'http://sample.site.org/photos/12345.jpg',
          type: 'thumbnail'
        } ],
      }, function(err, user) {
        if (err) { return done(err); }
        expect(user).to.deep.equal({ id: '703887', name: 'Mork Hashimoto', picture: 'http://sample.site.org/photos/12345.jpg' });
        done();
      });
    }); // should yield object with picture
    
    it('should yield object without extraneous fields', function(done) {
      serializeFn({ id: '703887', username: 'mhashimoto', birthday: '0000-01-16' }, function(err, user) {
        if (err) { return done(err); }
        expect(user).to.deep.equal({ id: '703887', username: 'mhashimoto' });
        done();
      });
    }); // should yield object without extraneous fields
    
  }); // serializeUserFn

});
