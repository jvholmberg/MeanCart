define(['app', 'webApi'], function(app, webApi) {
  'use strict';

  angular
    .module('app')
    .controller('ProductCtrl', productCtrl);

    productCtrl.$inject = ['webApi', 'categories', 'products', 'brands'];
    function productCtrl(webApi, categories, products, brands) {
      console.log('ProductCtrl');
  		var self = this;

      this.categories = categories;
      this.brands = brands;
      this.products = products;
      this.product = {
        // Product details
        title: null,
        summary: null,
        description: null,
        // Categorisation
        category: null,
        brand: null,
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
      this.editMode = false;

      // CRUD
  		this.create = function() {
  			webApi.request('POST', 'product/create', this.product)
  				.then(function successCallback(res) {
  					console.log(res);
      			self.cancel();
  				}, function errorCallback(res) {
  					console.log(res);
  				}).then(getAllProducts);
  		};

  		this.edit = function(id) {
  			// Stop execution if no products exist
  			if (this.products === null) {
  				return;
  			}
  			// Locate product to edit
  			for (var i = 0; i < this.products.length; i++) {
  				if (this.products[i]._id === id) {
  					this.editMode = this.products[i]._id;
  					this.product = this.products[i];
  				}
  			}
  		};

  		this.update = function(cat) {
  			cat['_id'] = this.editMode;
  			webApi.request('POST', 'product/update', cat)
  				.then(function successCallback(res) {
  					console.log(res);
      			self.cancel();
  				}, function errorCallback(res) {
  					console.log(res);
  				}).then(getAllProducts);
  		};

  		this.delete = function(id) {
  			webApi.request('POST', 'product/delete', {
  					_id: id
  				})
  				.then(function successCallback(res) {
  					console.log(res);
  				}, function errorCallback(res) {
  					console.log(res);
  				}).then(getAllProducts);
  		};

      this.cancel = function() {
        this.product = {
          // Product details
          title: null,
          summary: null,
          description: null,
          // Categorisation
          category: null,
          brand: null,
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
        this.editMode = false;
      };

  		function getAllProducts() {
  			webApi.request('POST', 'product/all')
  				.then(function successCallback(res) {
  					self.products = res.data;
  				}, function errorCallback(res) {
            console.log(res);
  				});
  		}
    }
});
