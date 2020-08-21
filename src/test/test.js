const assert = require('assert');
const { isPrime } = require("../controllers/functions");

describe('Check prime', function () {
  it('should return true when day is prime', function () {
    assert.equal(isPrime(3), true);
  });

  it('should return false when day is not prime', function () {
    assert.equal(isPrime(4), false);
  });
});
