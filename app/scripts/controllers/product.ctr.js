define(['app', 'webApi'], function(app, webApi) {
  'use strict';

  angular
    .module('app')
    .controller('ProductCtrl', productCtrl);

    productCtrl.$inject = [];
    function productCtrl() {
      console.log('CategoryCtrl');

      this.product = {
        // Product details
        title: null,
        summary: null,
        description: null,
        // Categorisation
        category: null,
        brand: null,
        collection: null,
        // Inventory management
        sku: null,
        price: null,
        salePrice: null,
        stockLevel: null,
        stockStatus: null,
        // Shipping information
        weight: null,
        width: null,
        height: null,
        depth: null
      };
      this.save = function() {
        console.log(this);
      };
    }
});
