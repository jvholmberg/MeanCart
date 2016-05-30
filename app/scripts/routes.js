define(['app', 'dashboardCtrl', 'statsCtrl', 'orderCtrl', 'inventoryCtrl', 'categoryCtrl', 'productCtrl', 'webApi'],
function(app, dashboardCtrl, statsCtrl, orderCtrl, inventoryCtrl, categoryCtrl, productCtrl, webApi) {
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
      /**
       * @summary Routes concerning inventory
       *
       * /inventory
       *
       * /inventory/category
       * /inventory/category/edit/:id
       *
       * /inventory/product
       * /inventory/product/create
       * /inventory/product/edit/:id
       */
      .when('/inventory', {
        templateUrl: 'app/views/pages/inventory.html',
        controller: 'InventoryCtrl',
        controllerAs: 'inventory',
        css: 'app/styles/css/inventory-min.css'
      })
      .when('/inventory/category', {
        templateUrl: 'app/views/pages/inventory/category.html',
        controller: 'CategoryCtrl',
        controllerAs: 'category',
        css: 'app/styles/css/inventory-min.css',
        resolve: {
          categories: function($q, webApi) {
            var deferred = $q.defer();
             webApi.request('POST', 'category/all')
              .then(function successCallback(res) {
                deferred.resolve(res.data);
                return res;
              }, function errorCallback(res) {

              });
            return deferred.promise;
          }
        }
      })
      .when('/inventory/product', {
        templateUrl: 'app/views/pages/inventory/product.html',
        controller: 'ProductCtrl',
        controllerAs: 'product',
        css: 'app/styles/css/inventory-min.css'
      })
      /**
       * @summary Redirct when invalid route
       *
       * When invalid route is provided redirect to dashboard.
       */
      .otherwise({
        redirectTo: '/dashboard'
      })
  }
});
