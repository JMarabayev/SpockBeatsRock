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

//script for the instructions dropdown
var coll=document.getElementsByClassName("collapse");
var i;

for (i=0; i<coll.length; i++){
    coll[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if(content.style.display==="block"){
            content.style.display = "none";
        }
        else{
            content.style.display ="block";
        }
    });
}