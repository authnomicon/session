var expect = require('chai').expect;
var $require = require('proxyquire');
var sinon = require('sinon');
var factory = require('../com/manager');
var SessionManager = require('passport-multilogin').SessionManager;


describe('manager', function() {
  
  it('should be annotated', function() {
    expect(factory['@singleton']).to.equal(true);
    expect(factory['@implements']).to.equal('module:passport.SessionManager');
  });
  
  it('should construct SessionManager', function() {
    var SessionManagerSpy = sinon.spy(SessionManager);
    var factory = $require('../com/manager', {
      'passport-multilogin': { SessionManager: SessionManagerSpy }
    });
    
    function serializeUser(){};
    var manager = factory(serializeUser);
    
    expect(SessionManagerSpy).to.have.been.calledOnce;
    expect(SessionManagerSpy).to.have.been.calledWithNew;
    expect(SessionManagerSpy).to.have.been.calledWith({ jsCookie: true }, serializeUser);
    expect(manager).to.be.an.instanceOf(SessionManager);
  });
  
});
