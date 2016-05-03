define(['app'], function() {
  'use strict';

  angular.directive('randomColor', randomColor);
  randomColor.$inject = [];

  function randomColor() {
    return {
      restrict: 'A',
      link:function() {

        
      }
    };
  }

});
