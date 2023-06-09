const resultDiv = document.querySelector('#result');
const compScore = document.querySelector('#computer-score')
const playScore = document.querySelector('#player-score')
const winnerDiv = document.querySelector('#winner');
const wrapper = document.getElementById('wrapper');

wrapper.addEventListener('click', game)


// Computer generates selection (rock, paper, or scissors)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    switch (getRandomInt(3)) {
        case 0:
            return 'ROCK';
        case 1:
            return 'PAPER';
        case 2:
            return 'SCISSORS';
    }
}

// Player is asked for selection
function getPlayerChoice() {
    return event.target.id;
}

    
let playerScore = 0;
let computerScore = 0;

// Play 1 round
function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();

    if(playerSelection == computerSelection) {
        return resultDiv.textContent = "It's a tie.";
    } else if(playerSelection == 'ROCK' && computerSelection == 'PAPER') {
        // computerScore += 1;
        return [resultDiv.textContent = 'You lose! Paper beats Rock', computerScore += 1, compScore.textContent = `Computer Score: ${computerScore}`];
    } else if(playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
        // playerScore += 1;
        return [resultDiv.textContent = 'You win! Rock beats Scissors', playerScore += 1, playScore.textContent = `Your Score: ${playerScore}`];
    } else if(playerSelection == 'PAPER' && computerSelection == 'ROCK') {
        // playerScore += 1;
        return [resultDiv.textContent = 'You win! Paper beats Rock', playerScore += 1, playScore.textContent = `Your Score: ${playerScore}`];
    } else if(playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
        // computerScore += 1;
        return [resultDiv.textContent = 'You lose! Scissors beat Paper', computerScore += 1, compScore.textContent = `Computer Score: ${computerScore}`];
    } else if(playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
        // computerScore += 1;
        return [resultDiv.textContent = 'You lose! Rock beats Scissors', computerScore += 1, compScore.textContent = `Computer Score: ${computerScore}`];
    } else if(playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        // playerScore += 1;
        return [resultDiv.textContent = 'You win! Scissors beat Paper', playerScore += 1, playScore.textContent = `Your Score: ${playerScore}`];
    }
}

// Returns the final verdict
function gameScore() {
    if(playerScore == computerScore) {
        return winnerDiv.textContent ='The total score is tied. You both scored ' + playerScore;
    } else if(playerScore > computerScore) {
        return winnerDiv.textContent = 'You win the tournament. You scored ' + playerScore + ', the computer scored only ' + computerScore;
    } else {
        return winnerDiv.textContent = 'You lose the tournament. You scored only ' + playerScore + ', the computer scored ' + computerScore;
    }
}

// plays until someone reaches x points
function game() {
    if (playerScore < 5 && computerScore < 5) {
        playRound();
    } if (playerScore == 5 || computerScore == 5) {
        gameScore();
    }
}