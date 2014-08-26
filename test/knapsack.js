var assert   = require('assert'),
    knapsack = require('../knapsack.js');


describe('Knapsack Problem', function(){
  it('returns the best possible value', function(){
    var values = [
      {key: 'A', v:7,  s:3 },
      {key: 'B', v:9,  s:4 },
      {key: 'C', v:5,  s:2 },
      {key: 'D', v:12, s:6 },
      {key: 'E', v:14, s:7 },
      {key: 'F', v:6,  s:3 },
      {key: 'G', v:12, s:5 }
    ], max_val, items;

    max_val = knapsack(values, 15);
    assert.equal(max_val[1], 34);

    items = max_val[0].map(function(val){
      return val.key;
    });

    assert.deepEqual(items, ['G','F','B','A']);
  });
});
