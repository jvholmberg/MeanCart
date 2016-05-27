define(['app', 'dashboardCtrl', 'statsCtrl', 'orderCtrl'],
function(app, dashboardCtrl, statsCtrl, orderCtrl) {
  'use strict';

  angular
    .module('app')
    .config(config);

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {
    $routeProvider
      .when('/dashboard', {
        templateUrl: 'app/views/pages/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard',
        css: 'app/styles/css/dashboard-min.css'
      })
      .when('/stats', {
        templateUrl: 'app/views/pages/stats.html',
        controller: 'StatsCtrl',
        controllerAs: 'stats',
        css: 'app/styles/css/stats-min.css'
      })
      .when('/orders', {
        templateUrl: 'app/views/pages/order.html',
        controller: 'OrderCtrl',
        controllerAs: 'order',
        css: 'app/styles/css/order-min.css'
      })
      .otherwise({
        redirectTo: '/dashboard'
      })
  }
});
