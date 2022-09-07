
const playerScore = 0;
const computerScore = 0;
const playerScoreDisplay = document.getElementById("playerscore");
const computerScoreDisplay = document.getElementById("compscore");
const scoreboardDisplay = document.querySelector(".scoreboard")
const resultDisplay = document.querySelector(".result")


const rockChoice = document.getElementById("rock");
const paperChoice = document.getElementById("paper");
const scissorsChoice = document.getElementById("scissors");
const lizardChoice = document.getElementById("lizard");
const spockChoice = document.getElementById("spock");

//
function game(userChoice){
    console.log("You Chose"+userChoice);
}

function getcomputerChoice(){
    const options = ["rock","paper","scissors","lizard","spock"];
    const rng= (Math.floor(Math.random()*4));
}


function main(){
    rockChoice.addEventListener('click', function(){
        game("rock");
    });
    paperChoice.addEventListener('click', function(){
        game("paper");
    });
    scissorsChoice.addEventListener('click', function(){
        game("scissors");
    });
    lizardChoice.addEventListener('click', function(){
        game("lizard");
    });
    spockChoice.addEventListener('click', function(){
        game("spock");
    });
}
main();
getcomputerChoice();
console.log(getcomputerChoice());