var factory = require('../../com/user/serialize');
var expect = require('chai').expect;


describe('user/serialize', function() {
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.equal('module:passport.Authenticator~serializeUserFn');
  });
  
  
  describe('created function', function() {
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
    
    it('should yield object without extraneous fields', function(done) {
      serializeFn({ id: '703887', username: 'mhashimoto', birthday: '0000-01-16' }, function(err, user) {
        if (err) { return done(err); }
        expect(user).to.deep.equal({ id: '703887', username: 'mhashimoto' });
        done();
      });
    }); // should yield object without extraneous fields
    
  }); // created function

});
