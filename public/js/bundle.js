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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvYXBwL2NvbnRyb2xsZXJzLmpzIiwicHVibGljL2FwcC9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXHJcbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbnRyb2xsZXIoJ215Q3RybCcsIFtcIiRzY29wZVwiLCBcIiRmaXJlYmFzZU9iamVjdFwiLCBcIiRmaXJlYmFzZUFycmF5XCIsIGZ1bmN0aW9uKCRzY29wZSwgJGZpcmViYXNlT2JqZWN0LCAkZmlyZWJhc2VBcnJheSkge1xyXG5cclxuLy8gYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbnRyb2xsZXIoJ215Q3RybCcsIFtcIiRzY29wZVwiLCBcIiRmaXJlYmFzZU9iamVjdFwiLCBcIiRmaXJlYmFzZUFycmF5XCIsIGZ1bmN0aW9uKCRzY29wZSwgJGZpcmViYXNlT2JqZWN0LCAkZmlyZWJhc2VBcnJheSkge1xyXG5cclxuLy8gYXBwLmNvbnRyb2xsZXIoJ215Q3RybCcsIFtcIiRzY29wZVwiLCBcIiRmaXJlYmFzZU9iamVjdFwiLCBcIiRmaXJlYmFzZUFycmF5XCIsIGZ1bmN0aW9uKCRzY29wZSwgJGZpcmViYXNlT2JqZWN0LCAkZmlyZWJhc2VBcnJheSkge1xyXG4gXHJcblxyXG4gIHZhciByZWYgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZigpO1xyXG4gIHZhciBmaXJlYmFzZU9iamVjdCA9ICRmaXJlYmFzZU9iamVjdChyZWYpO1xyXG5cclxuICAkc2NvcGUuZXZlbnRzID0gJGZpcmViYXNlQXJyYXkocmVmKTtcclxuXHJcbi8qXHJcbiBmdW5jdGlvbiBteUZ1bmN0aW9uKGEsIGIpIHtcclxuICAgIHJldHVybiBhICogYjtcclxuICB9XHJcblxyXG4gIHZhciB4ID0gbXlGdW5jdGlvbig0LCAzKTsgXHJcblxyXG4gIGNvbnNvbGUubG9nKHgpO1xyXG4qL1xyXG5cclxuICAkc2NvcGUuYWRkID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgJHNjb3BlLmV2ZW50cy4kYWRkKHtcclxuICAgICAgJ25hbWUnOiAkc2NvcGUuZXZlbnQubmFtZSxcclxuICAgICAgJ3llYXInOiAkc2NvcGUuZXZlbnQueWVhcixcclxuICAgIFxyXG4gICAgfSkudGhlbihmdW5jdGlvbihkYXRhKXtcclxuXHJcbiAgICB9KTtcclxuICAgXHJcbiAgfTtcclxuXHJcbiAgLy9maXJlYmFzZU9iamVjdC4kYmluZFRvKCRzY29wZSxcImV2ZW50XCIpO1xyXG4gIC8vY29uc3Qgcm9vdFJlZiA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCkuY2hpbGQoJ2FuZ3VsYXInKTtcclxuICAvL2NvbnN0IHJlZiA9IHJvb3RSZWYuY2hpbGQoJ29iamVjdCcpO1xyXG4gIC8vdGhpcy5vYmplY3QgPSAkZmlyZWJhc2VPYmplY3QocmVmKTtcclxuXHJcbn1dKTtcclxuXHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8vIHJlcXVpcmUgYW5ndWxhclxyXG4vLyB2YXIgY29udHJvbGxlcnMgPSByZXF1aXJlKCdjb250cm9sbGVycy5qcycpO1xyXG5cclxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ25nUm91dGUnLCAnZmlyZWJhc2UnXSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qIEluaXRpYWxpemUgRmlyZWJhc2VcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuICB2YXIgY29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeUE0WlhPSTNkUkUtb0M1YzNxeXpxcC05NXJSN3pSM0Znd1wiLFxyXG4gICAgYXV0aERvbWFpbjogXCJnYW1lLXByb2plY3QtNjIyMjUuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL2dhbWUtcHJvamVjdC02MjIyNS5maXJlYmFzZWlvLmNvbVwiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJnYW1lLXByb2plY3QtNjIyMjUuYXBwc3BvdC5jb21cIixcclxuICB9O1xyXG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcclxuXHJcbiAgZnVuY3Rpb24gQXBwbGlrYXRpb25Db25maWcoJHJvdXRlUHJvdmlkZXIpIHtcclxuICAgICRyb3V0ZVByb3ZpZGVyLndoZW4oJy8nLCB7XHJcbiAgICAgIGNvbnRyb2xsZXI6ICdteUN0cmwnLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL215Y3RybC5odG1sJyxcclxuICAgIH0pXHJcbiAgfTtcclxuXHJcbiAgLy9HZXQgZWxlbWVudFxyXG5cclxuICBjb25zdCBwcmVPYmplY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb2JqZWN0Jyk7XHJcblxyXG4gIC8vIENyZWF0ZSByZWZyZW5jZXNcclxuXHJcbiAgY29uc3QgZGJSZWZPYmplY3QgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZigpLmNoaWxkKCdvYmplY3QnKTtcclxuXHJcbiAgLy8gU3luYyBvYmplY3QgY2hhbmdlc1xyXG5cclxuICAvL2RiUmVmT2JqZWN0Lm9uKCd2YWx1ZScsIHNuYXAgPT4ge1xyXG4gICAgLy9wcmVPYmplY3QuaW5uZXJUZXh0ID0gSlNPTi5zdHJpbmdpZnkoc25hcC52YWwoKSwgbnVsbCwgMyk7XHJcbiAgLy99KTtcclxuXHJcbiAgLy92YXIgYmlnT25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JpZ09uZScpO1xyXG4gIC8vdmFyIGRiUmVmID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoKS5jaGlsZCgndGV4dCcpO1xyXG4gIC8vZGJSZWYub24oJ3ZhbHVlJywgc25hcCA9PiBiaWdPbmUuaW5uZXJUZXh0ID0gc25hcC52YWwoKSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qIEFuZ3VsYXIgQ29udHJvbGxlclxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzLmpzJyk7XHJcblxyXG5cclxuLypcclxuYXBwLmNvbnRyb2xsZXIoJ215Q3RybCcsIFtcIiRzY29wZVwiLCBcIiRmaXJlYmFzZU9iamVjdFwiLCBcIiRmaXJlYmFzZUFycmF5XCIsIGZ1bmN0aW9uKCRzY29wZSwgJGZpcmViYXNlT2JqZWN0LCAkZmlyZWJhc2VBcnJheSkge1xyXG5cclxuICB2YXIgcmVmID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoKTtcclxuICB2YXIgZmlyZWJhc2VPYmplY3QgPSAkZmlyZWJhc2VPYmplY3QocmVmKTtcclxuXHJcbiAgJHNjb3BlLmV2ZW50cyA9ICRmaXJlYmFzZUFycmF5KHJlZik7XHJcblxyXG4gICRzY29wZS5hZGQgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vZXZlbnQuaWQgPSBldmVudHMubGVuZ3RoICsgMTtcclxuICAgICRzY29wZS5ldmVudHMuJGFkZCgkc2NvcGUud2hhdCk7XHJcbiAgfVxyXG5cclxuICAvL2ZpcmViYXNlT2JqZWN0LiRiaW5kVG8oJHNjb3BlLFwiZXZlbnRcIik7XHJcbiAgLy9jb25zdCByb290UmVmID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoKS5jaGlsZCgnYW5ndWxhcicpO1xyXG4gIC8vY29uc3QgcmVmID0gcm9vdFJlZi5jaGlsZCgnb2JqZWN0Jyk7XHJcbiAgLy90aGlzLm9iamVjdCA9ICRmaXJlYmFzZU9iamVjdChyZWYpO1xyXG5cclxufV0pO1xyXG4qLyJdfQ==
