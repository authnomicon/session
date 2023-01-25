/* global describe, it, expect */

var factory = require('../com/authenticator');
var expect = require('chai').expect;


describe('authenticator', function() {
  
  it('should export factory function', function() {
    expect(factory).to.be.a('function');
  });
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.equal('module:@authnomicon/session.Authenticator');
    expect(factory['@singleton']).to.equal(true);
  });
  
});
