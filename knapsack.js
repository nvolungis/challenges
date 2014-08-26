"use strict";

(function(){

  function knapsack(values, size){
    var memo, len;
    
    values.unshift(null);
    len = values.length;
    
    memo = Array.apply(null, new Array(len)).map(function(){
      return new Array();
    });


    function V(n, s){
      var k, l, result
      if(memo[n][s] != undefined) return memo[n][s];

      if(n == 0){
        result = 0;
      }else if( values[n].s > s ){
        result = V(n-1, s);
      }else {
         k = values[n].v + V(n-1, s - values[n].s);
         l = V(n-1, s);

        result = k > l ? k : l;
      }

      memo[n][s] = result;
      return result;
    }

    function get_items(){
      var n = memo.length - 1,
          s = memo[0].length - 1,
          items = [];

      while(s > 0 && n > 0){
        if(memo[n][s] == memo[n-1][s]){
          n--; 
        }else {
          items.push(values[n]);
          s -= values[n].s;
          n--;
        }
      }

      return items;
    }

    var max_value = V(len-1, size),
        items = get_items();

    return [items, max_value];
  }
  
  module.exports = knapsack;
}).call(this);
