var assert        = require('assert'),
    sinon         = require('sinon'),
    custom_logger = require('../custom_logger.js');

describe("Custom Logger", function(){
  it('prepends call to console.log with DEBUG: string', function(){
    sinon.spy(console, 'log');

    custom_logger("hi","ho");

    assert.deepEqual(console.log.getCall(0).args, ["DEBUG:", "hi", "ho"]);
  });
});
