var expect = require('chai').expect;
var assert = require('chai').assert;

var modules = require('../modules/modules.js');

describe('Test 1: Return string as split array.', function() {

	it('Output is a string', function(){
		var output = modules.simplifyString("Det här är en text med å ä ö.");
		expect(output).to.be.a('string');		
	});

	it('Output string has no char å', function(){
		var output = modules.simplifyString("Det här är en text med å ä ö.");
		expect(output).to.not.have.string('å');
	});

	it('Output string has no char ä', function(){
		var output = modules.simplifyString("Det här är en text med å ä ö.");
		expect(output).to.not.have.string('ä');
	});

	it('Output string has no char ö', function(){
		var output = modules.simplifyString("Det här är en text med å ä ö.");
		expect(output).to.not.have.string('ö');
	});

	it('Output string is lowercase', function(){
		var output = modules.simplifyString("Det här är en text med å ä ö.");
		expect(output).to.be.lowercase; // ??????????
	});

});

