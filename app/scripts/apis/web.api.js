define(['app'], function(app) {
  'use strict';

  angular
    .module('app')
    .factory('webApi', webApi);

    webApi.$inject = ['$http'];

    function webApi($http) {
      this.endpointUrl = 'http://localhost:3000/';

      this.request = function(method, cmd, data) {
        if (method === 'GET') {
          return this.getRequest(cmd, data);
        } else {
          return this.postRequest(cmd, data);
        }
      };
      this.getRequest = function(cmd, data) {
        return $http({
          method: 'GET',
          url: this.endpointUrl + cmd,
          data: data,
          tranformRequest: this.encodeParams
        });
      };
      this.postRequest = function(cmd, data) {
        return $http({
          method: 'POST',
          url: this.endpointUrl + cmd,
          data: data,
          'content-type': 'application/x-www-form-urlencoded'
        });
      };
      this.encodeParams = function(obj) {
			  var str = Object.keys(obj).map(function(key){
  				return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
  			}).join('&');
		  };

      return this;
    }
});
