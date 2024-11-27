const assert = require('assert')
const { When, Then } = require('@cucumber/cucumber')
const { getLatinCharacterList, encode, decode } = require('../../script.js')

When('I input {string}', function (string) {
    this.result = getLatinCharacterList(string);
  });

Then('I receive a list', function () {
    assert.equal(typeof(this.result), typeof([]));
  });

When('I encode {string}', function (string) {
    this.result = encode(string);
  });

Then('I get {string}', function (string) {
    assert.equal(this.result, string );
  });