// write a function that randomly returns either "rock", "paper" or "scissors"
    //get a random number from 0 to 2
    // asign a string to each number


//write a function that prompts the user to choose from "rock", "paper" or "scissors"    
    //get a variable to prompt the question
    //


let humanScore = 0;
let computerScore = 0;


function getComputerChoice(randomchoice) {
    const value = Math.random();

        if(value<=0.33) {
            return "paper";

        }else if (value>.033 && value>=0.66) {
            return "scissors";

        }else {
            return "rock";
        }
}



function getHumanChoice() {
   const choice = prompt("What is your choice? rock, paper or scissors?");
        return choice.toLowerCase();
}


 function playRound(humanChoice, computerChoice) {
    if(humanSelection===computerSelection) {
        console.log("It's a Draw!");

    }else if(humanSelection==="rock" && computerSelection==="scissors" 
        || humanSelection==="paper" && computerSelection==="rock"
        || humanSelection==="scissors" && computerSelection"paper") {

        humanScore++;
        console.log("You win!")  
    }

 }
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

 playRound(humanSelection, computerSelection);