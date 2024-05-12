// write a function that randomly returns either "rock", "paper" or "scissors"
    //get a random number from 0 to 2
    // asign a string to each number


//write a function that prompts the user to choose from "rock", "paper" or "scissors"    
    //get a variable to prompt the question
    //



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



function getHumanChoice(insert) {
    let choice = prompt("What is your choice? rock, paper or scissors?");
        
        if(choice="rock") {
            return "rock";

        }else if(choice="paper"){
            return "paper";

        }else if(choice="scissors"){
            return "scissors";

        }else{
            return "not a valid input";
        }
}

