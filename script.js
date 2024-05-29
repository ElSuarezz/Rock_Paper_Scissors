// write a function that randomly returns either "rock", "paper" or "scissors"
    //get a random number from 0 to 2
    // assign a string to each number


//write a function that prompts the user to choose from "rock", "paper" or "scissors"    
    //get a variable to prompt the question
    //


    let humanScore = 0;
    let computerScore = 0;



    const paperButton = document.querySelector("#Paper");
    paperButton.addEventListener("click", () => {
        playRound('Paper')
    })
    const rockButton = document.querySelector("#Rock");
    rockButton.addEventListener("click", () => {
        playRound('Rock')
    })
    const scissorsButton = document.querySelector("#Scissors");
    scissorsButton.addEventListener("click", () => {
        playRound('Scissors')
    });
    
    
    function getComputerChoice(randomChoice) {
        const value =Math.floor(Math.random()*3) +1;
            if(value===1) {
                randomChoice = "Paper";
    
            }else if (value===2) {
                randomChoice = "Scissors";
    
            }else if (value===3) {
                randomChoice = "Rock";
            }
            return randomChoice;
            
    }   
      
            
    
    function playRound(humanChoice) {

            const computerChoice = getComputerChoice();
            
            if(humanChoice===computerChoice) {
            console.log("It's a Draw!");
    
            }else if(humanChoice==="Rock" && computerChoice==="Scissors" 
            || humanChoice==="Paper" && computerChoice==="Rock"
            || humanChoice==="Scissors" && computerChoice==="Paper") {
    
            humanScore++;
            console.log("You win! Your Score is now " + humanScore)  
            }else {
            computerScore++
            console.log("You lose! The computer's Score is now " + computerScore)
            }
        
     }


 const humanResult = document.querySelector("#HumanResult");
 humanResult.textContent = `Human Score : ${humanScore}`;   
//      function playGame() {
    
//         if(humanScore===5){
//             console.log("You won the match!");
    
//         }else if(computerScore===5) {
//             console.log("Unfortunately, you lost the match.")
        
//         }
    
//     }
    
    

// playGame();