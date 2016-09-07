var expect = require('chai').expect;
var assert = require('chai').assert;
var should = require('chai').should();


var modules = require('../../public/app/modules.js');

describe('Frontend: getLowestYear', function() {

	var output = modules.getLowestYear(2001, 1984);

	it('The year is a number', function(){
		assert.isNumber(output);
	});

	it('The year equals the lowest year', function(){
		expect(output).to.eql(1984);
	});

});

describe('Frontend: getTotalScore', function() {

	var scoreArray = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0]; 
	var output = modules.getTotalScore(scoreArray);

	it('The total score is a number', function(){
		assert.isNumber(output);
	});

	it('The total score is 12', function(){
		expect(output).to.eql(12);
	});

});

describe('Is Even Tests', function() {
});
	it('Should always return a boolean', function() {
  		expect(isEven(2)).to.be.a('boolean');
});
	it('Calling isEven(76) sould return true.', function() {
  		expect(isEven(76)).to.be.true;
});

	it('Calling isEven(77) sould return false.', function() {
  		expect(isEven(77)).to.be.false;
});

