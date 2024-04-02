// Choose random out of rock paper of scissors
// Loop through the following 
//  Ask user for their choice
//  If choice isn't one of the options return "Thats not rock paper or scissors!"
//  If choice is one of them then end the loop
// Compare user choice to computer choice
// If computer choice is the same as user choice then say "Its a tie!"
// Else if computer choice loses then say "You won! Nice job!"
// Else say "You lost! Better luck next time!"
// Restart game

let computerChoice;

let playerChoice;

let computerNumber;

let getComputerChoice = () => {
    computerNumber = Math.floor(Math.random() * 3) + 1
    if (computerNumber == 1) {
        computerChoice = "rock"
    } else if (computerNumber == 2) {
        computerChoice = "paper"
    } else if (computerNumber == 3) {
        computerChoice = "scissors"
    }

    return computerChoice;
}

let getPlayerChoice = () => {
    let validAnswer = false;
    while(validAnswer == false) {
        playerChoice = prompt('Which do you choose? (rock, paper, or scissors) | (click "cancel" to quit)');
        if (typeof playerChoice == "string") {
            playerChoice.toLowerCase()
            if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
                validAnswer = true;
            } else {
                alert("That's not a valid choice.")
            }
        } else if (playerChoice == null){
            active = false;
            validAnswer = true;
        } else {
            alert("That's not a valid choice.")
        }
    }
    return playerChoice;
}


let compareChoices = (computerChoice, playerChoice) => {
    if (computerChoice === playerChoice) {
        alert("Its a tie!")
    } else if (computerChoice == "paper" && playerChoice == "rock") {
        alert("You lost! Better luck next time!")
    } else if (computerChoice == "rock" && playerChoice == "scissors") {
        alert("You lost! Better luck next time!")
    } else if (computerChoice == "scissors" && playerChoice == "paper") {
        alert("You lost! Better luck next time!")
    } else if (computerChoice == "rock" && playerChoice == "paper") {
        alert("You won! Nice job!")
    } else if (computerChoice == "paper" && playerChoice == "scissors") {
        alert("You won! Nice job!")
    } else if (computerChoice == "scissors" && playerChoice == "rock") {
        alert("You won! Nice job!")
    }
}

let active = true;
while(active == true) {
    let keepPlaying = alert('Welcome to Rock Paper Scissors!');
    compareChoices(getComputerChoice(), getPlayerChoice());
}