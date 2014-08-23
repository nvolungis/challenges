"use strict";

(function(){
  function custom_logger(){
    var args = Array.prototype.slice.call(arguments);

    args.unshift("DEBUG:");

    console.log.apply(console, args);
  }
  
  module.exports = custom_logger;
}).call(this);
