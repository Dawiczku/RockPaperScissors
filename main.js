// Rock, Paper, Scissors game code

function playerSelection(){
    let selectedWeapon = getInput();

    while(!checkPlayerSelection(selectedWeapon)){
        selectedWeapon = getInput();
    }
    return true;
}

function getInput(){
    selectedWeapon = prompt(`Choose your weapon!\n(Rock / Paper / Scissors)`).toLowerCase();
    return selectedWeapon;
}

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

playerSelection();