var factory = require('../../com/user/deserialize');
var expect = require('chai').expect;


describe('user/deserialize', function() {
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.equal('module:passport.Authenticator~deserializeUserFn');
  });
  
  
  describe('created function', function() {
    var deserializeFn;
    
    before(function() {
      deserializeFn = factory();
    });
    
    
    it('should yield object', function(done) {
      deserializeFn({ id: '703887', username: 'mhashimoto' }, function(err, user) {
        if (err) { return done(err); }
        expect(user).to.deep.equal({ id: '703887', username: 'mhashimoto' });
        done();
      });
    }); // should yield object
    
  }); // created function

});
