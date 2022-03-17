let playerOptions = ['rock',
    'paper',
    'scissors']
function computerSelection() {
    return playerOptions[Math.floor(Math.random() * playerOptions.length)];
}
console.log(computerSelection())
