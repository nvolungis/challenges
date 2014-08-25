"use strict";

(function(){
  function lcs(s1, s2){
    var memo;

    s1 = s1.split('');
    s2 = s2.split('');

    s1.unshift(null);
    s2.unshift(null);
    memo = build_memo(s1, s2);

    function LCS(i, j){
      var k, l, result;
      if(!!memo[i][j]) return memo[i][j];

      if(i == 0 || j == 0){
        result = 0;
      }else if(s1[i] == s2[j]){
        result = 1 + LCS(i - 1, j - 1);
      }else{
        k = LCS(i-1, j);
        l = LCS(i, j-1);
        result = k > l ? k : l;
      }

      memo[i][j] = result;
      return result;
    }


    function build_memo(s1, s2){
      var l1 = s1.length,
          l2 = s2.length,
          i,j, memo = [];

      for(i=0; i<l1; i++){
        memo[i] = []; 
        for(j=0; j<l2; j++){
          memo[i].push(null);
        }
      }

      return memo;
    }

    function get_sequence(){
      var i = memo.length - 1, 
          j = memo[0].length - 1,
          sequence = [];

      while(i > 0 && j > 0){
        if(memo[i][j] == memo[i-1][j]){
          i--;
        }else if(memo[i][j] == memo[i][j-1]){
          j--;
        }else{
          sequence.push(s1[i]);
          i--;
          j--;
        }
      }

      return sequence.reverse().join('');
    }

    return [LCS(s1.length - 1, s2.length - 1), get_sequence()];;
  }

  module.exports = lcs;
}).call(this);
