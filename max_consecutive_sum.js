"use strict";

(function(){
  function max_consecutive_sum(arr){
    var si=0, ei=0, msi=0, mei=0, i=0, len = arr.length, cur_sum = 0, max_sum = 0, result = [];

    for(i=0; i<len; i++){

      if(i === 0){
        cur_sum = max_sum = arr[i]; 
        continue;
      }

      ei = i;

      if(cur_sum + arr[i] < arr[i]){
        si = i;
        cur_sum = arr[i];
      }else{
        cur_sum += arr[i];
      } 

      if(cur_sum > max_sum){
        msi = si;
        mei = ei;
        max_sum = cur_sum;
      }
    }

    if(msi === mei){
      result.push(arr[msi]);
    }else{
      for(i=msi; i<=mei; i++){
        result.push(arr[i]);       
      }
    }

    return result;
  }
  
  module.exports = max_consecutive_sum;;
}).call(this);
