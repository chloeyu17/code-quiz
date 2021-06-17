//Variable declaration
var timerEl = document.getElementById('timer');
//Buttons
const startBtn = document.getElementById('start-btn');
const answerBtn = document.getElementById('answer-btns');
const submitBtn = document.getElementById('submit-btn');
//page sections
const questionCont = document.getElementById('question-container');
const submitScore = document.getElementById('submit-score');
const instructionCont = document.getElementById('instructions');
const compCont = document.getElementById('quiz-complete');
const highscoreCont = document.getElementById('highscores');
//Changing variables
let timeRemaining = 60;
let shuffledQuestions, unaskedQuestions, timeInterval, usernameInput;
let correctAnswers = 0;

//Event listeners to respond to button clicks
startBtn.addEventListener("click", startQuiz);

// answerBtn.addEventListener("click", function() {
//     unaskedQuestions++;
//     setQuestion();
// });

submitBtn.addEventListener("click", function(event){
    event.stopPropagation();
    addScore();
    displayHighscorePage();
});

//Start Quiz replaces the high scores section with a quiz section containing questions and answers
function startQuiz() {
    //Hides the opening page, displays the question page
    startBtn.classList.add("hide");
    instructionCont.classList.add("hide");
    highscoreCont.classList.add("hide");
    questionCont.classList.remove("hide");

    //shuffles questions
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    unaskedQuestions = 0;

    //Call time and next question functions
    timerStart();
    setQuestion();
}

function timerStart(){
    quizTimer = setInterval(() => {
        if (timeRemaining >= 0) {
            timerEl.textContent = timeRemaining;
            timeRemaining --;
        } else {
            gameOver();
        }
    }, 1000);
}

//Set Question sets the next question after a question has been answered
function setQuestion() {
 console.log("setQuestion");
 showQuestion(shuffledQuestions[unaskedQuestions]);
}

//Displays questions from the js file in the html
function showQuestion(question) {
    questionCont.innerHTML = question.question;
    question.answers.forEach((answer) => {
        var newAnsBtn = document.createElement("button");
        newAnsBtn.innerHTML = answer.text;
        newAnsBtn.classList.add("btn");
        answerBtn.classList.remove("hide");
        if(answer.correct){
            newAnsBtn.dataset.correct = answer.correct;
        }
        newAnsBtn.addEventListener("click", selectAnswer);
        answerBtn.appendChild(newAnsBtn);

  
    });
}

function selectAnswer(event){
    var selectedBtn = event.target;
    var correct = selectedBtn.dataset.correct;
    if(!correct){
        timeRemaining -= 10;
    } else {
        correctAnswers +=10;
    }
    Array.from(answerBtn.children).forEach((newAnsBtn) => {
        setStatusClass(newAnsBtn, newAnsBtn.dataset.correct);
    });
    if(shuffledQuestions.length > currentQuestionIndex + 1){
        setNextQuestion();
    } else {
        gameOver();
    }
}
    
var addScore = function(){
    console.log("addScore");
}

var displayHighscorePage = function(){
    console.log("displayPage");
    
}