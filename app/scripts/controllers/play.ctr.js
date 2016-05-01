define(['app'], function(app) {
  'use strict';

  angular
    .module('app')
    .controller('PlayCtrl', playCtrl);

    playCtrl.$inject = [];

    function playCtrl() {
      this.quiz = JSON.parse(window.localStorage.getItem('quiz'));
      this.currentQuestionIndex = 0;
      this.currentQuestion = this.quiz.questions[this.currentQuestionIndex];
      this.result = [];

      this.answerQuestion = function(index) {
        var correct = [],
            answer = [];
        // Get correct options
        for(var i = 0; i < this.currentQuestion.options.length; i++) {
          if(this.currentQuestion.options[i].correct) {
            correct.push(i);
          }
        }
        // Get answer of user


        /*this.result.push({
          correct: this.currentQuestion.options
        });*/

        this.goToNextQuestion();
      };
      this.goToNextQuestion = function() {
        this.currentQuestionIndex++;
        this.currentQuestion = this.quiz.questions[this.currentQuestionIndex];
      };
    }
});
