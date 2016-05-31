define(['app', 'webApi'], function(app, webApi) {
	'use strict';

	angular
		.module('app')
		.controller('CategoryCtrl', dashboardCtrl);

	dashboardCtrl.$inject = ['webApi', 'categories'];

	function dashboardCtrl(webApi, categories) {
		console.log('CategoryCtrl');
		var self = this;

		this.editMode = false;

		// Make categories available in scope
		this.categories = categories;
		this.category = {
			parentCategory: null,
			title: null,
			description: null
		};

		// CRUD
		this.create = function() {
			webApi.request('POST', 'category/create', this.category)
				.then(function successCallback(res) {
					console.log(res);
					self.cancel();
				}, function errorCallback(res) {
					console.log(res);
				}).then(getAllCategories);
		};

		this.edit = function(id) {
			// Stop execution if no categories exist
			if (this.categories === null) {
				return;
			}
			// Locate category to edit
			for (var i = 0; i < this.categories.length; i++) {
				if (this.categories[i]._id === id) {
					this.editMode = this.categories[i]._id;
					this.category = this.categories[i];
				}
			}
		};

		this.update = function(cat) {
			cat['_id'] = this.editMode;
			webApi.request('POST', 'category/update', cat)
				.then(function successCallback(res) {
					console.log(res);
					self.cancel();
				}, function errorCallback(res) {
					console.log(res);
				}).then(getAllCategories);
		};

		this.delete = function(id) {
			webApi.request('POST', 'category/delete', {
					_id: id
				})
				.then(function successCallback(res) {
					console.log(res);
				}, function errorCallback(res) {
					console.log(res);
				}).then(getAllCategories);
		};

    this.cancel = function() {
      this.category = {
				parentCategory: null,
				title: null,
				description: null
			};
      this.editMode = false;
    };

		function getAllCategories() {
			webApi.request('POST', 'category/all')
				.then(function successCallback(res) {
					self.categories = res.data;
					console.log(res);
				}, function errorCallback(res) {
					console.log(res);
				});
		}
	}
});
