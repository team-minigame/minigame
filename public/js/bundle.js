(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

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


},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvYXBwL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsnbmdSb3V0ZScsICdmaXJlYmFzZSddKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogSW5pdGlhbGl6ZSBGaXJlYmFzZVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIHZhciBjb25maWcgPSB7XG4gICAgYXBpS2V5OiBcIkFJemFTeUE0WlhPSTNkUkUtb0M1YzNxeXpxcC05NXJSN3pSM0Znd1wiLFxuICAgIGF1dGhEb21haW46IFwiZ2FtZS1wcm9qZWN0LTYyMjI1LmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vZ2FtZS1wcm9qZWN0LTYyMjI1LmZpcmViYXNlaW8uY29tXCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJnYW1lLXByb2plY3QtNjIyMjUuYXBwc3BvdC5jb21cIixcbiAgfTtcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xuXG4gIGZ1bmN0aW9uIEFwcGxpa2F0aW9uQ29uZmlnKCRyb3V0ZVByb3ZpZGVyKSB7XG4gICAgJHJvdXRlUHJvdmlkZXIud2hlbignLycsIHtcbiAgICAgIGNvbnRyb2xsZXI6ICdteUN0cmwnLFxuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9teWN0cmwuaHRtbCcsXG4gICAgfSlcbiAgfTtcblxuICAvL0dldCBlbGVtZW50XG5cbiAgY29uc3QgcHJlT2JqZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29iamVjdCcpO1xuXG4gIC8vIENyZWF0ZSByZWZyZW5jZXNcblxuICBjb25zdCBkYlJlZk9iamVjdCA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCkuY2hpbGQoJ29iamVjdCcpO1xuXG4gIC8vIFN5bmMgb2JqZWN0IGNoYW5nZXNcblxuICAvL2RiUmVmT2JqZWN0Lm9uKCd2YWx1ZScsIHNuYXAgPT4ge1xuICAgIC8vcHJlT2JqZWN0LmlubmVyVGV4dCA9IEpTT04uc3RyaW5naWZ5KHNuYXAudmFsKCksIG51bGwsIDMpO1xuICAvL30pO1xuXG4gIC8vdmFyIGJpZ09uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiaWdPbmUnKTtcbiAgLy92YXIgZGJSZWYgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZigpLmNoaWxkKCd0ZXh0Jyk7XG4gIC8vZGJSZWYub24oJ3ZhbHVlJywgc25hcCA9PiBiaWdPbmUuaW5uZXJUZXh0ID0gc25hcC52YWwoKSk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIEFuZ3VsYXIgQ29udHJvbGxlclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5hcHAuY29udHJvbGxlcignbXlDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkZmlyZWJhc2VPYmplY3QsICRmaXJlYmFzZUFycmF5KSB7XG5cbiAgdmFyIHJlZiA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCk7XG4gIHZhciBmaXJlYmFzZU9iamVjdCA9ICRmaXJlYmFzZU9iamVjdChyZWYpO1xuXG4gICRzY29wZS5ldmVudHMgPSAkZmlyZWJhc2VBcnJheShyZWYpO1xuICAkc2NvcGUuYWRkID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLmV2ZW50cy4kYWRkKCRzY29wZS53aGF0KTtcbiAgfVxuXG4gIC8vZmlyZWJhc2VPYmplY3QuJGJpbmRUbygkc2NvcGUsXCJldmVudFwiKTtcbiAgLy9jb25zdCByb290UmVmID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoKS5jaGlsZCgnYW5ndWxhcicpO1xuICAvL2NvbnN0IHJlZiA9IHJvb3RSZWYuY2hpbGQoJ29iamVjdCcpO1xuICAvL3RoaXMub2JqZWN0ID0gJGZpcmViYXNlT2JqZWN0KHJlZik7XG5cbn0pO1xuXG4iXX0=
