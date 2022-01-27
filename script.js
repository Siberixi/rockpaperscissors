function computerPlay(){
    let computerChoice = Math.floor(Math.random() * 3);
    if(computerChoice == 0) return "rock";
    else if(computerChoice == 1) return "paper";
    else return "scissors";
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == "rock" && computerSelection == "rock") return "Tie, rock vs rock";
    if(playerSelection == "rock" && computerSelection == "paper") return "Loss, paper beats rock";
    if(playerSelection == "rock" && computerSelection == "scissors") return "Win, rock beats scissors";
    if(playerSelection == "paper" && computerSelection == "rock") return "Win, paper beats rock";
    if(playerSelection == "paper" && computerSelection == "paper") return "Tie, paper vs paper";
    if(playerSelection == "paper" && computerSelection == "scissors") return "Loss, scissors beats paper";
    if(playerSelection == "scissors" && computerSelection == "rock") return "Loss, rock beats scissors";
    if(playerSelection == "scissors" && computerSelection == "paper") return "Win, scissors beats paper";
    if(playerSelection == "scissors" && computerSelection == "scissors") return "Tie, scissors vs scissors";
}

function playGame(){
    let playerScore = 0;
    let computerScore = 0;
    let round = 0;
    while(round < 5){
        let playerSelection = prompt("Rock, Paper, or Scissors? ").toLowerCase();
        let computerSelection = computerPlay();
        if(playRound(playerSelection, computerSelection).charAt(0) == "W"){
            console.log(playRound(playerSelection, computerSelection));
            playerScore++;
        }
        else if(playRound(playerSelection, computerSelection).charAt(0) == "L"){
            console.log(playRound(playerSelection, computerSelection));
            computerScore++;
        }
        else{
            console.log(playRound(playerSelection, computerSelection));
        }
        round++;
    }
    if(playerScore > computerScore){
        console.log(`You beat the computer ${playerScore} to ${computerScore}`);
    }
    else if(computerScore > playerScore){
        console.log(`The computer beat you ${computerScore} to ${playerScore}`)
    }
    else{
        console.log("You tied the computer");
    }
}

playGame();