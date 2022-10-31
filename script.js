//let playerSelection = " ";
//let computerSelection = " ";
let playerScore = 0;
let computerScore = 0;

/*const getPlayerSelection = e => {
    let playerSelection =e.target.id;
    console.log(playerSelection);
    return playerSelection;
    playRound;
}*/

/*function getPlayerSelection(){
    playerSelection = document.querySelector(".button").id;
    console.log(playerSelection);
    return playerSelection;
    } */

let buttons = document.querySelectorAll("button");
//buttons.forEach(button => button.addEventListener("click", getPlayerSelection));
buttons.forEach(button => button.addEventListener("click", e => playRound(e.target.id), false));


    

function playRound(playerSelection) {
    computerSelection = "rock";
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
    else {document.getElementById("outcome").innerHTML = "Please enter a valid choice!";
    }
}        
