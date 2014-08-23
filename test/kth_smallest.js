var assert       = require('assert'),
    sinon        = require('sinon'),
    kth_smallest = require('../kth_smallest.js');

describe('kth smallest', function(){
  it('returns the smallest k elements from the two input arrays', function(){
    var kth_smallest_array = kth_smallest([-1,2,3], [0,1,4], 4);

    assert.deepEqual(kth_smallest_array, [-1, 0, 1, 2]);
  });


  it('works if k is larger than s1.len + s2.len', function(){
    var kth_smallest_array = kth_smallest([-1,0,2], [0], 6);

    assert.deepEqual(kth_smallest_array, [-1, 0, 0, 2]);
  });
});
