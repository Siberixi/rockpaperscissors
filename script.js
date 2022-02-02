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
    let computerSelection = computerPlay();
    if(playRound(playerSelection, computerSelection).charAt(0) == "W"){
        playerScore++;
        results.textContent = (playRound(playerSelection, computerSelection));
        score.textContent = `Player: ${playerScore} / Computer: ${computerScore}`;
        playerSelection = "";
    }
    else if(playRound(playerSelection, computerSelection).charAt(0) == "L"){
        computerScore++;
        results.textContent = (playRound(playerSelection, computerSelection));
        score.textContent = `Player: ${playerScore} / Computer: ${computerScore}`;
        playerSelection = "";
    }
    else{
        results.textContent = `${playRound(playerSelection, computerSelection)}`;
        score.textContent = `Player: ${playerScore} / Computer: ${computerScore}`;
        playerSelection = "";
    }
    if(playerScore > computerScore && playerScore === 5){
        score.textContent = `You beat the computer ${playerScore} to ${computerScore}`;
    }
    else if(computerScore > playerScore && computerScore === 5){
        score.textContent = `The computer beat you ${computerScore} to ${playerScore}`;
    }
}

let playerSelection = "";
let playerScore = 0;
let computerScore = 0;
const results = document.querySelector("#results");
const score = document.querySelector("#score");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
rock.addEventListener('click', () => {
    playerSelection = "rock";
    playGame();
});

paper.addEventListener('click', () => {
    playerSelection = "paper";
    playGame();
});

scissors.addEventListener('click', () => {
    playerSelection = "scissors";
    playGame();
});