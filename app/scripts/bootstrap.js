require.config({
  baseUrl: 'app/scripts',
  paths: {

    // Dependencies
    angular: '../../bower_components/angular/angular',
    angularRoute: '../../bower_components/angular-route/angular-route',
    angularUiRouter: '../../node_modules/angular-ui-router/release/angular-ui-router',
    angularCSS: '../../bower_components/angular-css/angular-css',

    // Modules and routing
    app: 'app',
    routes: 'routes',

    // Apis

    // Services

    // Controllers
    profileCtrl: 'controllers/profile.ctr',
    trainCtrl: 'controllers/train.ctr',
    buildCtrl: 'controllers/build.ctr',
    exploreCtrl: 'controllers/explore.ctr',
    researchCtrl: 'controllers/research.ctr',
    matchmakingCtrl: 'controllers/matchmaking.ctr',



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
