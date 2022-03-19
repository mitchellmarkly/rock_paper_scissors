let playerOptions = ["rock", "paper", "scissors"]
function computerPlay() {
    return playerOptions[Math.floor(Math.random() * playerOptions.length)];
};

let playerSelection = prompt('Make your choice: Rock, Paper or Scissors');
let computerSelection = computerPlay();

if (computerSelection == 'rock' && playerSelection == 'scissors') {
    console.log("computer chose " + computerSelection + " you LOSE")
}
else if (computerSelection == 'rock' && playerSelection == 'paper') {
    console.log("computer chose " + computerSelection + " you WIN")
}
else if (computerSelection == 'paper' && playerSelection == 'rock') {
    console.log("computer chose " + computerSelection + " you WIN")
}
else if (computerSelection == 'paper' && playerSelection == 'scissors') {
    console.log("computer chose " + computerSelection + " you LOSE")
}
else if (computerSelection == 'scissors' && playerSelection == 'rock') {
    console.log("computer chose " + computerSelection + " you WIN")
}
else if (computerSelection == 'paper' && playerSelection == 'scissors') {
    console.log("computer chose " + computerSelection + " you LOSE")
}
else if (computerSelection == playerSelection) {
    console.log("computer chose " + computerSelection + " TIE GAME")
}



