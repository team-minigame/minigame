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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvYXBwL2NvbnRyb2xsZXJzLmpzIiwicHVibGljL2FwcC9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb250cm9sbGVyKCdteUN0cmwnLCBbXCIkc2NvcGVcIiwgXCIkZmlyZWJhc2VPYmplY3RcIiwgXCIkZmlyZWJhc2VBcnJheVwiLCBmdW5jdGlvbigkc2NvcGUsICRmaXJlYmFzZU9iamVjdCwgJGZpcmViYXNlQXJyYXkpIHtcblxuLy8gYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbnRyb2xsZXIoJ215Q3RybCcsIFtcIiRzY29wZVwiLCBcIiRmaXJlYmFzZU9iamVjdFwiLCBcIiRmaXJlYmFzZUFycmF5XCIsIGZ1bmN0aW9uKCRzY29wZSwgJGZpcmViYXNlT2JqZWN0LCAkZmlyZWJhc2VBcnJheSkge1xuXG4vLyBhcHAuY29udHJvbGxlcignbXlDdHJsJywgW1wiJHNjb3BlXCIsIFwiJGZpcmViYXNlT2JqZWN0XCIsIFwiJGZpcmViYXNlQXJyYXlcIiwgZnVuY3Rpb24oJHNjb3BlLCAkZmlyZWJhc2VPYmplY3QsICRmaXJlYmFzZUFycmF5KSB7XG4gXG5cbiAgdmFyIHJlZiA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCk7XG4gIHZhciBmaXJlYmFzZU9iamVjdCA9ICRmaXJlYmFzZU9iamVjdChyZWYpO1xuXG4gICRzY29wZS5ldmVudHMgPSAkZmlyZWJhc2VBcnJheShyZWYpO1xuXG4vKlxuIGZ1bmN0aW9uIG15RnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBhICogYjtcbiAgfVxuXG4gIHZhciB4ID0gbXlGdW5jdGlvbig0LCAzKTsgXG5cbiAgY29uc29sZS5sb2coeCk7XG4qL1xuXG4gICRzY29wZS5hZGQgPSBmdW5jdGlvbigpIHtcblxuICAgICRzY29wZS5ldmVudHMuJGFkZCh7XG4gICAgICAnbmFtZSc6ICRzY29wZS5ldmVudC5uYW1lLFxuICAgICAgJ3llYXInOiAkc2NvcGUuZXZlbnQueWVhcixcbiAgICBcbiAgICB9KS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuXG4gICAgfSk7XG4gICBcbiAgfTtcblxuICAvL2ZpcmViYXNlT2JqZWN0LiRiaW5kVG8oJHNjb3BlLFwiZXZlbnRcIik7XG4gIC8vY29uc3Qgcm9vdFJlZiA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCkuY2hpbGQoJ2FuZ3VsYXInKTtcbiAgLy9jb25zdCByZWYgPSByb290UmVmLmNoaWxkKCdvYmplY3QnKTtcbiAgLy90aGlzLm9iamVjdCA9ICRmaXJlYmFzZU9iamVjdChyZWYpO1xuXG59XSk7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gcmVxdWlyZSBhbmd1bGFyXG4vLyB2YXIgY29udHJvbGxlcnMgPSByZXF1aXJlKCdjb250cm9sbGVycy5qcycpO1xuXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsnbmdSb3V0ZScsICdmaXJlYmFzZSddKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogSW5pdGlhbGl6ZSBGaXJlYmFzZVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIHZhciBjb25maWcgPSB7XG4gICAgYXBpS2V5OiBcIkFJemFTeUE0WlhPSTNkUkUtb0M1YzNxeXpxcC05NXJSN3pSM0Znd1wiLFxuICAgIGF1dGhEb21haW46IFwiZ2FtZS1wcm9qZWN0LTYyMjI1LmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vZ2FtZS1wcm9qZWN0LTYyMjI1LmZpcmViYXNlaW8uY29tXCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJnYW1lLXByb2plY3QtNjIyMjUuYXBwc3BvdC5jb21cIixcbiAgfTtcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xuXG4gIGZ1bmN0aW9uIEFwcGxpa2F0aW9uQ29uZmlnKCRyb3V0ZVByb3ZpZGVyKSB7XG4gICAgJHJvdXRlUHJvdmlkZXIud2hlbignLycsIHtcbiAgICAgIGNvbnRyb2xsZXI6ICdteUN0cmwnLFxuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9teWN0cmwuaHRtbCcsXG4gICAgfSlcbiAgfTtcblxuICAvL0dldCBlbGVtZW50XG5cbiAgY29uc3QgcHJlT2JqZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29iamVjdCcpO1xuXG4gIC8vIENyZWF0ZSByZWZyZW5jZXNcblxuICBjb25zdCBkYlJlZk9iamVjdCA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCkuY2hpbGQoJ29iamVjdCcpO1xuXG4gIC8vIFN5bmMgb2JqZWN0IGNoYW5nZXNcblxuICAvL2RiUmVmT2JqZWN0Lm9uKCd2YWx1ZScsIHNuYXAgPT4ge1xuICAgIC8vcHJlT2JqZWN0LmlubmVyVGV4dCA9IEpTT04uc3RyaW5naWZ5KHNuYXAudmFsKCksIG51bGwsIDMpO1xuICAvL30pO1xuXG4gIC8vdmFyIGJpZ09uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiaWdPbmUnKTtcbiAgLy92YXIgZGJSZWYgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZigpLmNoaWxkKCd0ZXh0Jyk7XG4gIC8vZGJSZWYub24oJ3ZhbHVlJywgc25hcCA9PiBiaWdPbmUuaW5uZXJUZXh0ID0gc25hcC52YWwoKSk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIEFuZ3VsYXIgQ29udHJvbGxlclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzLmpzJyk7XG5cblxuLypcbmFwcC5jb250cm9sbGVyKCdteUN0cmwnLCBbXCIkc2NvcGVcIiwgXCIkZmlyZWJhc2VPYmplY3RcIiwgXCIkZmlyZWJhc2VBcnJheVwiLCBmdW5jdGlvbigkc2NvcGUsICRmaXJlYmFzZU9iamVjdCwgJGZpcmViYXNlQXJyYXkpIHtcblxuICB2YXIgcmVmID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoKTtcbiAgdmFyIGZpcmViYXNlT2JqZWN0ID0gJGZpcmViYXNlT2JqZWN0KHJlZik7XG5cbiAgJHNjb3BlLmV2ZW50cyA9ICRmaXJlYmFzZUFycmF5KHJlZik7XG5cbiAgJHNjb3BlLmFkZCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vZXZlbnQuaWQgPSBldmVudHMubGVuZ3RoICsgMTtcbiAgICAkc2NvcGUuZXZlbnRzLiRhZGQoJHNjb3BlLndoYXQpO1xuICB9XG5cbiAgLy9maXJlYmFzZU9iamVjdC4kYmluZFRvKCRzY29wZSxcImV2ZW50XCIpO1xuICAvL2NvbnN0IHJvb3RSZWYgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZigpLmNoaWxkKCdhbmd1bGFyJyk7XG4gIC8vY29uc3QgcmVmID0gcm9vdFJlZi5jaGlsZCgnb2JqZWN0Jyk7XG4gIC8vdGhpcy5vYmplY3QgPSAkZmlyZWJhc2VPYmplY3QocmVmKTtcblxufV0pO1xuKi8iXX0=
