let computerOptions = ["Rock", "Paper", "Scissors"]

const computerPlay =  (computerOptions) => {
    // get random index value
    const randomIndex = Math.floor(Math.random() * computerOptions.length); 
    // get random choice
    const choice = computerOptions [randomIndex];
    return choice;
};

// Log computer answers
const computerChoice = computerPlay(computerOptions);
console.log(computerChoice)
//..................................................................

const humanChoice = "roCK"

//..................................................................

const playRound = (computerChoice, humanChoice) => {

    const victory = "Congratulations, you have beat the machine!"
    const defeat = "You have failed to defeat the machine!"
    const tie = "You have tied the machine!"

    if (computerChoice.toLowerCase() == "rock" && humanChoice.toLowerCase() == "paper")
     return victory;
    
     if (computerChoice.toLowerCase() == "paper" && humanChoice.toLowerCase() == "scissors")
     return victory;

     if (computerChoice.toLowerCase() == "scissors" && humanChoice.toLowerCase() == "rock")
     return victory;

     if (computerChoice.toLowerCase() === humanChoice.toLowerCase())
     return tie;

     else return defeat;
}

const result = playRound(computerChoice, humanChoice);
console.log(result)