'use strict';

/***********************************/
/* Require
/***********************************/

var firebase = require('firebase');
var angular = require('angular');
var angularfire = require('angularfire');
var ngRoute = require('angular-route');
//var _ = require('lodash');
var modules = require('./modules'); // get functions

/***********************************/
/* Initialize Angular
/***********************************/

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

/***********************************/
/* Angular Routing
/***********************************/


/***********************************/
/* Temp Testing
/***********************************/

console.log(modules.getLowestYear(2001, 1984));
console.log(modules.isEven(2, 76, 77));




