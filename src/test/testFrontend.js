var expect = require('chai').expect;
var assert = require('chai').assert;

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


