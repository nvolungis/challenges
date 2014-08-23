"use strict";

(function(){
  function kth_smallest(s1, s2, k){
    var i = 0, 
        j = 0,
        c = 0,
        r = [],
        len;

     len = s1.length + s2.length < k ? s1.length + s2.length : k;

     for(c; c < len; c++){
       if(s1[i] < s2[j]){
         r.push(s1[i]);
         i += 1;
       }else if(s2[j] < s1[i]){
         r.push(s2[j]);
         j += 1;
       }else if(s1[i] == s2[j]){
         r.push(s1[i]);
         i += 1;
       }else if(typeof s1[i] == 'undefined' && typeof s2[j] != 'undefined'){
         r.push(s2[j]);
         j += 1;
       }else if(typeof s2[j] == 'undefined' && typeof s1[i] != 'undefined'){
         r.push(s1[i]);
         i += 1;
       }
     }

     return r;
  }

  module.exports = kth_smallest;
}).call(this);
