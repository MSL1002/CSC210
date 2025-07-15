// clicker game

let score = 0;

const scoreDisplay = document.getElementById("score")
const clickButton = document.getElementById("click-button")

clickButton.addEventListener("click", () =>{

    score += 1

    scoreDisplay.textContent = score;

});


// RPS game

// var = global
var rpsScore = 0;

const choices = ["rock", "paper", "scissors"]

const playerChoiceDisplay = document.getElementById("player-choice")
const computerChoiceDisplay = document.getElementById("comp-choice")
const resultDisplay = document.getElementById("rps-result")
const rpsScoreDisplay = document.getElementById("rps-score")


document.querySelectorAll(".rps").forEach(button => {
    button.addEventListener("click", () => {

        const playerChoice = button.dataset.choice;

        // gives random num between 0 and 2, math.random() gives a number between 0 and 1
        // mult that by three and round down to
        const compChoice = choices[Math.floor(Math.random()*3)];

        playerChoiceDisplay.textContent = playerChoice;
        computerChoiceDisplay.textContent = compChoice;

        resultDisplay.textContent = getResult(playerChoice, compChoice);

        rpsScoreDisplay.textContent = rpsScore;

    });
});

function getResult(player,comp) {
    if(player == comp) return "TIE";
    else if(player == "rock" && comp == "scissors" 
        || player == "paper" && comp == "rock" 
        || player == "scissors" && comp == "paper")
         {rpsScore += 1
         return "You Won!";}
    else {rpsScore -=1
        return "Computer Won!"};
}

