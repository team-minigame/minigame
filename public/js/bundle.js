(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

module.exports = angular.module('app').controller('myCtrl', ["$scope", "$firebaseObject", "$firebaseArray", function($scope, $firebaseObject, $firebaseArray) {

// angular.module('app').controller('myCtrl', ["$scope", "$firebaseObject", "$firebaseArray", function($scope, $firebaseObject, $firebaseArray) {

// app.controller('myCtrl', ["$scope", "$firebaseObject", "$firebaseArray", function($scope, $firebaseObject, $firebaseArray) {
 

  var ref = firebase.database().ref();
  var firebaseObject = $firebaseObject(ref);

  $scope.events = $firebaseArray(ref);

/*
 function myFunction(a, b) {
    return a * b;
  }

  var x = myFunction(4, 3); 

  console.log(x);
*/

  $scope.add = function() {

    $scope.events.$add({
      'name': $scope.event.name,
      'year': $scope.event.year,
    
    }).then(function(data){

    });
   
  };

  //firebaseObject.$bindTo($scope,"event");
  //const rootRef = firebase.database().ref().child('angular');
  //const ref = rootRef.child('object');
  //this.object = $firebaseObject(ref);

}]);


},{}],2:[function(require,module,exports){
'use strict';

// require angular
// var controllers = require('controllers.js');

var modules = require('./modules'); // get functions

var app = angular.module('app', ['ngRoute', 'firebase']);

/***********************************/
/* Initialize Firebase
/***********************************/

  var config = {
    apiKey: "AIzaSyA4ZXOI3dRE-oC5c3qyzqp-95rR7zR3Fgw",
    authDomain: "game-project-62225.firebaseapp.com",
    databaseURL: "https://game-project-62225.firebaseio.com",
    storageBucket: "game-project-62225.appspot.com",
  };
  firebase.initializeApp(config);

  function ApplikationConfig($routeProvider) {
    $routeProvider.when('/', {
      controller: 'myCtrl',
      templateUrl: 'views/myctrl.html',
    })
  };

/***********************************/
/* Angular Controller
/***********************************/

require('./controllers.js');

/*
app.controller('myCtrl', ["$scope", "$firebaseObject", "$firebaseArray", function($scope, $firebaseObject, $firebaseArray) {

  var ref = firebase.database().ref();
  var firebaseObject = $firebaseObject(ref);

  $scope.events = $firebaseArray(ref);

  $scope.add = function() {
    //event.id = events.length + 1;
    $scope.events.$add($scope.what);
  }

  //firebaseObject.$bindTo($scope,"event");
  //const rootRef = firebase.database().ref().child('angular');
  //const ref = rootRef.child('object');
  //this.object = $firebaseObject(ref);

}]);
*/

/***********************************/
/* Angular Routing
/***********************************/


/***********************************/
/* Temp
/***********************************/

//var output = modules.getLowestYear(2001, 1984);
console.log(modules.getLowestYear(2001, 1984));
console.log(modules.isEven(2, 76, 77));





},{"./controllers.js":1,"./modules":3}],3:[function(require,module,exports){

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

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvYXBwL2NvbnRyb2xsZXJzLmpzIiwicHVibGljL2FwcC9tYWluLmpzIiwicHVibGljL2FwcC9tb2R1bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbnRyb2xsZXIoJ215Q3RybCcsIFtcIiRzY29wZVwiLCBcIiRmaXJlYmFzZU9iamVjdFwiLCBcIiRmaXJlYmFzZUFycmF5XCIsIGZ1bmN0aW9uKCRzY29wZSwgJGZpcmViYXNlT2JqZWN0LCAkZmlyZWJhc2VBcnJheSkge1xuXG4vLyBhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29udHJvbGxlcignbXlDdHJsJywgW1wiJHNjb3BlXCIsIFwiJGZpcmViYXNlT2JqZWN0XCIsIFwiJGZpcmViYXNlQXJyYXlcIiwgZnVuY3Rpb24oJHNjb3BlLCAkZmlyZWJhc2VPYmplY3QsICRmaXJlYmFzZUFycmF5KSB7XG5cbi8vIGFwcC5jb250cm9sbGVyKCdteUN0cmwnLCBbXCIkc2NvcGVcIiwgXCIkZmlyZWJhc2VPYmplY3RcIiwgXCIkZmlyZWJhc2VBcnJheVwiLCBmdW5jdGlvbigkc2NvcGUsICRmaXJlYmFzZU9iamVjdCwgJGZpcmViYXNlQXJyYXkpIHtcbiBcblxuICB2YXIgcmVmID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoKTtcbiAgdmFyIGZpcmViYXNlT2JqZWN0ID0gJGZpcmViYXNlT2JqZWN0KHJlZik7XG5cbiAgJHNjb3BlLmV2ZW50cyA9ICRmaXJlYmFzZUFycmF5KHJlZik7XG5cbi8qXG4gZnVuY3Rpb24gbXlGdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGEgKiBiO1xuICB9XG5cbiAgdmFyIHggPSBteUZ1bmN0aW9uKDQsIDMpOyBcblxuICBjb25zb2xlLmxvZyh4KTtcbiovXG5cbiAgJHNjb3BlLmFkZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgJHNjb3BlLmV2ZW50cy4kYWRkKHtcbiAgICAgICduYW1lJzogJHNjb3BlLmV2ZW50Lm5hbWUsXG4gICAgICAneWVhcic6ICRzY29wZS5ldmVudC55ZWFyLFxuICAgIFxuICAgIH0pLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG5cbiAgICB9KTtcbiAgIFxuICB9O1xuXG4gIC8vZmlyZWJhc2VPYmplY3QuJGJpbmRUbygkc2NvcGUsXCJldmVudFwiKTtcbiAgLy9jb25zdCByb290UmVmID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoKS5jaGlsZCgnYW5ndWxhcicpO1xuICAvL2NvbnN0IHJlZiA9IHJvb3RSZWYuY2hpbGQoJ29iamVjdCcpO1xuICAvL3RoaXMub2JqZWN0ID0gJGZpcmViYXNlT2JqZWN0KHJlZik7XG5cbn1dKTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyByZXF1aXJlIGFuZ3VsYXJcbi8vIHZhciBjb250cm9sbGVycyA9IHJlcXVpcmUoJ2NvbnRyb2xsZXJzLmpzJyk7XG5cbnZhciBtb2R1bGVzID0gcmVxdWlyZSgnLi9tb2R1bGVzJyk7IC8vIGdldCBmdW5jdGlvbnNcblxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ25nUm91dGUnLCAnZmlyZWJhc2UnXSk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIEluaXRpYWxpemUgRmlyZWJhc2Vcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICB2YXIgY29uZmlnID0ge1xuICAgIGFwaUtleTogXCJBSXphU3lBNFpYT0kzZFJFLW9DNWMzcXl6cXAtOTVyUjd6UjNGZ3dcIixcbiAgICBhdXRoRG9tYWluOiBcImdhbWUtcHJvamVjdC02MjIyNS5maXJlYmFzZWFwcC5jb21cIixcbiAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL2dhbWUtcHJvamVjdC02MjIyNS5maXJlYmFzZWlvLmNvbVwiLFxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwiZ2FtZS1wcm9qZWN0LTYyMjI1LmFwcHNwb3QuY29tXCIsXG4gIH07XG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcblxuICBmdW5jdGlvbiBBcHBsaWthdGlvbkNvbmZpZygkcm91dGVQcm92aWRlcikge1xuICAgICRyb3V0ZVByb3ZpZGVyLndoZW4oJy8nLCB7XG4gICAgICBjb250cm9sbGVyOiAnbXlDdHJsJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvbXljdHJsLmh0bWwnLFxuICAgIH0pXG4gIH07XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIEFuZ3VsYXIgQ29udHJvbGxlclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzLmpzJyk7XG5cbi8qXG5hcHAuY29udHJvbGxlcignbXlDdHJsJywgW1wiJHNjb3BlXCIsIFwiJGZpcmViYXNlT2JqZWN0XCIsIFwiJGZpcmViYXNlQXJyYXlcIiwgZnVuY3Rpb24oJHNjb3BlLCAkZmlyZWJhc2VPYmplY3QsICRmaXJlYmFzZUFycmF5KSB7XG5cbiAgdmFyIHJlZiA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCk7XG4gIHZhciBmaXJlYmFzZU9iamVjdCA9ICRmaXJlYmFzZU9iamVjdChyZWYpO1xuXG4gICRzY29wZS5ldmVudHMgPSAkZmlyZWJhc2VBcnJheShyZWYpO1xuXG4gICRzY29wZS5hZGQgPSBmdW5jdGlvbigpIHtcbiAgICAvL2V2ZW50LmlkID0gZXZlbnRzLmxlbmd0aCArIDE7XG4gICAgJHNjb3BlLmV2ZW50cy4kYWRkKCRzY29wZS53aGF0KTtcbiAgfVxuXG4gIC8vZmlyZWJhc2VPYmplY3QuJGJpbmRUbygkc2NvcGUsXCJldmVudFwiKTtcbiAgLy9jb25zdCByb290UmVmID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoKS5jaGlsZCgnYW5ndWxhcicpO1xuICAvL2NvbnN0IHJlZiA9IHJvb3RSZWYuY2hpbGQoJ29iamVjdCcpO1xuICAvL3RoaXMub2JqZWN0ID0gJGZpcmViYXNlT2JqZWN0KHJlZik7XG5cbn1dKTtcbiovXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIEFuZ3VsYXIgUm91dGluZ1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIFRlbXBcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy92YXIgb3V0cHV0ID0gbW9kdWxlcy5nZXRMb3dlc3RZZWFyKDIwMDEsIDE5ODQpO1xuY29uc29sZS5sb2cobW9kdWxlcy5nZXRMb3dlc3RZZWFyKDIwMDEsIDE5ODQpKTtcbmNvbnNvbGUubG9nKG1vZHVsZXMuaXNFdmVuKDIsIDc2LCA3NykpO1xuXG5cblxuXG4iLCJcbmZ1bmN0aW9uIGdldExvd2VzdFllYXIoYSwgYikge1xuXHR2YXIgb3V0cHV0ID0gYTtcblxuXHRpZihhID4gYil7XG5cdFx0b3V0cHV0ID0gYjtcblx0fVxuXG5cdHJldHVybiBvdXRwdXQ7XG59XG5cbmZ1bmN0aW9uIGdldFRvdGFsU2NvcmUoYXJyYXkpIHtcblx0dmFyIHN1bSA9IDA7XG5cblx0ZnVuY3Rpb24gYWRkKGEsIGIpIHtcblx0ICAgIHJldHVybiBhICsgYjtcblx0fVxuXG5cdHZhciBzdW0gPSBhcnJheS5yZWR1Y2UoYWRkLCAwKTtcblxuXHRyZXR1cm4gc3VtO1xufVxuXG5mdW5jdGlvbiBpc0V2ZW4obnVtKSB7XG5cdGlmIChudW0lMiAhPT0gMCkgcmV0dXJuIGZhbHNlO1xuXHRyZXR1cm4gdHJ1ZTtcbn1cdFx0XG5cbm1vZHVsZS5leHBvcnRzLmdldExvd2VzdFllYXIgPSBnZXRMb3dlc3RZZWFyO1xubW9kdWxlLmV4cG9ydHMuZ2V0VG90YWxTY29yZSA9IGdldFRvdGFsU2NvcmU7XG5tb2R1bGUuZXhwb3J0cy5pc0V2ZW4gPSBpc0V2ZW47XG4iXX0=
