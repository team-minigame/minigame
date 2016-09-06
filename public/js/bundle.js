(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

module.exports = angular.module('app').controller('myCtrl', ["$scope", "$firebaseObject", "$firebaseArray", function($scope, $firebaseObject, $firebaseArray) {

// angular.module('app').controller('myCtrl', ["$scope", "$firebaseObject", "$firebaseArray", function($scope, $firebaseObject, $firebaseArray) {

// app.controller('myCtrl', ["$scope", "$firebaseObject", "$firebaseArray", function($scope, $firebaseObject, $firebaseArray) {
 

  var ref = firebase.database().ref();
  var firebaseObject = $firebaseObject(ref);

  $scope.events = $firebaseArray(ref);
    $scope.name = "abc";
    console.log($scope.name);
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
},{"./controllers.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvYXBwL2NvbnRyb2xsZXJzLmpzIiwicHVibGljL2FwcC9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbnRyb2xsZXIoJ215Q3RybCcsIFtcIiRzY29wZVwiLCBcIiRmaXJlYmFzZU9iamVjdFwiLCBcIiRmaXJlYmFzZUFycmF5XCIsIGZ1bmN0aW9uKCRzY29wZSwgJGZpcmViYXNlT2JqZWN0LCAkZmlyZWJhc2VBcnJheSkge1xuXG4vLyBhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29udHJvbGxlcignbXlDdHJsJywgW1wiJHNjb3BlXCIsIFwiJGZpcmViYXNlT2JqZWN0XCIsIFwiJGZpcmViYXNlQXJyYXlcIiwgZnVuY3Rpb24oJHNjb3BlLCAkZmlyZWJhc2VPYmplY3QsICRmaXJlYmFzZUFycmF5KSB7XG5cbi8vIGFwcC5jb250cm9sbGVyKCdteUN0cmwnLCBbXCIkc2NvcGVcIiwgXCIkZmlyZWJhc2VPYmplY3RcIiwgXCIkZmlyZWJhc2VBcnJheVwiLCBmdW5jdGlvbigkc2NvcGUsICRmaXJlYmFzZU9iamVjdCwgJGZpcmViYXNlQXJyYXkpIHtcbiBcblxuICB2YXIgcmVmID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoKTtcbiAgdmFyIGZpcmViYXNlT2JqZWN0ID0gJGZpcmViYXNlT2JqZWN0KHJlZik7XG5cbiAgJHNjb3BlLmV2ZW50cyA9ICRmaXJlYmFzZUFycmF5KHJlZik7XG4gICAgJHNjb3BlLm5hbWUgPSBcImFiY1wiO1xuICAgIGNvbnNvbGUubG9nKCRzY29wZS5uYW1lKTtcbi8qXG4gZnVuY3Rpb24gbXlGdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGEgKiBiO1xuICB9XG5cbiAgdmFyIHggPSBteUZ1bmN0aW9uKDQsIDMpOyBcblxuICBjb25zb2xlLmxvZyh4KTtcbiovXG5cbiAgJHNjb3BlLmFkZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgJHNjb3BlLmV2ZW50cy4kYWRkKHtcbiAgICAgICduYW1lJzogJHNjb3BlLmV2ZW50Lm5hbWUsXG4gICAgICAneWVhcic6ICRzY29wZS5ldmVudC55ZWFyLFxuICAgIFxuICAgIH0pLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG5cbiAgICB9KTtcbiAgIFxuICB9O1xuXG4gIC8vZmlyZWJhc2VPYmplY3QuJGJpbmRUbygkc2NvcGUsXCJldmVudFwiKTtcbiAgLy9jb25zdCByb290UmVmID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoKS5jaGlsZCgnYW5ndWxhcicpO1xuICAvL2NvbnN0IHJlZiA9IHJvb3RSZWYuY2hpbGQoJ29iamVjdCcpO1xuICAvL3RoaXMub2JqZWN0ID0gJGZpcmViYXNlT2JqZWN0KHJlZik7XG5cbn1dKTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyByZXF1aXJlIGFuZ3VsYXJcbi8vIHZhciBjb250cm9sbGVycyA9IHJlcXVpcmUoJ2NvbnRyb2xsZXJzLmpzJyk7XG5cbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgWyduZ1JvdXRlJywgJ2ZpcmViYXNlJ10pO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBJbml0aWFsaXplIEZpcmViYXNlXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgdmFyIGNvbmZpZyA9IHtcbiAgICBhcGlLZXk6IFwiQUl6YVN5QTRaWE9JM2RSRS1vQzVjM3F5enFwLTk1clI3elIzRmd3XCIsXG4gICAgYXV0aERvbWFpbjogXCJnYW1lLXByb2plY3QtNjIyMjUuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9nYW1lLXByb2plY3QtNjIyMjUuZmlyZWJhc2Vpby5jb21cIixcbiAgICBzdG9yYWdlQnVja2V0OiBcImdhbWUtcHJvamVjdC02MjIyNS5hcHBzcG90LmNvbVwiLFxuICB9O1xuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XG5cbiAgZnVuY3Rpb24gQXBwbGlrYXRpb25Db25maWcoJHJvdXRlUHJvdmlkZXIpIHtcbiAgICAkcm91dGVQcm92aWRlci53aGVuKCcvJywge1xuICAgICAgY29udHJvbGxlcjogJ215Q3RybCcsXG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL215Y3RybC5odG1sJyxcbiAgICB9KVxuICB9O1xuXG4gIC8vR2V0IGVsZW1lbnRcblxuICBjb25zdCBwcmVPYmplY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb2JqZWN0Jyk7XG5cbiAgLy8gQ3JlYXRlIHJlZnJlbmNlc1xuXG4gIGNvbnN0IGRiUmVmT2JqZWN0ID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoKS5jaGlsZCgnb2JqZWN0Jyk7XG5cbiAgLy8gU3luYyBvYmplY3QgY2hhbmdlc1xuXG4gIC8vZGJSZWZPYmplY3Qub24oJ3ZhbHVlJywgc25hcCA9PiB7XG4gICAgLy9wcmVPYmplY3QuaW5uZXJUZXh0ID0gSlNPTi5zdHJpbmdpZnkoc25hcC52YWwoKSwgbnVsbCwgMyk7XG4gIC8vfSk7XG5cbiAgLy92YXIgYmlnT25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JpZ09uZScpO1xuICAvL3ZhciBkYlJlZiA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCkuY2hpbGQoJ3RleHQnKTtcbiAgLy9kYlJlZi5vbigndmFsdWUnLCBzbmFwID0+IGJpZ09uZS5pbm5lclRleHQgPSBzbmFwLnZhbCgpKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogQW5ndWxhciBDb250cm9sbGVyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbnJlcXVpcmUoJy4vY29udHJvbGxlcnMuanMnKTtcblxuXG4vKlxuYXBwLmNvbnRyb2xsZXIoJ215Q3RybCcsIFtcIiRzY29wZVwiLCBcIiRmaXJlYmFzZU9iamVjdFwiLCBcIiRmaXJlYmFzZUFycmF5XCIsIGZ1bmN0aW9uKCRzY29wZSwgJGZpcmViYXNlT2JqZWN0LCAkZmlyZWJhc2VBcnJheSkge1xuXG4gIHZhciByZWYgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZigpO1xuICB2YXIgZmlyZWJhc2VPYmplY3QgPSAkZmlyZWJhc2VPYmplY3QocmVmKTtcblxuICAkc2NvcGUuZXZlbnRzID0gJGZpcmViYXNlQXJyYXkocmVmKTtcblxuICAkc2NvcGUuYWRkID0gZnVuY3Rpb24oKSB7XG4gICAgLy9ldmVudC5pZCA9IGV2ZW50cy5sZW5ndGggKyAxO1xuICAgICRzY29wZS5ldmVudHMuJGFkZCgkc2NvcGUud2hhdCk7XG4gIH1cblxuICAvL2ZpcmViYXNlT2JqZWN0LiRiaW5kVG8oJHNjb3BlLFwiZXZlbnRcIik7XG4gIC8vY29uc3Qgcm9vdFJlZiA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCkuY2hpbGQoJ2FuZ3VsYXInKTtcbiAgLy9jb25zdCByZWYgPSByb290UmVmLmNoaWxkKCdvYmplY3QnKTtcbiAgLy90aGlzLm9iamVjdCA9ICRmaXJlYmFzZU9iamVjdChyZWYpO1xuXG59XSk7XG4qLyJdfQ==
