'use strict';

var expect = require("chai").expect;
var principal = require("../app/principal");

describe("principal - Test", function() {

  describe("Testing the Operations", function() {

    it("Testing the sum operation", function() {
      expect(principal.add(1,1)).to.equal(1+1);
    });

    it("Testing the minus operation", function() {
      expect(principal.minus(1,1)).to.equal(1-1);
    });

    it("Testing the multiply operation", function() {
      expect(principal.multiply(3,3)).to.equal(3*3);
    });

    it("Testing the divide operation", function() {
      expect(principal.divide(3,3)).to.equal(3/3);
    });

    it("Testing the divide operation by zero", function() {
      const expectedError = new Error("Can't divide by zero");
      expect(principal.divide(3,0).message).to.equal(expectedError.message);
    });

  });
});