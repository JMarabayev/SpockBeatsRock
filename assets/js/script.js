//variables for the scoreboard
var playerScore = 0;
var computerScore = 0;
const playerScoreDisplay = document.getElementById("playerscore");
const computerScoreDisplay = document.getElementById("compscore");
const scoreboardDisplay = document.querySelector(".scoreboard");
const resultDisplay = document.getElementById("result");
let moves = 0
const pattern = []
//DOM variables for player choices
const rockChoice = document.getElementById("rock");
const paperChoice = document.getElementById("paper");
const scissorsChoice = document.getElementById("scissors");
const lizardChoice = document.getElementById("lizard");
const spockChoice = document.getElementById("spock");
const movesLeft= document.getElementById("movesLeft")
const moves_div = document.getElementById("moves")
const rules_div = document.getElementById("rules_g")
const prompt = document.getElementById("prompt")
const finalDisplay = document.getElementById("final_result")
const rules_button = document.getElementById("rules_btn")
const reloadBtn = document.getElementById("reload_btn")
//game over function which hides all the irrelevant elements
function gameOver(){
   rockChoice.style.display ="none";
   paperChoice.style.display ="none";
   scissorsChoice.style.display ="none";
   lizardChoice.style.display ="none";
   spockChoice.style.display ="none";
   moves_div.style.display ="none";
   rules_div.style.display ="none";
   resultDisplay.style.display="none";
   rules_button.style.display ="none"
   prompt.innerHTML = "Game Over!"
   reloadBtn.innerText = 'Restart';//taken from https://www.geeksforgeeks.org/rock-paper-and-scissor-game-using-javascript/
        reloadBtn.style.display = 'inline-block'
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        });
        // deciding statement on who won the best out of 10 moves
    if(playerScore>computerScore){
        console.log("win")
        prompt.innerHTML = "Congratulations! You have Defeated the Spock Bot!"
    }
    else if(computerScore>playerScore){
        console.log("lose")
        prompt.innerHTML = "Spock Bot reigns Supreme! Better luck next time!"
    }
    else{
        console.log("draw")
        prompt.innerHTML = "You and Spock Bot are on the same level! Spock Bot wants a rematch!"
    }
}

//moves left 
rockChoice.onclick = function(){
    moves++;
    movesLeft.innerText=10-moves;
    if (moves==10){
        gameOver();
    }
}
paperChoice.onclick = function(){
    moves++;
    movesLeft.innerText=10-moves;
    if (moves==10){
        gameOver();
    }
}
scissorsChoice.onclick = function(){
    moves++;
    movesLeft.innerText=10-moves;
    if (moves==10){
        gameOver();
    }
}
lizardChoice.onclick = function(){
    moves++;
    movesLeft.innerText=10-moves;
    if (moves==10){
        gameOver();
    }
}
spockChoice.onclick = function(){
    moves++;
    movesLeft.innerText=10-moves;
    if (moves==10){
        gameOver();
    }
}

//score update and resulting statement from a combination of variables
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

//on click for choices to be put into the game
function main(){
    rockChoice.addEventListener('click', function(){
       game("rock");
       pattern.push("1");
       console.log(pattern);
    });
    paperChoice.addEventListener('click', function(){
        game("paper");
        pattern.push("2");
        console.log(pattern);
    });
    scissorsChoice.addEventListener('click', function(){
        game("scissors");
        pattern.push("3"); 
        console.log(pattern);
    });
    lizardChoice.addEventListener('click', function(){
        game("lizard");
        pattern.push("4");
        console.log(pattern);
    });
    spockChoice.addEventListener('click', function(){
        game("spock")
        pattern.push("5");
        console.log(pattern);
    });
};
//pattern recognition
function hasConsecutive(patern, amount) {
    var last = null;
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != last) {
            last = arr[i];
            count = 0;
        }
        count += 1;
        if (amount <= count) {
            return true;
        }
    }
    return false;
}


//Function to return the words in a more readable format
function textTransform(word){
    if (word === "rock") return "Rock";
    if (word === "paper") return "Paper";
    if (word === "scissors") return "Scissors";
    if (word === "lizard") return "Lizard";
    if (word === "spock") return "Spock";
};
//function to show the rules source in the README
function showRules() {
   var element = document.getElementById("rulesPic");
   element.classList.toggle("hidden");
}




main();



