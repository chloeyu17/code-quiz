// This JS file contains the site functions
var startButton = document.querySelector("#start-button");
var timerCard = document.querySelector('.timer')
var timerEl = document.querySelector('#timer-text');
var questionCard = document.querySelector('.card');
var question = document.querySelector('#question');
var answer1 = document.querySelector('#1');
var answer2 = document.querySelector('#2');
var answer3 = document.querySelector('#3');
var answer4 = document.querySelector('#4');
var resultEl = document.querySelector('.result');
var correct = document.querySelector('#correct');
var incorrect = document.querySelector('#incorrect');
var scoreboard = document.querySelector('#scoreboard');
var userInput = document.querySelector('userInput');
var userSubmitButton = document.querySelector('#userInputBtn');

var result;
var timer;
var timerCount;
var correctCount;
var userName;
var userScore;

//The startQuiz function is called when the start button is clicked
function startQuiz(){
    timerCount = 60;
    correctCount = 0;
    //Prevents the start button from being clicked while the quiz is in progress
    startButton.disabled = true;
    setTimer()
    questionCard.style.display = "block";
    timerCard.style.display = "block";
}

startButton.addEventListener("click", startQuiz);

//Informs you when the quiz is complete and allows the user to start the quiz again
function quizOver(){
    resultEl.style.display = "block";
    userSubmitButton.style.display = "block";
    resultEl.textContent = "Quiz is complete!  Your score is " + correctCount;
    startButton.disabled = false;
}

//setTimer starts the timer when the quiz starts and triggers quizOver
function setTimer(){
    timerEl.textContent = timerCount;
    timer = setInterval(function(){
        timerEl.textContent = timerCount;
        timerCount--;
        if(timerCount === 0){
            quizOver();
            clearInterval(timer);
        }
    }, 1000);
}

function chooseQuestion(){
    question.textContent = question.question
    answer1.textContent = question.answer[0]
    answer2.textContent = question.answer[1]
    answer3.textContent = question.answer[2]
    answer4.textContent = question.answer[3]
    
}
