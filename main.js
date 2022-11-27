// Rock, Paper, Scissors game code

// Declared the DOM elements
const rock = document.querySelector('[data-button="rock"]');
const paper = document.querySelector("[data-button='paper']");
const scissors = document.querySelector("[data-button='scissors']");
const playerChoiceScreen = document.getElementById("player-choice");
const computerChoiceScreen = document.getElementById("computer-choice");
const playerScoreScreen = document.getElementById("player");
const computerScoreScreen = document.getElementById("computer");
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

function setScreenScore(playerPts, compPts){
    playerScoreScreen.textContent = `Player: ${playerPts}`;
    computerScoreScreen.textContent = `Computer: ${compPts}`;
}

function setPlayersChoice(playerChoice, compChoice){
    playerChoiceScreen.src = `images/${playerChoice}.svg`;
    computerChoiceScreen.src = `images/${compChoice}.svg`;
}

function checkWinner(playerPts, compPts){
    if(playerPts === 5){
        gameWinner.textContent = "Player wins, congratulations !";
        return true;
    } else if (compPts === 5) {
        gameWinner.textContent = "Computer wins, you could've done better.";
        return true;
    }
}

// Function plays one round between player and computer.
function playRound(selection){
    let playerWeapon = playerSelection(selection);
    let computerWeapon = computerSelection();
    gameWinner.textContent = "Who's gonna win ?";

    if(playerWeapon == 'rock'){
        switch(computerWeapon){
            case 'rock':
                roundWinner.textContent = "It's a Tie game!";
                setScreenScore(playerPoints, computerPoints);
                setPlayersChoice(playerWeapon, computerWeapon);
                break;
            case 'paper':
                roundWinner.textContent = "Paper wraps the rock, Computer wins!";
                computerPoints ++;
                setScreenScore(playerPoints, computerPoints);
                setPlayersChoice(playerWeapon, computerWeapon);
                break;
            case 'scissors':
                roundWinner.textContent = "Rock destroys the scissors, Player wins!";
                playerPoints ++;
                setScreenScore(playerPoints, computerPoints);
                setPlayersChoice(playerWeapon, computerWeapon);
                break;
        }
    } else if(playerWeapon == 'paper') {
        switch(computerWeapon){
            case 'rock':
                roundWinner.textContent = "Paper wraps the rock, Player wins!";
                playerPoints ++;
                setScreenScore(playerPoints, computerPoints);
                setPlayersChoice(playerWeapon, computerWeapon);
                break;
            case 'paper':
                roundWinner.textContent =  "It's a Tie game!";
                setScreenScore(playerPoints, computerPoints);
                setPlayersChoice(playerWeapon, computerWeapon);
                break;
            case 'scissors':
                roundWinner.textContent =  "Scissors cut the paper, Computer wins!";
                computerPoints ++;
                setScreenScore(playerPoints, computerPoints);
                setPlayersChoice(playerWeapon, computerWeapon);
                break;
        }
    } else if(playerWeapon == 'scissors') {
        switch(computerWeapon){
            case 'rock':
                roundWinner.textContent =  "Rock destroys the scissors, Computer wins!";
                computerPoints ++;
                setScreenScore(playerPoints, computerPoints);
                setPlayersChoice(playerWeapon, computerWeapon);
                break;
            case 'paper':
                roundWinner.textContent =  "Scissors cut the paper, Player wins!";
                playerPoints ++;
                setScreenScore(playerPoints, computerPoints);
                setPlayersChoice(playerWeapon, computerWeapon);
                break;
            case 'scissors':
                roundWinner.textContent =  "It's a Tie game!";
                setScreenScore(playerPoints, computerPoints);
                setPlayersChoice(playerWeapon, computerWeapon);
                break;
        }
    }
    checkWinner(playerPoints, computerPoints);
        if(checkWinner(playerPoints, computerPoints)){
            playerPoints = computerPoints = 0;
        }
}

// Event listeners
rock.addEventListener('click', () => playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissors.addEventListener('click', () => playRound('scissors'));

