//setting variables for the game to be played and the score to be kept
const PlayerScore =0;
const CompScore=0;
const PlayerScore_span=document.getElementById("playerScore"); //player
const CompScore_span=document.getElementById("compScore"); //computer
//linking the variables to the html file
const rock_div =getElementById("rock");
const paper_div =getElementById("paper");
const scissors_div =getElementById("scissors");
const lizard_div =getElementById("lizard");
const spock_div =getElementById("spock"); //player options

//coding for player name


//adding the script for player choice
function game(userChoice){
rock_div.addEventListener("click",function(){
    game("rock");
    
})
paper_div.addEventListener("click",function(){
    game("paper");
    
})
scissors_div.addEventListener("click",function(){
    game("scissors");
    
})
lizard_div.addEventListener("click",function(){
    game("lizard");
    
})
spock_div.addEventListener("click",function(){
    game("spock");
    
})
}

