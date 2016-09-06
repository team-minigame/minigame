var expect = require('chai').expect;
var assert = require('chai').assert;

var modules = require('../modules/modules.js');


describe('Backend: checkYear.', function() {

	var output = modules.checkYear(2001, 1984);

	it('Returns a number.', function(){
		assert.isNumber(output);
	});

	it('Number has four digits.', function(){
		assert.lengthOf(output.toString(), 4, 'year has length of 4');
	});

	it('year is later than 1800', function(){
		expect(output).to.be.at.least(1800);
	});
});

/*
describe('question is a string', function(){

	it('question is a string', function(){
		expect(question).to.be.a(string);
	});
});
*/
