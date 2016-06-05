define(['app', 'infoCard'], function(app, infoCard) {
  'use strict';

  angular
    .module('app')
    .controller('DashboardCtrl', dashboardCtrl);

    dashboardCtrl.$inject = [];

    function dashboardCtrl() {
      console.log('DashboardCtrl');
    }
});
