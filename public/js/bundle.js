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

  //Get element

  const preObject = document.getElementById('object');

  // Create refrences

  const dbRefObject = firebase.database().ref().child('object');

  // Sync object changes

  //dbRefObject.on('value', snap => {
    //preObject.innerText = JSON.stringify(snap.val(), null, 3);
  //});

  //var bigOne = document.getElementById('bigOne');
  //var dbRef = firebase.database().ref().child('text');
  //dbRef.on('value', snap => bigOne.innerText = snap.val());

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
console.log(modules.getEvenTests(2, 76, 77));





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

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvYXBwL2NvbnRyb2xsZXJzLmpzIiwicHVibGljL2FwcC9tYWluLmpzIiwicHVibGljL2FwcC9tb2R1bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb250cm9sbGVyKCdteUN0cmwnLCBbXCIkc2NvcGVcIiwgXCIkZmlyZWJhc2VPYmplY3RcIiwgXCIkZmlyZWJhc2VBcnJheVwiLCBmdW5jdGlvbigkc2NvcGUsICRmaXJlYmFzZU9iamVjdCwgJGZpcmViYXNlQXJyYXkpIHtcblxuLy8gYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbnRyb2xsZXIoJ215Q3RybCcsIFtcIiRzY29wZVwiLCBcIiRmaXJlYmFzZU9iamVjdFwiLCBcIiRmaXJlYmFzZUFycmF5XCIsIGZ1bmN0aW9uKCRzY29wZSwgJGZpcmViYXNlT2JqZWN0LCAkZmlyZWJhc2VBcnJheSkge1xuXG4vLyBhcHAuY29udHJvbGxlcignbXlDdHJsJywgW1wiJHNjb3BlXCIsIFwiJGZpcmViYXNlT2JqZWN0XCIsIFwiJGZpcmViYXNlQXJyYXlcIiwgZnVuY3Rpb24oJHNjb3BlLCAkZmlyZWJhc2VPYmplY3QsICRmaXJlYmFzZUFycmF5KSB7XG4gXG5cbiAgdmFyIHJlZiA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCk7XG4gIHZhciBmaXJlYmFzZU9iamVjdCA9ICRmaXJlYmFzZU9iamVjdChyZWYpO1xuXG4gICRzY29wZS5ldmVudHMgPSAkZmlyZWJhc2VBcnJheShyZWYpO1xuXG4vKlxuIGZ1bmN0aW9uIG15RnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBhICogYjtcbiAgfVxuXG4gIHZhciB4ID0gbXlGdW5jdGlvbig0LCAzKTsgXG5cbiAgY29uc29sZS5sb2coeCk7XG4qL1xuXG4gICRzY29wZS5hZGQgPSBmdW5jdGlvbigpIHtcblxuICAgICRzY29wZS5ldmVudHMuJGFkZCh7XG4gICAgICAnbmFtZSc6ICRzY29wZS5ldmVudC5uYW1lLFxuICAgICAgJ3llYXInOiAkc2NvcGUuZXZlbnQueWVhcixcbiAgICBcbiAgICB9KS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuXG4gICAgfSk7XG4gICBcbiAgfTtcblxuICAvL2ZpcmViYXNlT2JqZWN0LiRiaW5kVG8oJHNjb3BlLFwiZXZlbnRcIik7XG4gIC8vY29uc3Qgcm9vdFJlZiA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCkuY2hpbGQoJ2FuZ3VsYXInKTtcbiAgLy9jb25zdCByZWYgPSByb290UmVmLmNoaWxkKCdvYmplY3QnKTtcbiAgLy90aGlzLm9iamVjdCA9ICRmaXJlYmFzZU9iamVjdChyZWYpO1xuXG59XSk7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gcmVxdWlyZSBhbmd1bGFyXG4vLyB2YXIgY29udHJvbGxlcnMgPSByZXF1aXJlKCdjb250cm9sbGVycy5qcycpO1xuXG52YXIgbW9kdWxlcyA9IHJlcXVpcmUoJy4vbW9kdWxlcycpOyAvLyBnZXQgZnVuY3Rpb25zXG5cbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgWyduZ1JvdXRlJywgJ2ZpcmViYXNlJ10pO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBJbml0aWFsaXplIEZpcmViYXNlXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgdmFyIGNvbmZpZyA9IHtcbiAgICBhcGlLZXk6IFwiQUl6YVN5QTRaWE9JM2RSRS1vQzVjM3F5enFwLTk1clI3elIzRmd3XCIsXG4gICAgYXV0aERvbWFpbjogXCJnYW1lLXByb2plY3QtNjIyMjUuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9nYW1lLXByb2plY3QtNjIyMjUuZmlyZWJhc2Vpby5jb21cIixcbiAgICBzdG9yYWdlQnVja2V0OiBcImdhbWUtcHJvamVjdC02MjIyNS5hcHBzcG90LmNvbVwiLFxuICB9O1xuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XG5cbiAgZnVuY3Rpb24gQXBwbGlrYXRpb25Db25maWcoJHJvdXRlUHJvdmlkZXIpIHtcbiAgICAkcm91dGVQcm92aWRlci53aGVuKCcvJywge1xuICAgICAgY29udHJvbGxlcjogJ215Q3RybCcsXG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL215Y3RybC5odG1sJyxcbiAgICB9KVxuICB9O1xuXG4gIC8vR2V0IGVsZW1lbnRcblxuICBjb25zdCBwcmVPYmplY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb2JqZWN0Jyk7XG5cbiAgLy8gQ3JlYXRlIHJlZnJlbmNlc1xuXG4gIGNvbnN0IGRiUmVmT2JqZWN0ID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoKS5jaGlsZCgnb2JqZWN0Jyk7XG5cbiAgLy8gU3luYyBvYmplY3QgY2hhbmdlc1xuXG4gIC8vZGJSZWZPYmplY3Qub24oJ3ZhbHVlJywgc25hcCA9PiB7XG4gICAgLy9wcmVPYmplY3QuaW5uZXJUZXh0ID0gSlNPTi5zdHJpbmdpZnkoc25hcC52YWwoKSwgbnVsbCwgMyk7XG4gIC8vfSk7XG5cbiAgLy92YXIgYmlnT25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JpZ09uZScpO1xuICAvL3ZhciBkYlJlZiA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCkuY2hpbGQoJ3RleHQnKTtcbiAgLy9kYlJlZi5vbigndmFsdWUnLCBzbmFwID0+IGJpZ09uZS5pbm5lclRleHQgPSBzbmFwLnZhbCgpKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogQW5ndWxhciBDb250cm9sbGVyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbnJlcXVpcmUoJy4vY29udHJvbGxlcnMuanMnKTtcblxuLypcbmFwcC5jb250cm9sbGVyKCdteUN0cmwnLCBbXCIkc2NvcGVcIiwgXCIkZmlyZWJhc2VPYmplY3RcIiwgXCIkZmlyZWJhc2VBcnJheVwiLCBmdW5jdGlvbigkc2NvcGUsICRmaXJlYmFzZU9iamVjdCwgJGZpcmViYXNlQXJyYXkpIHtcblxuICB2YXIgcmVmID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoKTtcbiAgdmFyIGZpcmViYXNlT2JqZWN0ID0gJGZpcmViYXNlT2JqZWN0KHJlZik7XG5cbiAgJHNjb3BlLmV2ZW50cyA9ICRmaXJlYmFzZUFycmF5KHJlZik7XG5cbiAgJHNjb3BlLmFkZCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vZXZlbnQuaWQgPSBldmVudHMubGVuZ3RoICsgMTtcbiAgICAkc2NvcGUuZXZlbnRzLiRhZGQoJHNjb3BlLndoYXQpO1xuICB9XG5cbiAgLy9maXJlYmFzZU9iamVjdC4kYmluZFRvKCRzY29wZSxcImV2ZW50XCIpO1xuICAvL2NvbnN0IHJvb3RSZWYgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZigpLmNoaWxkKCdhbmd1bGFyJyk7XG4gIC8vY29uc3QgcmVmID0gcm9vdFJlZi5jaGlsZCgnb2JqZWN0Jyk7XG4gIC8vdGhpcy5vYmplY3QgPSAkZmlyZWJhc2VPYmplY3QocmVmKTtcblxufV0pO1xuKi9cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogQW5ndWxhciBSb3V0aW5nXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogVGVtcFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vL3ZhciBvdXRwdXQgPSBtb2R1bGVzLmdldExvd2VzdFllYXIoMjAwMSwgMTk4NCk7XG5jb25zb2xlLmxvZyhtb2R1bGVzLmdldExvd2VzdFllYXIoMjAwMSwgMTk4NCkpO1xuY29uc29sZS5sb2cobW9kdWxlcy5nZXRFdmVuVGVzdHMoMiwgNzYsIDc3KSk7XG5cblxuXG5cbiIsIlxuZnVuY3Rpb24gZ2V0TG93ZXN0WWVhcihhLCBiKSB7XG5cdHZhciBvdXRwdXQgPSBhO1xuXG5cdGlmKGEgPiBiKXtcblx0XHRvdXRwdXQgPSBiO1xuXHR9XG5cblx0cmV0dXJuIG91dHB1dDtcbn1cblxuZnVuY3Rpb24gZ2V0VG90YWxTY29yZShhcnJheSkge1xuXHR2YXIgc3VtID0gMDtcblxuXHRmdW5jdGlvbiBhZGQoYSwgYikge1xuXHQgICAgcmV0dXJuIGEgKyBiO1xuXHR9XG5cblx0dmFyIHN1bSA9IGFycmF5LnJlZHVjZShhZGQsIDApO1xuXG5cdHJldHVybiBzdW07XG59XG5cblx0ZnVuY3Rpb24gaXNFdmVuKG51bSkge1xuXHRpZiAobnVtJTIgIT09IDApIHJldHVybiBmYWxzZTtcblx0cmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzLmdldExvd2VzdFllYXIgPSBnZXRMb3dlc3RZZWFyO1xubW9kdWxlLmV4cG9ydHMuZ2V0VG90YWxTY29yZSA9IGdldFRvdGFsU2NvcmU7XG4iXX0=
