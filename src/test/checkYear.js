var expect = require('chai').expect;
var assert = require('chai').assert;

var modules = require('../modules/modules.js');


describe('Check that year is a number.', function() {

	it('Year is a num', function(){
		var output = modules.checkYear(2001, 1984);
		//expect(output).to.be.a(num);		
		assert.isNumber(output);
	});
/*
	it('has four digits', function(){
		var year = modules.checkYear(year);
		expect(output).to.have.length.of.at.least(4);
	});

	it('has four digits', function(){
		var year = modules.checkYear(year);
		expect(output).to.have.length.below(5);
	});
*/
	it('has four digits', function(){
		var year = modules.checkYear(year);
		expect(output).to.have.lengthOf(4);
	});

	it('year is later than 1800', function(){
		expect(output).to.be.at.least(1800);
	});
});


describe('question is a string', function(){

	it('question is a string', function(){
		expect(question).to.be.a(string);
	});
});
