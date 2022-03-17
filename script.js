let playerOptions = ['rock',
    'paper',
    'scissors']
function computerPlay() {
    return playerOptions[Math.floor(Math.random() * playerOptions.length)];
}
console.log(computerPlay());
