let computerOptions = ["Rock", "Paper", "Scissors"]

const computerPlay =  (computerOptions) => {
    // get random index value
    const randomIndex = Math.floor(Math.random() * computerOptions.length); 
    // get random item
    const item = computerOptions [randomIndex];
    return item;
};

const computerChoice = computerPlay(computerOptions);
console.log(computerChoice)
    