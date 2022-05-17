let computerOptions = ["rock", "paper", "scissors"]

const computerPlay =  (computerOptions) => {
    // get random index value
    const randomIndex = Math.floor(Math.random() * computerOptions.length); 
    // get random choice
    const choice = computerOptions [randomIndex];
    return choice;
};

//..................................................................
// Helpful stack overflow question for passing button value onclick https://stackoverflow.com/questions/40134104/how-to-pass-the-button-value-into-my-onclick-event-function

var i = 0;

const play = (val) => {
    var humanChoice = String(val);
    console.log(humanChoice);
    var computerChoice = computerPlay(computerOptions);
    console.log(computerChoice);
    console.log(playRound(computerChoice, humanChoice));
    console.log("your score = " + userScore);
    console.log("Computer's score = " + computerScore);
    i++;
    if (i !== 5) {
        return;
    } 
    if (i == 5) {
       if (userScore > computerScore) {
       alert("Congratulations, you are the ultimate Rock, Paper, Scissors Champion!") 
       }
       else if (userScore == computerScore) {
       alert("Are you a machine?")
       }
       else alert ("Better luck next time!")
    }
}

//..................................................................
// human and computer victory counter
// victory conditions after 5 games

let userScore = parseInt(0);
let computerScore = parseInt(0);

const playRound = (computerChoice, humanChoice) => {

    const victory = "Congratulations, you have beat the machine!"
    const defeat = "You have failed to defeat the machine!"
    const tie = "You have tied the machine!"

    if (computerChoice.toLowerCase() == "rock" && humanChoice.toLowerCase() == "paper") {
        userScore++;
        return victory;
    }
     
    else if (computerChoice.toLowerCase() == "paper" && humanChoice.toLowerCase() == "scissors") {
        userScore++;
        return victory;
    }
     
    else if (computerChoice.toLowerCase() == "scissors" && humanChoice.toLowerCase() == "rock") {
        userScore++;
        return victory;
    }

    else if (computerChoice.toLowerCase() === humanChoice.toLowerCase()) {
        return tie;

     } else { 

     computerScore++;
     return defeat;

     }
}

