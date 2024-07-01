let humanScore = 0;
let computerScore = 0;

//generates random number for computer
let getRandomCompChoice = () => {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(3);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


//makes computer decision based on random number recieved from getRandomCompChoice
let getComputerChoice = () => {
  let choice = getRandomCompChoice()

  if (choice === 1){
    return "rock";
  }
  else if (choice === 2){
    return "paper";
  }
  else {
    return "scissors";
  }
}

//gets human choice based on users decision and returns it
let getHumanChoice = () => {
    let choice = prompt("Pick a choice (rock, paper, or scissors)!").toLowerCase();

    if(choice === "rock" || choice === "paper" || choice === "scissors"){
        return choice;
    } else {
        console.log("Error! Invalid input. Please try again.");
        return getHumanChoice();
    }
}

let playRound = (humanChoice, computerChoice) => {

    console.log("Your Choice: " + humanChoice);
    console.log("Computer Choice: " + computerChoice);


    if(humanChoice === "rock" && computerChoice === "paper"){
        console.log("You lose! Paper beats rock!");
        console.log(" ");
        computerScore++;
    } else if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You Win! Rock beats scissors!");
        console.log(" ");
        humanScore++;
    } else if(humanChoice === "rock" && computerChoice === "rock"){
        console.log("It's a tie. Go again.");
        console.log(" ");
    }

    else if(humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win! Paper beats rock!");
        console.log(" ");
        humanScore++;
    } else if(humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose! Scissors beats paper!");
        console.log(" ");
        computerScore++;
    } else if(humanChoice === "paper" && computerChoice === "paper"){
        console.log("It's a tie. Go again.");
        console.log(" ");
    }

    else if(humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! Scissors beats paper!");
        console.log(" ");
        humanScore++;
    } else if(humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose! Rock beats scissors!");
        console.log(" ");
        computerScore++;
    } else if(humanChoice === "scissors" && computerChoice === "scissors"){
        console.log("It's a tie. Go again.");
        console.log(" ");
    }

    console.log(" |$|$|$|$|$| CURRENT SCORE |$|$|$|$|$|"); 
    console.log(" ")
    console.log("Your Score: " + humanScore);
    console.log("Computer Score: " + computerScore); 
    console.log(" ")
}

let playGame = () => {
    let play = "";
    humanChoice = "";
    let computerChoice = "";

    console.log("*****  ||  Welcome to the Rock, Paper, Scissors game! || *****");
    console.log("*****  ||    The game will last for Five (5) rounds.  || *****");
    console.log(" ");


    for(let i = 0; i < 5; i++){
        
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        
        playRound(humanChoice, computerChoice);
    }

    console.log(" |$|$|$|$|$| FINAL SCORE |$|$|$|$|$|"); 
    console.log(" ")
    console.log("Your Score: " + humanScore);
    console.log("Computer Score: " + computerScore); 
    console.log(" ")

    if(humanScore > computerScore){
        console.log("|$|$|$|$|$|$|  ***  YOU ARE THE WEINER!!!  ***  |$|$|$|$|$|") 

    } else if (humanScore < computerScore){
        console.log("Sorry you lost. Better luck next time, loser! :(");

    } else {
        console.log("It's a tie! No one wins! :/");

    }


    console.log("Thanks for Playing!");


}

playGame();