// Rock, Paper, Scissors game code

// Declared the DOM elements
const rock = document.querySelector('[data-button="rock"]');
const paper = document.querySelector("[data-button='paper']");
const scissors = document.querySelector("[data-button='scissors']");
const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");
const playerScore = document.getElementById("player");
const computerScore = document.getElementById("computer");
const gameWinner = document.getElementById("winner");
const roundWinner = document.getElementById("feedback");

// Declare variables
let computerPoints = 0;
let playerPoints = 0;

//
function playerSelection(selection){
    switch(selection){
        case 'rock':
            return 'rock';
        case 'paper':
            return 'paper';
        case 'scissors':
            return 'scissors';
    }
}

// Function randomly chooses computer's weapon.
function computerSelection(){
    const weapons = ['rock', 'paper', 'scissors'];
    // Random number from 0 - 2 used to get a random weapon.
    let randomNumber = Math.floor(Math.random() * weapons.length);
    // Returns random value from the array.
    return weapons[randomNumber];
}

// Function plays one round between player and computer.
function playRound(selection){
    let playerWeapon = playerSelection(selection);
    let computerWeapon = computerSelection();

    if(playerWeapon == 'rock'){
        switch(computerWeapon){
            case 'rock':
                roundWinner.textContent = "It's a Tie game!";
                break;
            case 'paper':
                roundWinner.textContent = "Paper wraps the rock, Computer wins!";
                computerPoints ++;
                break;
            case 'scissors':
                roundWinner.textContent = "Rock destroys the scissors, Player wins!";
                playerPoints ++;
                break;
        }
    } else if(playerWeapon == 'paper') {
        switch(computerWeapon){
            case 'rock':
                roundWinner.textContent = "Paper wraps the rock, Player wins!";
                playerPoints ++;
                break;
            case 'paper':
                roundWinner.textContent =  "It's a Tie game!";
                break;
            case 'scissors':
                roundWinner.textContent =  "Scissors cut the paper, Computer wins!";
                computerPoints ++;
                break;
        }
    } else if(playerWeapon == 'scissors') {
        switch(computerWeapon){
            case 'rock':
                roundWinner.textContent =  "Rock destroys the scissors, Computer wins!";
                computerPoints ++;
                break;
            case 'paper':
                roundWinner.textContent =  "Scissors cut the paper, Player wins!";
                playerPoints ++;
                break;
            case 'scissors':
                roundWinner.textContent =  "It's a Tie game!";
                break;
        }
    } else {
        alert("Oops, something went wrong!");
        return false;
    }
}

// Event listeners
rock.addEventListener('click', () => playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissors.addEventListener('click', () => playRound('scissors'));

