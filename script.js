// write a function that randomly returns either "rock", "paper" or "scissors"
    //get a random number from 0 to 2
    // assign a string to each number


//write a function that prompts the user to choose from "rock", "paper" or "scissors"    
    //get a variable to prompt the question
    //


let humanScore = 0;
let computerScore = 0;


function getComputerChoice(randomChoice) {
    const value =Math.floor(Math.random()*3) +1;
        if(value===1) {
            randomChoice = "paper";

        }else if (value===2) {
            randomChoice = "scissors";

        }else if (value===3) {
            randomChoice = "rock";
        }
        return randomChoice;
        
}



function getHumanChoice() {
   const choice = prompt("What is your choice? rock, paper or scissors?");
        if(choice != "paper" && choice != "rock" && choice!= "scissors") {
            alert("Invalid Input");
        }else {
        return choice.toLowerCase();
        }
}

 function playRound(humanChoice, computerChoice) {
        
        if(humanChoice===computerChoice) {
        console.log("It's a Draw!");

        }else if(humanChoice==="rock" && computerChoice==="scissors" 
        || humanChoice==="paper" && computerChoice==="rock"
        || humanChoice==="scissors" && computerChoice==="paper") {

        humanScore++;
        console.log("You win! Your Score is now " + humanScore)  
        }else {
        computerScore++
        console.log("You lose! The computer's Score is now " + computerScore)
        }
    
 }

 function playGame() {
    let humanChoice, computerChoice;

    for (i = 0; i < 5; i ++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if(humanScore>=3){
        console.log("You won the match!");

    }else if(computerScore>=3) {
        console.log("Unfortunately, you lost the match.")
    }
}

playGame();