define(['app', 'profileCtrl', 'trainCtrl', 'buildCtrl', 'researchCtrl', 'exploreCtrl', 'matchmakingCtrl'],
function(app, profileCtrl, trainCtrl, buildCtrl, researchCtrl, exploreCtrl, matchmakingCtrl) {
  'use strict';

  angular
    .module('app')
    .config(config);

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {
    $routeProvider
      .when('/profile', {
        templateUrl: 'app/views/pages/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile',
        css: 'app/styles/css/profile-min.css'
      });
  }
});
