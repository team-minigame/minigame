
function getLowestYear(a, b) {
	var output = a;

	if(a > b){
		output = b;
	}

	return output;
}

function getTotalScore(array) {
	var sum = 0;

	function add(a, b) {
	    return a + b;
	}

	var sum = array.reduce(add, 0);

	return sum;
}

function isEven(num) {
	if (num%2 !== 0) return false;
	return true;
}		

module.exports.getLowestYear = getLowestYear;
module.exports.getTotalScore = getTotalScore;
module.exports.isEven = isEven;
