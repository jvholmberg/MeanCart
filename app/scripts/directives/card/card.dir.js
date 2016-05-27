define(['app'], function(app) {
  'use strict';

  angular
    .module('app')
    .directive('infoCard', infoCard);

  function infoCard() {
    return {
      restrict: 'E',
      templateUrl: 'app/scripts/directives/card/card.html',
      scope: {
        symbol: '=',
        number: '=',
        desc: '='
      },
      controller: function($scope) {

      },
      link: function() {

      }
    };
  }
});
