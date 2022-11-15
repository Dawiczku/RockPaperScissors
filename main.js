// Rock, Paper, Scissors game code

// Function returns user's selected weapon if valid.
function playerSelection(){
    let selectedWeapon = getInput();

    while(!checkPlayerSelection(selectedWeapon)){
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
