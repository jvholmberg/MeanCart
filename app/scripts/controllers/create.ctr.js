define(['app'], function(app) {
  'use strict';
  
  angular
    .module('app')
    .controller('CreateCtrl', createCtrl);

  createCtrl.$inject = [];

  function createCtrl() {
    this.question = {
      title: '',
      image: '',
      options: [{correct: false, text: ''}]
    };

    this.addOption = function(ev) {
      // Do not allow more than 10 options per question
      if(this.question.options.length === 10) {
        return;
      }
      // Add new option on tab or click
      if(ev === undefined) {
        this.question.options.push({correct: false, text: ''});
      } else if(ev.keyCode === 9) {
        this.question.options.push({correct: false, text: ''});
        var target = angular.element(ev.target);
        var sibling = angular.element(target[0].nextSibling);
      }
    };
    this.removeOption = function(i) {
      this.question.options.splice(i, 1);
    };
    this.saveQuestion = function() {
      window.localStorage.setItem('question', JSON.stringify({
        question: this.question,
        options: this.options
      }));
    };
  }
});
