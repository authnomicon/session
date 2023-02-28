var expect = require('chai').expect;
var $require = require('proxyquire');
var sinon = require('sinon');
var factory = require('../com/scheme');
var Strategy = require('passport-multilogin').Strategy;


describe('scheme', function() {
  
  it('should be annotated', function() {
    expect(factory['@singleton']).to.equal(true);
  });
  
  it('should construct Strategy', function() {
    var StrategySpy = sinon.spy(Strategy);
    var factory = $require('../com/scheme', {
      'passport-multilogin': { Strategy: StrategySpy }
    });
    
    function deserializeUser(){};
    var scheme = factory(deserializeUser);
    
    expect(StrategySpy).to.have.been.calledOnce;
    expect(StrategySpy).to.have.been.calledWithNew;
    expect(StrategySpy).to.have.been.calledWith(deserializeUser);
    expect(scheme).to.be.an.instanceOf(Strategy);
  });
  
});
