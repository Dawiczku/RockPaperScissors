// Rock, Paper, Scissors game code

// Declared the DOM elements
const rock = document.querySelector("[data-button='rock']");
const paper = document.querySelector("[data-button='paper']");
const scissors = document.querySelector("[data-button='scissors']");
const playerChoice = document.getElementsByClassName("player-choice");
const computerChoice = document.getElementsByClassName("computer-choice");
const playerScore = document.getElementsByClassName("player");
const computerScore = document.getElementsByClassName("computer");
const gameWinner = document.getElementsByClassName("winner");
const roundWinner = document.getElementsByClassName("feedback");

// Event listeners
rock.addEventListener('click', playRound('rock'));
paper.addEventListener('click', playRound('paper'));
scissors.addEventListener('click', playRound('scissors'));
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

// Function asks for and returns user's input.
function getInput(){
    selectedWeapon = prompt(`Choose your weapon!\n(Rock / Paper / Scissors)`).toLowerCase();
    return selectedWeapon;
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
                return "It's a Tie game!";
            case 'paper':
                return "Paper wraps the rock, Computer wins!";
            case 'scissors':
                return "Rock destroys the scissors, Player wins!";
        }
    } else if(playerWeapon == 'paper') {
        switch(computerWeapon){
            case 'rock':
                return "Paper wraps the rock, Player wins!";
            case 'paper':
                return "It's a Tie game!";
            case 'scissors':
                return "Scissors cut the paper, Computer wins!";
        }
    } else if(playerWeapon == 'scissors') {
        switch(computerWeapon){
            case 'rock':
                return "Rock destroys the scissors, Computer wins!";
            case 'paper':
                return "Scissors cut the paper, Player wins!";
            case 'scissors':
                return "It's a Tie game!";
        }
    } else {
        alert("Oops, something went wrong!");
        return false;
    }
}

// Function that plays an entire game until someone hits x (pointsAmount) wins.
// function game(pointsAmount){
//     let playerPoints, computerPoints;
//     let roundResult = undefined;
//     playerPoints = computerPoints = 0;
    
//     // Repeating the round until someone hits the winning score (pointsAmount).
//     while (playerPoints != pointsAmount && computerPoints != pointsAmount){
//         roundResult = playRound();
//         console.log(roundResult);
//         if (roundResult.includes("Computer")){
//             computerPoints ++;
//         } else if(roundResult.includes("Player")) {
//             playerPoints ++;
//         }
//         console.log(`Current score: Player (${playerPoints}) - Computer (${computerPoints})`);
//     }

//     if (playerPoints == pointsAmount){
//         console.log("Player wins, Congratulations !");
//     } else {
//         console.log("Computer wins, it happens..");
//     }

//     console.log("The game has ended!");
// }

