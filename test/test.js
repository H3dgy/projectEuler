'use strict';

require('chai').should();
const multiples = require('../multiples.js');

// https://projecteuler.net/problem=1

describe('multiples', function () {
  it('Should return the sum of all multiples of 3 and 5', function () {
    multiples(3,5,9).should.equal(23);
  });
});
