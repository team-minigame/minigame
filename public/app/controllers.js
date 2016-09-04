'use strict';

app.controller('myCtrl', function($scope, $firebaseObject, $firebaseArray) {

	var ref = firebase.database().ref();
	var firebaseObject = $firebaseObject(ref);

	$scope.events = $firebaseArray(ref);
	$scope.add = function() {
		$scope.events.$add($scope.what);
	}

	//firebaseObject.$bindTo($scope,"event");
	//const rootRef = firebase.database().ref().child('angular');
	//const ref = rootRef.child('object');
	//this.object = $firebaseObject(ref);

});






