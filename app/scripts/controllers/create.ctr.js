define(['app'], function(app) {
  'use strict';

  angular
    .module('app')
    .controller('CreateCtrl', createCtrl);

  createCtrl.$inject = [];

  function createCtrl() {
    this.name = "";
    this.image = "";
    this.questions = [{
      title: '',
      image: '',
      options: [{correct: false, text: ''}]
    }];
    // Add / Remove questions
    this.addQuestion = function() {
      this.questions.push({
        title: '',
        image: '',
        options: [{correct: false, text: ''}]
      });
    };
    this.removeQuestion = function(index) {
      this.questions.splice(index, 1);
    };
    // Add / Remove options / Adjust width
    this.addOption = function(question, ev) {
      if(question.options.length >= 10) {
        return;
      }
      if(ev === undefined) {
        question.options.push({correct: false, text: ''});
      } else if(ev.code === 'Tab') {
        question.options.push({correct: false, text: ''});
      }
    };
    this.removeOption = function(question, index) {
      question.options.splice(index, 1);
    };
    // Save quiz
    this.saveQuiz = function() {
      window.localStorage.setItem('quiz', JSON.stringify({
        name: this.name,
        image: this.image,
        questions: this.questions
      }));
    };
  }
});
