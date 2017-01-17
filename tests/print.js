var chai = require('chai');
var expect = chai.expect; 
var print = require('../src/print');

describe('print', function() {
      it('print() should return string that contains \'demo package\'', function() {
          var text = print();
          expect(text).to.have.string('demo package');
      });
});
