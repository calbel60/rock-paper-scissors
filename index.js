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

let playerScore = 0;

let computerScore = 0;

const body = document.querySelector("#body");

const welcomeMessage = document.createElement("h3");
const result = document.createElement("div");
const btns = document.createElement("div");
const line = document.createElement("div");
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

welcomeMessage.textContent = 'Welcome to Rock Paper Scissors!';

rockBtn.textContent = "Rock";
rockBtn.addEventListener("click", () => compareChoices(getComputerChoice(), "rock"));

paperBtn.textContent = "Paper";
paperBtn.addEventListener("click", () => compareChoices(getComputerChoice(), "paper"));

scissorsBtn.textContent = "Scissors";
scissorsBtn.addEventListener("click", () => compareChoices(getComputerChoice(), "scissors"));

line.textContent = "---------------"

btns.appendChild(rockBtn);
btns.appendChild(paperBtn);
btns.appendChild(scissorsBtn);
body.appendChild(welcomeMessage);
body.appendChild(btns);
body.appendChild(line);
body.appendChild(result);




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

/*
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
*/

const checkVictory = (pScore, cScore) => {
    let victory;
    if (pScore == 5) {
        victory = "Congrats you beat the computer!";
        computerScore = 0;
        playerScore = 0;
    } else if (cScore == 5) {
        victory = "The computer wins! Better luck next time!";
        computerScore = 0;
        playerScore = 0;
    } else {
        victory = ""
    }

    return ` | Player Score: ${pScore} | Computer Score: ${cScore} | ${victory}`
}

let compareChoices = (computerChoice, playerChoice) => {
    if (computerChoice === playerChoice) {
        result.textContent = "Its a tie!" + checkVictory(playerScore, computerScore);
    } else if (computerChoice == "paper" && playerChoice == "rock") {
        computerScore++;
        result.textContent = "You lost!" + checkVictory(playerScore, computerScore);
    } else if (computerChoice == "rock" && playerChoice == "scissors") {
        computerScore++;
        result.textContent = "You lost!" + checkVictory(playerScore, computerScore);
    } else if (computerChoice == "scissors" && playerChoice == "paper") {
        computerScore++;
        result.textContent = "You lost!" + checkVictory(playerScore, computerScore);
    } else if (computerChoice == "rock" && playerChoice == "paper") {
        playerScore++;
        result.textContent = "You won!" + checkVictory(playerScore, computerScore);
    } else if (computerChoice == "paper" && playerChoice == "scissors") {
        playerScore++;
        result.textContent = "You won!" + checkVictory(playerScore, computerScore);
    } else if (computerChoice == "scissors" && playerChoice == "rock") {
        playerScore++;
        result.textContent = "You won!" + checkVictory(playerScore, computerScore);
    }
}

/*
let active = true;
while(active == true) {
    let keepPlaying = alert('Welcome to Rock Paper Scissors!');
    compareChoices(getComputerChoice(), getPlayerChoice());
}
*/