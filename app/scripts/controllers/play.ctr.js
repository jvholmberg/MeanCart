(function() {
  'use strict';

  angular
    .module('app')
    .controller('PlayCtrl', playCtrl);

    playCtrl.$inject = [];

    function playCtrl() {
      this.question = JSON.parse(window.localStorage.getItem('question')).question;



      console.log(this.question.title);
    }
})();
