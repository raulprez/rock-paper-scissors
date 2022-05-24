

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
    

    //Add else if for tie condition
    if (playRound(computerChoice, humanChoice) == 'victory') {
        //Image for victory
        let humanGameLog = document.createElement("img");
        humanGameLog.src = `img/${humanChoice}.png`;
        humanGameLog.className = "winner";
        var humanLog = document.getElementById("humanGameLog");
        humanLog.prepend(humanGameLog);

        let computerGameLog = document.createElement("img");
        computerGameLog.src = `img/${computerChoice}.png`;
        computerGameLog.className = "loser";
        var computerLog = document.getElementById("computerGameLog");
        computerLog.prepend(computerGameLog);

        //Victory Log
        var roundLog = document.getElementById("roundLog");
        roundLog.innerHTML = "You won!";

        userScore++;

    } if (playRound(computerChoice, humanChoice) == 'defeat')  {
        let humanGameLog = document.createElement("img");
        humanGameLog.src = `img/${humanChoice}.png`;
        humanGameLog.className = "loser";
        var humanLog = document.getElementById("humanGameLog");
        humanLog.prepend(humanGameLog);

        let computerGameLog = document.createElement("img");
        computerGameLog.src = `img/${computerChoice}.png`;
        computerGameLog.className = "winner";
        var computerLog = document.getElementById("computerGameLog");
        computerLog.prepend(computerGameLog);

        var roundLog = document.getElementById("roundLog");
        roundLog.innerHTML = "You have been defeated";

        computerScore++;

    } else if (playRound(computerChoice, humanChoice) == 'tie') {
        let humanGameLog = document.createElement("img");
        humanGameLog.src = `img/${humanChoice}.png`;
        humanGameLog.className = "loser";
        var humanLog = document.getElementById("humanGameLog");
        humanLog.prepend(humanGameLog);

        let computerGameLog = document.createElement("img");
        computerGameLog.src = `img/${computerChoice}.png`;
        computerGameLog.className = "loser";
        var computerLog = document.getElementById("computerGameLog");
        computerLog.prepend(computerGameLog);

        var roundLog = document.getElementById("roundLog");
        roundLog.innerHTML = "You have tied";
    }
    //Prints human choice in DOM


    //Prints computer choice in DOM



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

//..................................................................
// human and computer victory counter
// victory conditions after 5 games

let userScore = parseInt(0);
let computerScore = parseInt(0);

var playRound = (computerChoice, humanChoice) => {

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

// Reset global variables
var gameOver = () => {
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
    var resetButtonWrapper = document.createElement('div');
    resetButtonWrapper.className = "resetButtonWrapper";
    reset.parentNode.insertBefore(resetButtonWrapper,reset);
    resetButtonWrapper.appendChild(reset);
}