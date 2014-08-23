var assert     = require('assert'),
    sinon      = require('sinon'),
    nn_bottles = require('../ninety_nine_bottles.js');


describe('Ninety Nine Bottles', function(){
  it('prints out all lines of 99 bottles song', function(){
    var song = nn_bottles();
  });
});
