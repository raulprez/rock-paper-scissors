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


    let node1 = document.getElementById("userScore");
    node1.innerHTML = userScore;
    
    let node2 = document.getElementById("computerScore");
    node2.innerHTML = computerScore;



    i++;
    if (i !== 5) {
        return;
    } 
    if (i == 5) {
       if (userScore > computerScore) {
       const node = document.createElement('p');
       node.innerHTML = "Congratulations, you are the ultimate Rock, Paper, Scissors Champion!";
       document.body.appendChild(node);
       }
       else if (userScore == computerScore) {
       const node = document.createElement('p');
       node.innerHTML = "Are you a machine?";
       document.body.appendChild(node);
       }
       else {
       const node = document.createElement('p');
       node.innerHTML = "Better luck next time!";
       document.body.appendChild(node);
       }
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

