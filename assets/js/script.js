// This JS file contains the site functions

var startButton = document.querySelector("#start-button");
var timerEl = document.querySelector('#timer-text');
var correct = document.querySelector('#correct');
var incorrect = document.querySelector('#incorrect');
var resultEl = document.querySelector('#result');
var scoreboard = document.querySelector('#scoreboard');

var result;
var timer;
var timerCount = 0;
var correctCount = 0;

//The startQuiz function is called when the start button is clicked
function startQuiz(){
    timerCount = 60;
    //Prevents the start button from being clicked while the quiz is in progress
    startButton.disabled = true;
    setTimer()
}

//Informs you when the quiz is complete and allows the user to start the quiz again
function quizOver(){
    resultEl.textContent = "Quiz is complete!  Your score is" + correctCount;
    startButton.disabled = false;
}

//setTimer starts the timer when the quiz starts and triggers quizOver
function setTimer(){
    timer = setInterval(function(){
        timerCount--;
        timerEl.textContent = timerCount;
        if(timerCount === 0){
            clearInterval(timer);
            quizOver();
        }
    }, 1000);
}

function chooseQuestion(){
    
}

startButton.addEventListener("click", startQuiz);