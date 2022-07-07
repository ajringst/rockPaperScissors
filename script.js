let playerSelection = " ";
let computerSelection = " ";
let playerScore = 0;
let computerScore = 0;


function getPlayerSelection(){
    playerSelection = document.getElementById("choice").value.toLowerCase();
    return playerSelection;
    }
    

function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerSelection();
    computerSelection = "rock";
    console.log(computerSelection);
    if (playerSelection === computerSelection){
            document.getElementById("outcome").innerHTML = "You Tied!";
            console.log(playerSelection);
            }

    else if ((playerSelection === "rock" && computerSelection === "scissors") || 
                (playerSelection === "scissors" && computerSelection === "paper") || 
                (playerSelection === "paper" && computerSelection === "rock" )) {
                document.getElementById("outcome").innerHTML = "You Won!";
                console.log(playerSelection)
                }

    else if ((playerSelection === "rock" && computerSelection === "paper") || 
                (playerSelection === "scissors" && computerSelection === "rock") || 
                (playerSelection === "paper" && computerSelection === "scissors")) {
                document.getElementById("outcome").innerHTML = "You Lost!";
                console.log(playerSelection)
                }
    else {document.getElementById("outcome").innerHTML = "Please enter a valid choice!";
    }
}        
