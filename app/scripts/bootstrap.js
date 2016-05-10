require.config({
  baseUrl: '/app/scripts',
  paths: {

    // Dependencies
    angular: '/quizmaker/bower_components/angular/angular',
    angularRoute: '/quizmaker/bower_components/angular-route/angular-route',
    angularUiRouter: '/quizmaker/node_modules/angular-ui-router/release/angular-ui-router',
    angularCSS: '/quizmaker/bower_components/angular-css/angular-css',

    // Modules and routing
    app: 'app',
    routes: 'routes',

    // Apis

    // Services

    // Controllers
    createCtrl: 'controllers/create.ctr',
    playCtrl: 'controllers/play.ctr',

    // Directives

  },
  shim: {
    angularRoute: {
      deps: ['angular']
    },
    angularUiRouter: {
      deps: ['angular']
    },
    angularCSS: {
      deps: ['angular']
    },
    app: {
      deps: ['angular']
    },
    routes: {
      deps: ['angularRoute', 'angularUiRouter', 'angularCSS', 'app']
    }
  }
});
require(['app', 'routes'], function() {
  angular.bootstrap(document, ['app']);
});
