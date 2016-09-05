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