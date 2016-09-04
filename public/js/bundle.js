(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

app.controller('myCtrl', function($scope, dataService, $firebaseObject, $firebaseArray) {

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

	console.log("ping");
/* */

});







},{}],2:[function(require,module,exports){
'use strict';


},{}],3:[function(require,module,exports){
'use strict';

app.service('dataService', function($http) {

/* */

});



},{}]},{},[3,1,2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvYXBwL2NvbnRyb2xsZXJzLmpzIiwicHVibGljL2FwcC9kaXJlY3RpdmVzLmpzIiwicHVibGljL2FwcC9zZXJ2aWNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5hcHAuY29udHJvbGxlcignbXlDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCBkYXRhU2VydmljZSwgJGZpcmViYXNlT2JqZWN0LCAkZmlyZWJhc2VBcnJheSkge1xuXG5cdHZhciByZWYgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZigpO1xuXHR2YXIgZmlyZWJhc2VPYmplY3QgPSAkZmlyZWJhc2VPYmplY3QocmVmKTtcblxuXHQkc2NvcGUuZXZlbnRzID0gJGZpcmViYXNlQXJyYXkocmVmKTtcblx0JHNjb3BlLmFkZCA9IGZ1bmN0aW9uKCkge1xuXHRcdCRzY29wZS5ldmVudHMuJGFkZCgkc2NvcGUud2hhdCk7XG5cdH1cblxuXHQvL2ZpcmViYXNlT2JqZWN0LiRiaW5kVG8oJHNjb3BlLFwiZXZlbnRcIik7XG5cdC8vY29uc3Qgcm9vdFJlZiA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCkuY2hpbGQoJ2FuZ3VsYXInKTtcblx0Ly9jb25zdCByZWYgPSByb290UmVmLmNoaWxkKCdvYmplY3QnKTtcblx0Ly90aGlzLm9iamVjdCA9ICRmaXJlYmFzZU9iamVjdChyZWYpO1xuXG5cdGNvbnNvbGUubG9nKFwicGluZ1wiKTtcbi8qICovXG5cbn0pO1xuXG5cblxuXG5cblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbmFwcC5zZXJ2aWNlKCdkYXRhU2VydmljZScsIGZ1bmN0aW9uKCRodHRwKSB7XG5cbi8qICovXG5cbn0pO1xuXG5cbiJdfQ==
