let rockbtn = document.querySelector("#rock");
let paperbtn = document.querySelector("#paper");
let scissorsbtn = document.querySelector("#scissors");













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
    return "Rock";
  }
  else if (choice === 2){
    return "Paper";
  }
  else {
    return "Scissors";
  }
}


let playRound = (humanChoice) => {
    const results = document.querySelector("#results");
    const resultsH2 = document.createElement("h2");
    const playerChoiceH3 = document.createElement("h3");
    const computerChoiceH3 = document.createElement("h3");
    
    computerChoice = getComputerChoice();

    if(humanChoice === "Rock" && computerChoice === "Paper"){
        resultsH2.textContent = "You Lose! Paper beats Rock!";
        computerScore++;

    } else if(humanChoice === "Rock" && computerChoice === "Scissors"){
        resultsH2.textContent = "You Win! Rock beats scissors!";
        humanScore++;
    } else if(humanChoice === "Rock" && computerChoice === "Rock"){
        resultsH2.textContent = "It's a tie. Go again.";
    }
    else if(humanChoice === "Paper" && computerChoice === "Rock"){
        resultsH2.textContent = "You win! Paper beats rock!";
        humanScore++;
    } else if(humanChoice === "Paper" && computerChoice === "Scissors"){
        resultsH2.textContent = "You lose! Scissors beats paper!";
        computerScore++;
    } else if(humanChoice === "Paper" && computerChoice === "Paper"){
        resultsH2.textContent = "It's a tie. Go again.";
    }
    else if(humanChoice === "Scissors" && computerChoice === "Paper"){
        resultsH2.textContent = "You win! Scissors beats paper!";
        humanScore++;
    } else if(humanChoice === "Scissors" && computerChoice === "Rock"){
        resultsH2.textContent = "You lose! Rock beats scissors!";
        computerScore++;
    } else if(humanChoice === "Scissors" && computerChoice === "Scissors"){
        resultsH2.textContent = "It's a tie. Go again.";
    }

    playerChoiceH3.textContent = "Your Choice: " + humanChoice;
    computerChoiceH3.textContent = "Computer Choice: " + computerChoice;


    results.appendChild(playerChoiceH3);
    results.appendChild(computerChoiceH3);
    results.appendChild(resultsH2);

}

let playGame = () => {
    let play = "";
    humanChoice = "";
    let computerChoice = "";

    console.log("*****  ||  Welcome to the Rock, Paper, Scissors game! || *****");


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



rockbtn.addEventListener("click", () => {
    let choice = rockbtn.textContent;
    const playerScore = document.querySelector("#playerScore");
    const compScore = document.querySelector("#computerScore");
    
    if(humanScore === 5 || computerScore === 5){

    }

    playRound(choice);
    playerScore.textContent = humanScore;
    compScore.textContent = computerScore;
    

});

paperbtn.addEventListener("click", () => {
    let choice = paperbtn.textContent;

    const playerScore = document.querySelector("#playerScore");
    const compScore = document.querySelector("#computerScore");
    
    playRound(choice);
    playerScore.innerHTML = humanScore;
    compScore.innerHTML = computerScore;
});

scissorsbtn.addEventListener("click", () => {
    let choice = scissorsbtn.textContent;
    const playerScore = document.querySelector("#playerScore");
    const compScore = document.querySelector("#computerScore");
    
    playRound(choice);
    playerScore.innerHTML = humanScore;
    compScore.innerHTML = computerScore;
});