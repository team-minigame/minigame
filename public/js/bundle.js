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
    $scope.events.$add($scope.what);
  }

  //firebaseObject.$bindTo($scope,"event");
  //const rootRef = firebase.database().ref().child('angular');
  //const ref = rootRef.child('object');
  //this.object = $firebaseObject(ref);

}]);


},{}],2:[function(require,module,exports){
'use strict';

// require angular
// var controllers = require('controllers.js');

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
    $scope.events.$add($scope.what);
  }

  //firebaseObject.$bindTo($scope,"event");
  //const rootRef = firebase.database().ref().child('angular');
  //const ref = rootRef.child('object');
  //this.object = $firebaseObject(ref);

}]);
*/
},{"./controllers.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvYXBwL2NvbnRyb2xsZXJzLmpzIiwicHVibGljL2FwcC9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbnRyb2xsZXIoJ215Q3RybCcsIFtcIiRzY29wZVwiLCBcIiRmaXJlYmFzZU9iamVjdFwiLCBcIiRmaXJlYmFzZUFycmF5XCIsIGZ1bmN0aW9uKCRzY29wZSwgJGZpcmViYXNlT2JqZWN0LCAkZmlyZWJhc2VBcnJheSkge1xuXG4vLyBhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29udHJvbGxlcignbXlDdHJsJywgW1wiJHNjb3BlXCIsIFwiJGZpcmViYXNlT2JqZWN0XCIsIFwiJGZpcmViYXNlQXJyYXlcIiwgZnVuY3Rpb24oJHNjb3BlLCAkZmlyZWJhc2VPYmplY3QsICRmaXJlYmFzZUFycmF5KSB7XG5cbi8vIGFwcC5jb250cm9sbGVyKCdteUN0cmwnLCBbXCIkc2NvcGVcIiwgXCIkZmlyZWJhc2VPYmplY3RcIiwgXCIkZmlyZWJhc2VBcnJheVwiLCBmdW5jdGlvbigkc2NvcGUsICRmaXJlYmFzZU9iamVjdCwgJGZpcmViYXNlQXJyYXkpIHtcblxuICB2YXIgcmVmID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoKTtcbiAgdmFyIGZpcmViYXNlT2JqZWN0ID0gJGZpcmViYXNlT2JqZWN0KHJlZik7XG5cbiAgJHNjb3BlLmV2ZW50cyA9ICRmaXJlYmFzZUFycmF5KHJlZik7XG4vKlxuIGZ1bmN0aW9uIG15RnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBhICogYjtcbiAgfVxuXG4gIHZhciB4ID0gbXlGdW5jdGlvbig0LCAzKTsgXG5cbiAgY29uc29sZS5sb2coeCk7XG4qL1xuXG4gICRzY29wZS5hZGQgPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUuZXZlbnRzLiRhZGQoJHNjb3BlLndoYXQpO1xuICB9XG5cbiAgLy9maXJlYmFzZU9iamVjdC4kYmluZFRvKCRzY29wZSxcImV2ZW50XCIpO1xuICAvL2NvbnN0IHJvb3RSZWYgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZigpLmNoaWxkKCdhbmd1bGFyJyk7XG4gIC8vY29uc3QgcmVmID0gcm9vdFJlZi5jaGlsZCgnb2JqZWN0Jyk7XG4gIC8vdGhpcy5vYmplY3QgPSAkZmlyZWJhc2VPYmplY3QocmVmKTtcblxufV0pO1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIHJlcXVpcmUgYW5ndWxhclxuLy8gdmFyIGNvbnRyb2xsZXJzID0gcmVxdWlyZSgnY29udHJvbGxlcnMuanMnKTtcblxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ25nUm91dGUnLCAnZmlyZWJhc2UnXSk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIEluaXRpYWxpemUgRmlyZWJhc2Vcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICB2YXIgY29uZmlnID0ge1xuICAgIGFwaUtleTogXCJBSXphU3lBNFpYT0kzZFJFLW9DNWMzcXl6cXAtOTVyUjd6UjNGZ3dcIixcbiAgICBhdXRoRG9tYWluOiBcImdhbWUtcHJvamVjdC02MjIyNS5maXJlYmFzZWFwcC5jb21cIixcbiAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL2dhbWUtcHJvamVjdC02MjIyNS5maXJlYmFzZWlvLmNvbVwiLFxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwiZ2FtZS1wcm9qZWN0LTYyMjI1LmFwcHNwb3QuY29tXCIsXG4gIH07XG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcblxuICBmdW5jdGlvbiBBcHBsaWthdGlvbkNvbmZpZygkcm91dGVQcm92aWRlcikge1xuICAgICRyb3V0ZVByb3ZpZGVyLndoZW4oJy8nLCB7XG4gICAgICBjb250cm9sbGVyOiAnbXlDdHJsJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvbXljdHJsLmh0bWwnLFxuICAgIH0pXG4gIH07XG5cbiAgLy9HZXQgZWxlbWVudFxuXG4gIGNvbnN0IHByZU9iamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvYmplY3QnKTtcblxuICAvLyBDcmVhdGUgcmVmcmVuY2VzXG5cbiAgY29uc3QgZGJSZWZPYmplY3QgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZigpLmNoaWxkKCdvYmplY3QnKTtcblxuICAvLyBTeW5jIG9iamVjdCBjaGFuZ2VzXG5cbiAgLy9kYlJlZk9iamVjdC5vbigndmFsdWUnLCBzbmFwID0+IHtcbiAgICAvL3ByZU9iamVjdC5pbm5lclRleHQgPSBKU09OLnN0cmluZ2lmeShzbmFwLnZhbCgpLCBudWxsLCAzKTtcbiAgLy99KTtcblxuICAvL3ZhciBiaWdPbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmlnT25lJyk7XG4gIC8vdmFyIGRiUmVmID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoKS5jaGlsZCgndGV4dCcpO1xuICAvL2RiUmVmLm9uKCd2YWx1ZScsIHNuYXAgPT4gYmlnT25lLmlubmVyVGV4dCA9IHNuYXAudmFsKCkpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBBbmd1bGFyIENvbnRyb2xsZXJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxucmVxdWlyZSgnLi9jb250cm9sbGVycy5qcycpO1xuXG5cbi8qXG5hcHAuY29udHJvbGxlcignbXlDdHJsJywgW1wiJHNjb3BlXCIsIFwiJGZpcmViYXNlT2JqZWN0XCIsIFwiJGZpcmViYXNlQXJyYXlcIiwgZnVuY3Rpb24oJHNjb3BlLCAkZmlyZWJhc2VPYmplY3QsICRmaXJlYmFzZUFycmF5KSB7XG5cbiAgdmFyIHJlZiA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCk7XG4gIHZhciBmaXJlYmFzZU9iamVjdCA9ICRmaXJlYmFzZU9iamVjdChyZWYpO1xuXG4gICRzY29wZS5ldmVudHMgPSAkZmlyZWJhc2VBcnJheShyZWYpO1xuXG4gICRzY29wZS5hZGQgPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUuZXZlbnRzLiRhZGQoJHNjb3BlLndoYXQpO1xuICB9XG5cbiAgLy9maXJlYmFzZU9iamVjdC4kYmluZFRvKCRzY29wZSxcImV2ZW50XCIpO1xuICAvL2NvbnN0IHJvb3RSZWYgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZigpLmNoaWxkKCdhbmd1bGFyJyk7XG4gIC8vY29uc3QgcmVmID0gcm9vdFJlZi5jaGlsZCgnb2JqZWN0Jyk7XG4gIC8vdGhpcy5vYmplY3QgPSAkZmlyZWJhc2VPYmplY3QocmVmKTtcblxufV0pO1xuKi8iXX0=
