var clearBtn = document.getElementById('clear-btn');
var scoreList = document.getElementById('score-list');
//Retrieve the High Scores list submitted by users and turn it into a JSON 

let highScores = JSON.parse(localStorage.getItem("highScores") || "[]");

//Sort the scores from high to low

function compareNumbers(a,b){
    return a - b;
}

highScores.join();
highScores.sort();
highScores.sort(compareNumbers);

//Display Scores
for (var i = 0; i<highScores.length; i++){
    var scoreEntry = document.createElement("li");
    scoreEntry.textConent = highScores[i].username + ": " + highScores[i].score;
    scoreList.appendChild(scoreEntry);
}

//Click handlers for clearing scoreboard
clearBtn.addEventListener("click", function() {
    localStorage.clear();
    window.location.reload();
});