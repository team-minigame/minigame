
module.exports = angular.module('app').controller('myCtrl', ["$scope", "$firebaseObject", "$firebaseArray", function($scope, $firebaseObject, $firebaseArray) {

  var ref = firebase.database().ref();
  var firebaseObject = $firebaseObject(ref);

  $scope.events = $firebaseArray(ref);

  $scope.total = "0";

  $scope.add = function() {

    $scope.events.$add({
      'name': $scope.event.name,
      'year': $scope.event.year,
    
    }).then(function(data){

    });
   
  };

  $scope.checkState = function(a, b, pushed, event) {
	 	if (b > a) {
	 		console.log($scope.total);
	 		console.log("A hände först!");
	 		console.log("a: " + a);
	 		console.log("b: " + b);
	 		console.log("pushed: " + pushed);
	 		if (a == pushed) {
	 			console.log("Correct answer!");
	 			$scope.total++;
	 			console.log("Total score: " + $scope.total);
	 		}
	 	} else {
	 		console.log("B hände först!");
	 		console.log("a: " + a);
	 		console.log("b: " + b);
	 		console.log("pushed: " + pushed);
	 		if (b == pushed) {
	 			console.log("Correct answer!");
	 			$scope.total++;
	 			console.log("Total score: " + $scope.total);
	 		}
		}
	}

}]);

