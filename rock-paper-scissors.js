let resultsBox = document.querySelector('#result');
let scoreBox = document.querySelector('#score-board');
// Probably not the best way to try and keep the script from having to be placed in a specific
// spot in the HTML, but it helps to not worry about making sure the script goes after the body,
// or before depending ont eh situation
let playerScore = computerScore = 0;

document.addEventListener('DOMContentLoaded', function() {
    // Waiting for page to load first before attaching event listeners
    const btns = document.querySelectorAll('input[type="button"]');

    resultsBox = document.querySelector('#result');
    scoreBox = document.querySelector('#score-board');

    btns.forEach(btn => btn.addEventListener('click', startRound));
});

function startRound() {
    let computerHand = computerPlay();
    let playerHand = this.value.toLowerCase();

    let winner = playRound(playerHand, computerHand);

    resultsBox.innerHTML = winner[0];

    playerScore += winner[1] == "player" ? 1 : 0;
    computerScore += winner[1] == "computer" ? 1 : 0;

    scoreBox.innerHTML = `SCORE\n\nPlayer: ${playerScore}\nComputer: ${computerScore}`;
}

function computerPlay() {
    let option = Math.floor(Math.random() * 100) % 3;
    let computerHand = "";

    switch(option) {
        case 0:
            computerHand = "rock";
            break;
        case 1:
            computerHand = "paper";
            break;
        case 2:
            computerHand = "scissors";
            break;
        default:
            throw new Error("There was an issue with the computer hand");
    }

    return computerHand;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return ["It's a tie..", "none"];
    }
    else if(playerSelection == "rock") {
        return computerSelection == "paper" ? ["You lose! Paper beats Rock", "computer"] : ["You win! Rock beats Scissors", "player"];
    }
    else if (playerSelection == "paper") {
        return computerSelection == "scissors" ? ["You lose! Scissors beats Paper", "computer"] : ["You win! Paper beats Rock", "player"];
    }
    else if (playerSelection == "scissors") {
        return computerSelection == "rock" ? ["You lose! Rock beats Scissors", "computer"] : ["You win! Scissors beats Paper", "player"];
    }
    else
    {
        throw new Error("There was an error with the game");
    }
}