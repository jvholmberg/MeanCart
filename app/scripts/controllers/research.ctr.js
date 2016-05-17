define(['app'], function(app) {
  'use strict';

  angular
    .module('app')
    .controller('ResearchCtrl', researchCtrl);

    researchCtrl.$inject = [];

    function researchCtrl() {
      this.getRecomended = [
        {
          icon: null,
          title: 'Marines lvl 2',
          desc: 'Fitted with automatic rifles',
          type: 'DMG',
          stat: '2'
        },
        {
          icon: null,
          title: 'Tanks lvl 2',
          desc: 'more power',
          type: 'DMG',
          stat: '4'
        },
      ];
    }
});
