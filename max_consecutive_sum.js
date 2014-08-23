"use strict";

(function(){
  function max_consecutive_sum(arr){
    var i=0, cur_sum = 0, max_sum = 0, len = arr.length; 

    for(i=0; i<len; i++){
      if(i === 0){
        cur_sum = max_sum = arr[i]; 
        continue;
      }

      if(cur_sum + arr[i] < arr[i]){
        cur_sum = arr[i];

      }else{
        cur_sum += arr[i];
      } 

      if(cur_sum > max_sum){
        max_sum = cur_sum;
      }
    }

    return max_sum;
  }
  
  module.exports = max_consecutive_sum;;
}).call(this);
