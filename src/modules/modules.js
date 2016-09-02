exports.simplifyString = function(inputString) {

	inputString = inputString.replace(/å/g, 'a');
	inputString = inputString.replace(/ä/g, 'a');
	inputString = inputString.replace(/ö/g, 'o');

 	inputString = inputString.toLowerCase();

	var output = inputString;

	return output;
}