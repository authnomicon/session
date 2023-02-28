var factory = require('../com/sessionmanager');
var $require = require('proxyquire');
var SessionManager = require('passport-multilogin').SessionManager;
var sinon = require('sinon');
var expect = require('chai').expect;


describe('sessionmanager', function() {
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.equal('module:passport.SessionManager');
    expect(factory['@singleton']).to.equal(true);
  });
  
  it('should construct SessionManager', function() {
    
    var SessionManagerSpy = sinon.spy(SessionManager);
    var factory = $require('../com/sessionmanager', {
      'passport-multilogin': { SessionManager: SessionManagerSpy }
    });
    
    var store = factory();
    expect(SessionManagerSpy).to.have.been.calledOnce;
    expect(SessionManagerSpy).to.have.been.calledWithNew;
    expect(store).to.be.an.instanceOf(SessionManager);
    
  });
  
});
