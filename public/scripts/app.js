'use strict';

var app = angular.module('app', ['ngRoute']);

		// Initialize Firebase
  var config = {
    apiKey: "AIzaSyA4ZXOI3dRE-oC5c3qyzqp-95rR7zR3Fgw",
    authDomain: "game-project-62225.firebaseapp.com",
    databaseURL: "https://game-project-62225.firebaseio.com",
    storageBucket: "game-project-62225.appspot.com",
  };
  firebase.initializeApp(config);

  var bigOne = document.getElementById('bigOne');
  var dbRef = firebase.database().ref().child('text');
  dbRef.on('value', snap => bigOne.innerText = snap.val());
