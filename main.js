// Rock, Paper, Scissors game code

function playerSelection(){
    let selectedWeapon = prompt(`Choose your weapon!\n(Rock / Paper / Scissors)`);
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