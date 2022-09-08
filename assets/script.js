//variables for the scoreboard
var playerScore = 0;
var computerScore = 0;
const playerScoreDisplay = document.getElementById("playerscore");
const computerScoreDisplay = document.getElementById("compscore");
const scoreboardDisplay = document.querySelector(".scoreboard");
const resultDisplay = document.getElementById("result");

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
    resultDisplay.innerHTML= `${textTransform(playerChoice)} beats ${textTransform(computerChoice)} You Win!`
    
}
function lose(playerChoice,computerChoice){
    computerScore++;
    computerScoreDisplay.innerHTML = computerScore;
    resultDisplay.innerHTML= `${textTransform(playerChoice)} loses to ${textTransform(computerChoice)} You Lose!`
}
function tie(playerChoice,computerChoice){
    resultDisplay.innerHTML= `${textTransform(playerChoice)} is the same as ${textTransform(computerChoice)} Its a Tie!`
    
}


//defining the function for the game in which outcomes are explored
function game(playerChoice){
    const computerChoice = getcomputerChoice();
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
//defining the rng computer choice
function getcomputerChoice(){
    const options = ["rock","paper","scissors","lizard","spock"];
    const rng= (Math.floor(Math.random()*5));
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
function textTransform(word){
    if (word === "rock") return "Rock";
    if (word === "paper") return "Paper";
    if (word === "scissors") return "Scissors";
    if (word === "lizard") return "Lizard";
    if (word === "spock") return "Spock";
};

function showRules() {
   var element = document.getElementById("rulesPic");
   element.classList.toggle("hidden");
}

main();



