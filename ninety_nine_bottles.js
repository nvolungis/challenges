"use strict";

(function(){
  function ninety_nine_bottles(){

    var first_words  = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'].reverse(),
        second_words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'].reverse(),
        teen_words   = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'].reverse(),
        suffix       = ' of beer on the wall';

     first_words.forEach(function(f_word){
       second_words.forEach(function(s_word){
         console.log(f_word + '-' + s_word + ' bottles', suffix); 
       });
       console.log(f_word + ' bottles', suffix);
     });

     teen_words.forEach(function(word){
       console.log(word + ' bottles', suffix);
     });

     second_words.forEach(function(word, index){
       if(index == 8){
         console.log(word + ' bottle' + suffix);
       }else{
         console.log(word + ' bottles' + suffix);
       }
     });
  }
  
  module.exports = ninety_nine_bottles;
}).call(this);
