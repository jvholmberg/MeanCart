define(['app'], function(app) {
  'use strict';

  angular
    .module('app')
    .controller('InventoryCtrl', inventoryCtrl);

    inventoryCtrl.$inject = [];

    function inventoryCtrl() {
      console.log('InventoryCtrl');
    }
});
