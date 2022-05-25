let computerOptions = ["rock", "paper", "scissors"]

let computerPlay =  (computerOptions) => {
    // get random index value
    const randomIndex = Math.floor(Math.random() * computerOptions.length); 
    // get random choice
    const choice = computerOptions [randomIndex];
    return choice;
};

//Initialize user and computer scores 
let userScore = parseInt(0);
let computerScore = parseInt(0);

//Logic for defining winners and losers
let playRound = (computerChoice, humanChoice) => {

    const victory = 'victory';
    const defeat = 'defeat';
    const tie = 'tie';

    if (computerChoice.toLowerCase() == "rock" && humanChoice.toLowerCase() == "paper") {
        return victory;
    }
     
    else if (computerChoice.toLowerCase() == "paper" && humanChoice.toLowerCase() == "scissors") {
        return victory;
    }
     
    else if (computerChoice.toLowerCase() == "scissors" && humanChoice.toLowerCase() == "rock") {
        return victory;
    }

    else if (computerChoice.toLowerCase() === humanChoice.toLowerCase()) {
        return tie;

     } else { 

     return defeat;

     }
}

//Number of rounds played initialized
let i = 0;

const play = (val) => {
    let humanChoice = String(val);
    let computerChoice = computerPlay(computerOptions);

    if (playRound(computerChoice, humanChoice) == 'victory') {
        //PNG for human victory
        let humanGameLog = document.createElement("img");
        humanGameLog.src = `img/${humanChoice}.png`;
        humanGameLog.className = "winner";
        let humanLog = document.getElementById("humanGameLog");
        humanLog.prepend(humanGameLog);

        //PNG for computer defeat
        let computerGameLog = document.createElement("img");
        computerGameLog.src = `img/${computerChoice}.png`;
        computerGameLog.className = "loser";
        let computerLog = document.getElementById("computerGameLog");
        computerLog.prepend(computerGameLog);

        //Victory Log
        let roundLog = document.getElementById("roundLog");
        roundLog.innerHTML = "You won!";

        userScore++;

    } if (playRound(computerChoice, humanChoice) == 'defeat')  {

        //PNG for human defeat
        let humanGameLog = document.createElement("img");
        humanGameLog.src = `img/${humanChoice}.png`;
        humanGameLog.className = "loser";
        let humanLog = document.getElementById("humanGameLog");
        humanLog.prepend(humanGameLog);

        //PNG for computer victory
        let computerGameLog = document.createElement("img");
        computerGameLog.src = `img/${computerChoice}.png`;
        computerGameLog.className = "winner";
        let computerLog = document.getElementById("computerGameLog");
        computerLog.prepend(computerGameLog);

        //Round Log
        let roundLog = document.getElementById("roundLog");
        roundLog.innerHTML = "You have been defeated";

        computerScore++;

    } else if (playRound(computerChoice, humanChoice) == 'tie') {

        //Tie makes both players PNG's as losers
        let humanGameLog = document.createElement("img");
        humanGameLog.src = `img/${humanChoice}.png`;
        humanGameLog.className = "loser";
        let humanLog = document.getElementById("humanGameLog");
        humanLog.prepend(humanGameLog);

        let computerGameLog = document.createElement("img");
        computerGameLog.src = `img/${computerChoice}.png`;
        computerGameLog.className = "loser";
        let computerLog = document.getElementById("computerGameLog");
        computerLog.prepend(computerGameLog);

        //Round Log
        let roundLog = document.getElementById("roundLog");
        roundLog.innerHTML = "You have tied";
    }

    //Update user and computer score
    let node1 = document.getElementById("userScore");
    node1.innerHTML = userScore;
    
    let node2 = document.getElementById("computerScore");
    node2.innerHTML = computerScore;

    //Number of rounds played increase
    i++;

    //Makes sure that only 5 rounds are played
    if (i !== 5) {
        return;
    } 
    if (i == 5) {
       if (userScore > computerScore) {
       const node = document.createElement('p');
       node.innerHTML = "Congratulations, you are the ultimate Rock, Paper, Scissors Champion!";
       node.className = "matchLog";
       document.body.appendChild(node);
       gameOver(); 
       }

       else if (userScore == computerScore) {
       const node = document.createElement('p');
       node.innerHTML = "You have tied the machine";
       node.className = "matchLog";
       document.body.appendChild(node);
       gameOver(); 
       }

       else {
       const node = document.createElement('p');
       node.innerHTML = "You have lost, better luck next time!";
       node.className = "matchLog";
       document.body.appendChild(node);
       gameOver();
       }
    }
}

// Function that hides inputs and displays a reset button
let gameOver = () => {
    document.getElementById('items').style.display = 'none';
    document.getElementById('roundLog').style.display = 'none';

    const reset = document.createElement('button');
    reset.innerHTML = "New Game";
    reset.className = "resetButton";
    reset.onclick = function(){
        window.location.href=window.location.href;return false;
      };
    document.body.appendChild(reset);

    //Div wrapper for button
    let resetButtonWrapper = document.createElement('div');
    resetButtonWrapper.className = "resetButtonWrapper";
    reset.parentNode.insertBefore(resetButtonWrapper,reset);
    resetButtonWrapper.appendChild(reset);
}

// Helpful stack overflow question for passing button value onclick https://stackoverflow.com/questions/40134104/how-to-pass-the-button-value-into-my-onclick-event-function
