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
    const playAgain =document.querySelector("#PlayAgain");
    playAgain.addEventListener("click", () => {
        window.location.reload()
        return false
        
        })
    
    
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
            const humanResult = document.querySelector("#HumanResult");
            const result = document.querySelector("#Result");
            const computerResult = document.querySelector("#ComputerResult");

            if(humanChoice===computerChoice) {
                result.textContent = "It's a tie!";
        
                }else if(humanChoice==="Rock" && computerChoice==="Scissors"){
                  result.textContent = ("The computer chose Scissors. You won this round!")
                  humanScore++;
                } 
                else if(humanChoice==="Paper" && computerChoice==="Rock"){
                  result.textContent = ("The computer chose Rock. You won this round!")
                  humanScore++;
                }
                else if(humanChoice==="Scissors" && computerChoice==="Paper") {
                   result.textContent = ("The computer chose Paper.You won this round!")
                   humanScore++;
                }
                else if(humanChoice==="Rock" && computerChoice==="Paper"){
                    result.textContent= ("The computer chose Paper. You lost this round!")
                    computerScore++
                }
                else if(humanChoice==="Paper" && computerChoice==="Scissors"){
                    result.textContent= ("The computer chose Scissors. You lost this round!")
                    computerScore++
                }
                else if(humanChoice==="Scissors" && computerChoice==="Rock"){
                    result.textContent= ("The computer chose Rock. You lost this round!")
                    computerScore++
                } 
                
                humanResult.textContent = `Human Score : ${humanScore}`;
                computerResult.textContent = `Computer Score : ${computerScore}`;
    
                if(humanScore===5) {
                    result.textContent = ("You have won the game! Congratulations!")
                }
                else if(computerScore===5) {
                    result.textContent = ("You have lost the game! Better luck next time!")
                }

            if(computerScore===5 || humanScore===5) {
                paperButton.disabled =true
                scissorsButton.disabled=true
                rockButton.disabled=true
            }
                
     }
         
 
