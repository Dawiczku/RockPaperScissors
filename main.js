// Rock, Paper, Scissors game code

// Function returns user's selected weapon if valid.
function playerSelection(){
    let selectedWeapon = getInput();

    while(!checkPlayerSelection(selectedWeapon)){
        alert("Wrong input, try again!");
        selectedWeapon = getInput();
    }
    return selectedWeapon;
}

// Function asks for and returns user's input.
function getInput(){
    selectedWeapon = prompt(`Choose your weapon!\n(Rock / Paper / Scissors)`).toLowerCase();
    return selectedWeapon;
}

// Function checks if choice is valid.
function checkPlayerSelection(selection){
    switch(selection){
        case 'rock':
            return true;
        case 'paper':
            return true;
        case 'scissors':
            return true;
    }
    return false;
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
function playRound(){
    let playerWeapon = playerSelection();
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
function game(pointsAmount){
    let playerPoints, computerPoints;
    let roundResult = undefined;
    playerPoints = computerPoints = 0;
    
    // Repeating the round until someone hits the winning score (pointsAmount).
    while (playerPoints != pointsAmount && computerPoints != pointsAmount){
        roundResult = playRound();
        console.log(roundResult);
        if (roundResult.includes("Computer")){
            computerPoints ++;
        } else if(roundResult.includes("Player")) {
            playerPoints ++;
        }
        console.log(`Current score: Player (${playerPoints}) - Computer (${computerPoints})`);
    }

    if (playerPoints == pointsAmount){
        console.log("Player wins, Congratulations !");
    } else {
        console.log("Computer wins, it happens..");
    }

    console.log("The game has ended!");
}

game(3);