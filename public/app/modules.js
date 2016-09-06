
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

module.exports.getLowestYear = getLowestYear;
module.exports.getTotalScore = getTotalScore;
