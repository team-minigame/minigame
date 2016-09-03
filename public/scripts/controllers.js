'use strict';

app.controller('myCtrl', function($scope, dataService, $firebaseObject) {

	var ref = firebase.database().ref();
	var firebaseObject = $firebaseObject(ref);

	firebaseObject.$bindTo($scope,"event");
	//const rootRef = firebase.database().ref().child('angular');
	//const ref = rootRef.child('object');
	//this.object = $firebaseObject(ref);


/* */

});




