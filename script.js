//Variable declaration
var timerEl = document.getElementById('timer');
var answerEl = document.getElementById('correct-answers');
var scoreEl = document.getElementById('score');

//Buttons
const startBtn = document.getElementById('start-btn');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
var clearBtn = document.getElementById('clear-btn');
var scoreList = document.getElementById('score-list');
//page sections
const header = document.querySelector('header');
const QandACont = document.getElementById('question-container');
const questionCont = document.getElementById('question');
const answerCont = document.getElementById('answer-btns');
const compCont = document.getElementById('quiz-complete');
const instructionCont = document.getElementById('instructions');
const highscoreCont = document.getElementById('highscores');
//Changing variables
let shuffledQuestions, unaskedQuestions, usernameInput, timeRemaining, correctAnswers;
let highscores = JSON.parse(localStorage.getItem("highscores")||"[]");

//Event listeners to respond to button clicks
startBtn.addEventListener("click", startQuiz);

nextBtn.addEventListener("click", function() {
    unaskedQuestions++;
    setQuestion();
});

submitBtn.addEventListener("submit", function(event){
    event.preventDefault();
    addScore();
    displayHighscorePage();
    compCont.classList.add("hide");
});

//Start Quiz replaces the high scores section with a quiz section containing questions and answers
function startQuiz() {
    //Hides the opening page, displays the question page
    startBtn.classList.add("hide");
    instructionCont.classList.add("hide");
    highscoreCont.classList.add("hide");
    QandACont.classList.remove("hide");
    compCont.classList.add("hide");

    //set variable values
    timeRemaining = 60;
    correctAnswers = 0;
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
            quizOver();
        }
    }, 1000);
}

//Set Question sets the next question after a question has been answered
function setQuestion() {
    resetState();
    showQuestion(shuffledQuestions[unaskedQuestions]);
}

//Displays questions from the js file in the html by setting the content of the question container to the question
//found in questions.js and the answer buttons' content to the corresponding answers.  The correctness of the question is also added in the if statement
function showQuestion(question) {
    questionCont.innerHTML = question.question;

    question.answers.forEach((answer) => {
        const newAnsBtn = document.createElement("button");
        newAnsBtn.innerHTML = answer.text;
        newAnsBtn.classList.add("button");
        if(answer.correct){
            newAnsBtn.dataset.correct = answer.correct;
        }
        newAnsBtn.addEventListener("click", selectAnswer);
        answerCont.appendChild(newAnsBtn); 
    });
}

//Hides the next button after it is clicked, removes the previous buttons to be replaced with new buttons for the new question
function resetState() {
    nextBtn.classList.add('hide');
    clearClassStatus(header);
    while(answerCont.firstChild){
        answerCont.removeChild(answerCont.firstChild)
    }
}

//When an answer is selected, the correctness of the answer is compared to the value of correct assigned to the selected answer in the showQuestion function
//The header will change color and the points and time will be affected accordingly.
function selectAnswer(event){
    var selectedBtn = event.target;
    var correct = selectedBtn.dataset.correct;
    setClassStatus(header, correct);
    if(!correct){
        timeRemaining -= 10;
    } else {
        correctAnswers +=10;
    }
    score.textContent = correctAnswers;
    Array.from(answerCont.children).forEach((newAnsBtn) => {
        setClassStatus(newAnsBtn, newAnsBtn.dataset.correct);
    });

    //If there are remaining questions in the array, the function calls the next question.  Otherwise, the game finishes.
    if(shuffledQuestions.length > unaskedQuestions + 1){
        nextBtn.classList.remove('hide');
    } else {
        quizOver();
    }
}

//sets the header to either green or red depending on which answer is selected
function setClassStatus(header, correct){
    clearClassStatus(header);
    if(correct){
        header.classList.add('correct');
    } else {
        header.classList.add('incorrect');
    }
}

//resets the header to a blue background
function clearClassStatus(header){
    header.classList.remove('correct');
    header.classList.remove('incorrect');
}

//when the quiz is over, we want to hide the question container and show the completed container, which prompts the user to fill out the form
function quizOver(){
    QandACont.classList.add('hide');
    compCont.classList.remove('hide');
    timeRemaining == 0;
    answerEl.textContent = correctAnswers;
}
    
var addScore = function(){
    usernameInput = document.getElementById('username').value.trim();
    var newScore = {
        name: usernameInput,
        score: correctAnswers
    };
    highscores.push(newScore);
    localStorage.setItem("highscores", JSON.stringify(highscores));
}

var displayHighscorePage = function(){
    highscoreCont.classList.remove("hide");
    postScores();
    startBtn.classList.remove("hide");
}

//Sort the scores from high to low
highscores.sort(function(a, b){
    return b.score - a.score;
});

//Display Scores
function postScores(){
    for (var i = 0; i<highscores.length; i++){
        var scoreEntry = document.createElement("li");
        scoreEntry.textContent = highscores[i].name + ": " + highscores[i].score;
        scoreList.appendChild(scoreEntry);
    }
}

//Click handlers for clearing scoreboard
clearBtn.addEventListener("click", function() {
    localStorage.clear();
    window.location.reload();
});