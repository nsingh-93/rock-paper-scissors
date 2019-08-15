function playerPlay() {
    let request = "Enter \'rock\', \'paper\', or \'scissors\' for your move";
    let choice = window.prompt(request).toLowerCase();

    while (true) {
        if (choice == "rock" || choice == "paper" || choice == "scissors") {
            break;
        }
        else {
            request = "Please enter one of the following: \'rock\', \'paper\', or \'scissors\'";
            choice = window.prompt(request).toLowerCase();
        }
    }

    return choice;
}

function computerPlay() {
    let option = getRandomInt(1, 3);
    let computerHand = "";

    switch(option) {
        case 1:
            computerHand = "rock";
            break;
        case 2:
            computerHand = "paper";
            break;
        case 3:
            computerHand = "scissors";
            break;
        default:
            throw new Error("There was an issue with the computer hand");
    }

    return computerHand;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
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
        throw new Error("There as an error with the game");
    }
}

function game() {
    let playerScore = computerScore = ties = 0;
    for (round = 0; round < 5; round++) {
        let computerHand = computerPlay();
        let playerHand = playerPlay();

        let winner = playRound(playerHand, computerHand);

        alert(winner[0]);
        computerScore += winner[1] == "computer" ? 1 : 0;
        playerScore += winner[1] == "player" ? 1 : 0;
        ties += winner[1] == "none" ? 1 : 0;
    }

    alert("Player: " + playerScore + "\nComputer: " + computerScore + "\nTies: " + ties);
}

//game();
