let playerSelection = "rock";
let computerSelection = "rock";


function getPlayerSelection(){
    playerSelection = document.getElementById("choice").value;
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection != "rock" || "paper" || "scissors") {
        document.getElementById("outcome").innerHTML = "Please enter a valid choice!";
    }
    }

function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerSelection();
    if (playerSelection === computerSelection){
        document.getElementById("outcome").innerHTML = "You Tied!";
    }
    
}