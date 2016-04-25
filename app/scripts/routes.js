define(function() {
  angular
    .module('app')
    .config(config);

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {
    $routeProvider
      .when('/', {
        css: 'app/styles/css/create.css'
      })
      .when('/create', {
        templateUrl: 'app/views/pages/create.html',
        controller: 'CreateCtrl',
        controllerAs: 'create',
        css: 'app/styles/css/create.css'
      })
      .when('/edit', {

      })
      .when('/delete', {

      })
      .when('/play', {
        templateUrl: 'app/views/pages/play.html',
        controller: 'PlayCtrl',
        controllerAs: 'play',
        css: 'app/styles/css/play.css'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
});
