var assert  = require('assert'),
    mcs     = require('../max_consecutive_sum.js');


describe('Max Consecutive Sum', function(){
  it('return the max sum of consecutive items', function(){
    var max_sum = mcs([-1, 5, 6, -2, 20, -50, 4]);
    assert.equal(max_sum, 29);
  });


  it('works in this scenario', function(){
    var  max_sum = mcs([10, -1, -2, -11, 1, 10]);
    assert.equal(max_sum, 11);
  });


  it('works with all negatives and a zero', function(){
    var max_sum = mcs([-1, -20, 0]);
    assert.equal(max_sum, 0);
  });
});
