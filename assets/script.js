//variables for the scoreboard
var playerScore = 0;
var computerScore = 0;
const playerScoreDisplay = document.getElementById("playerscore");
const computerScoreDisplay = document.getElementById("compscore");
const scoreboardDisplay = document.querySelector(".scoreboard");
const resultDisplay = document.querySelector("resultstatement");

//DOM variables for player choices
const rockChoice = document.getElementById("rock");
const paperChoice = document.getElementById("paper");
const scissorsChoice = document.getElementById("scissors");
const lizardChoice = document.getElementById("lizard");
const spockChoice = document.getElementById("spock");

//score update
function win(playerChoice,computerChoice){
    playerScore++;
    playerScoreDisplay.innerHTML = playerScore;
    resultDisplay.innerHTML= `${playerChoice} beats ${computerChoice}! You win!`
}
function lose(playerChoice,computerChoice){
    computerScore++;
    computerScoreDisplay.innerHTML = computerScore;
    resultDisplay.innerHTML= `${playerChoice} loses to ${computerChoice}! You lose!`
}
function tie(playerChoice,computerChoice){
    resultDisplay.innerHTML= `${playerChoice} = ${computerChoice}! its a Tie!`
    
}


//defining the function for the game in which outcomes are explored
function game(playerChoice){
    const computerChoice = getcomputerChoice;
    switch (playerChoice + computerChoice){
        case "rockscissors":
        case "rocklizard":
        case "spockrock":
        case "lizardpaper":
        case "paperrock":
        case "scissorspaper":
        case "spockscissors":
        case "paperspock":
        case "lizardspock":
        case "scissorslizard":
        win(playerChoice,computerChoice);
        break;
        case "scissorsrock":
        case "lizardrock":
        case "rockspock":
        case "paperlizard":
        case "rockpaper":
        case "paperscissors":
        case "scissorsspock":
        case "spockpaper":
        case "spocklizard":
        case "lizardscissors":
        lose(playerChoice,computerChoice);
        break;
        case "scissorsscissors":
        case "lizardlizard":
        case "rockrock":
        case "paperpaper":
        case "spockspock":
        tie(playerChoice,computerChoice);
        break;    
}
}
function getcomputerChoice(){
    const options = ["rock","paper","scissors","lizard","spock"];
    const rng= (Math.floor(Math.random()*4));
    return options[rng];
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
