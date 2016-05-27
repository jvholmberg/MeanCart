define(['app', 'amcharts.serial', 'amcharts.pie', 'amcharts.plugins.export'], function(app, amSerial, amPie) {
  'use strict';

  angular
    .module('app')
    .directive('amChart', chart);

  function chart() {
    return {
      restrict: 'E',
      templateUrl: 'app/scripts/directives/chart/chart.html',
      scope: {
        vis: '=',
        chart: '=val'
      },
      controller: function($scope) {
        switch ($scope.vis) {
          case 'serial':
            $scope.val = amSerial.makeChart("chart-wrapper", $scope.chart);
            break;
          case 'pie':
            $scope.val = amSerial.makeChart("chart-wrapper", $scope.chart);
            break;
          default:
            console.warn('Unsupported type provided');
            break;
        }

        function createChart(type, data) {
          switch (type) {

          }
        }
        function formatData(type, data) {
          switch (type) {
            case 'column':

              break;
            case 'line':

              break;
            case 'pie':

              break;
            default:
              console.warn('Unsupported type provided');
              break;
          }
        }
        function formatDataColumn(data) {

        }
        function formatDataLine(data) {

        }
        function formatDataPie(data) {

        }
      },
      link: function() {

      }
    };
  }
});
