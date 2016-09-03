'use strict';

app.controller('myCtrl', function($scope, dataService, $firebaseObject) {
	const rootRef = firebase.database().ref().child('angular');
	const ref = rootRef.child('object');
	this.object = $firebaseObject(ref);


/* */

});




