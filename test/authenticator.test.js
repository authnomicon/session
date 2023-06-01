var expect = require('chai').expect;
var $require = require('proxyquire');
var sinon = require('sinon');
var factory = require('../com/authenticator');
var Authenticator = require('passport').Authenticator;


describe('authenticator', function() {
  
  it('should be annotated', function() {
    expect(factory['@singleton']).to.equal(true);
    expect(factory['@implements']).to.equal('module:bixby-express.WebAuthenticator');
  });
  
  it('should construct Authenticator', function() {
    var AuthenticatorSpy = sinon.spy(Authenticator);
    var factory = $require('../com/authenticator', {
      'passport': { Authenticator: AuthenticatorSpy }
    });
    
    var scheme = new Object();
    var manager = new Object();
    var authenticator = factory(scheme, manager);
    
    expect(AuthenticatorSpy).to.have.been.calledOnce;
    expect(AuthenticatorSpy).to.have.been.calledWithNew;
    // TODO: Assertions for using scheme and manager
  });
  
});
