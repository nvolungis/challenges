var assert = require('assert'),
    lcs    = require('../longest_common_subsequence.js');

describe('Longest Common Subsequence', function(){
  it('returns the LCS', function(){
    var result = lcs('ABAZDCF', 'BACBADF');

    assert.equal(result[0], 5);
    assert.equal(result[1],'ABADF');
  });
});
