let btns = document.querySelectorAll('input[type="button"]');
let resultsBox = document.querySelector('#result');
let playerBoard = document.querySelector('#player-score');
let computerBoard = document.querySelector('#computer-score');

let playerScore = computerScore = 0;

document.addEventListener('DOMContentLoaded', function() {
    btns = document.querySelectorAll('input[type="button"]');

    resultsBox = document.querySelector('#result');
    playerBoard = document.querySelector('#player-score');
    computerBoard = document.querySelector('#computer-score');

    btns.forEach(btn => btn.addEventListener('click', startRound));

    playerBoard.innerHTML = playerScore;
    computerBoard.innerHTML = computerScore;
});

function startRound() {
    let computerHand = computerPlay();
    let playerHand = this.value.toLowerCase();

    let winner = playRound(playerHand, computerHand);

    resultsBox.innerHTML = winner[0];

    playerScore += winner[1] == "player" ? 1 : 0;
    computerScore += winner[1] == "computer" ? 1 : 0;

    playerBoard.innerHTML = playerScore;
    computerBoard.innerHTML = computerScore;
    
    let reset = document.querySelector('#reset');
    reset.addEventListener('click', () => {
        window.location.reload();
    });
    
    if (playerScore > computerScore && playerScore == 5)
    {
        resultsBox.innerHTML = "You win!";
        btns.forEach(btn => btn.removeEventListener('click', startRound));
        reset.classList.remove('hidden');
    }
    else if(computerScore > playerScore && computerScore == 5)
    {
        resultsBox.innerHTML = "The computer won";
        btns.forEach(btn => btn.removeEventListener('click', startRound));
        reset.classList.remove('hidden');
    }
}

function computerPlay() {
    let option = Math.floor(Math.random() * 100) % 3;
    let computerHand = "";

    switch (option) {
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