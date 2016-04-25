require.config({
  baseUrl: '/app/scripts',
  paths: {

    // Dependencies
    angular: '../../bower_components/angular/angular',
    angularCSS: '../../bower_components/angular-css/angular-css',
    angularRoute: '../../node_modules/angular-route/angular-route',
    angularUiRouter: '../../node_modules/angular-ui-router/release/angular-ui-router',

    // Starters
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
      deps: ['angular', 'angularRoute', 'angularUiRouter', 'angularCSS']
    },
    routes: {
      deps: ['angular', 'angularRoute', 'angularUiRouter', 'angularCSS']
    }
  }
});
require(['app'], function() {
  angular.bootstrap(document, ['app']);
});
