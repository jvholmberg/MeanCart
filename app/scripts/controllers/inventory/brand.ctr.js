define(['app', 'webApi'], function(app, webApi) {
  'use strict';

  angular
    .module('app')
    .controller('BrandCtrl', brandCtrl);

    brandCtrl.$inject = ['webApi', 'brands'];
    
    function brandCtrl(webApi, brands) {
      console.log('BrandCtrl');
  		var self = this;

      this.brands = brands;
      this.brand = {
        name: null,
        description: null
      };
      this.editMode = false;

      // CRUD
  		this.create = function() {
  			webApi.request('POST', 'brand/create', this.brand)
  				.then(function successCallback(res) {
            console.log(res);
  			    self.cancel();
  				}, function errorCallback(res) {
  					console.log(res);
  				}).then(getAllBrands);
  		};

  		this.edit = function(id) {
  			// Stop execution if no brands exist
  			if (this.brands === null) {
  				return;
  			}
  			// Locate brand to edit
  			for (var i = 0; i < this.brands.length; i++) {
  				if (this.brands[i]._id === id) {
  					this.editMode = this.brands[i]._id;
  					this.brand = this.brands[i];
  				}
  			}
  		};

  		this.update = function(brnd) {
  			brnd['_id'] = this.editMode;
  			webApi.request('POST', 'brand/update', brnd)
  				.then(function successCallback(res) {
            console.log(res);
      			self.cancel();
  				}, function errorCallback(res) {
  					console.log(res);
  				}).then(getAllBrands);
  		};

  		this.delete = function(id) {
  			webApi.request('POST', 'brand/delete', {
  					_id: id
  				})
  				.then(function successCallback(res) {
  					console.log(res);
  				}, function errorCallback(res) {
  					console.log(res);
  				}).then(getAllBrands);
  		};

      this.cancel = function() {
        this.brand = {
          name: null,
          description: null
        };
        this.editMode = false;
      };

  		function getAllBrands() {
  			webApi.request('POST', 'brand/all')
  				.then(function successCallback(res) {
            console.log(res);
  					self.brands = res.data;
  				}, function errorCallback(res) {
            console.log(res);
  				});
  		}
    }
});
