let playerSelection = " ";
let computerSelection = "rock";


function getPlayerSelection(){
    playerSelection = document.getElementById("choice").value.toLowerCase();
    return playerSelection;
    }
    

function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerSelection();
    console.log(playerSelection);
    if (playerSelection === "rock" || "paper" || "scissors"){
        console.log(playerSelection);
             
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
            }        

    else {
        document.getElementById("outcome").innerHTML = "Please enter a valid choice!";
        console.log("Something has gone incredibly wrong!!!!");
    }
}