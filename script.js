let playerOptions = ["rock", "paper", "scissors"]
function computerPlay() {
    return playerOptions[Math.floor(Math.random() * playerOptions.length)];
};

let playerSelection = prompt('Make your choice: Rock, Paper or Scissors');
let computerSelection = computerPlay();





