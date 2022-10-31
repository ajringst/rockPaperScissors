let playerSelection = " ";
let computerSelection = " ";
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

function getComputerSelection(){
    let randomizer = Math.random();
    console.log(randomizer);
    if (randomizer <= 0.3333){
        return "rock";
    }
    else if (randomizer > 0.3333 && randomizer < 0.6667)
        return "paper";
    else if (randomizer >= 0.6667) {
        return "scissors";
    }
    else {
        console.log("Error");
        alert("You've ran into an error");
    }
}

function playerWon(){
    if ( playerScore === 5 || computerScore === 5 ) {
        playerScore = 1;
        computerScore = 0;
        document.getElementById("player").innerText = playerScore;
        document.getElementById("computer").innerText = computerScore;
    }
    else {
        playerScore += 1;
        document.getElementById("player").innerText = playerScore;
    }
}

function computerWon(){
    if ( playerScore === 5 || computerScore === 5 ) {
        playerScore = 0;
        computerScore = 1;
        document.getElementById("player").innerText = playerScore;
        document.getElementById("computer").innerText = computerScore;
    }
    else {
        computerScore += 1;
        document.getElementById("computer").innerText = computerScore;
    }
}
    

function playRound(playerSelection) {
    computerSelection = getComputerSelection();
    console.log(computerSelection);
    if (playerSelection === computerSelection){
            document.getElementById("outcome").innerText = "You Tied!";
            console.log(playerSelection);
            }

    else if ((playerSelection === "rock" && computerSelection === "scissors") || 
                (playerSelection === "scissors" && computerSelection === "paper") || 
                (playerSelection === "paper" && computerSelection === "rock" )) {
                document.getElementById("outcome").innerText = "You Won!";
                playerWon();
                console.log(playerSelection);
                }

    else if ((playerSelection === "rock" && computerSelection === "paper") || 
                (playerSelection === "scissors" && computerSelection === "rock") || 
                (playerSelection === "paper" && computerSelection === "scissors")) {
                document.getElementById("outcome").innerText = "You Lost!";
                computerWon();
                console.log(playerSelection)
                }
    else {document.getElementById("outcome").innerText = "Please enter a valid choice!";
    }
}        
