function getComputerChoice(){
    let randomChoice = Math.floor((Math.random()*3)) + 1;
    let gestureString;
    switch(randomChoice){
        case 1: 
            gestureString = "rock"; break;
        case 2:
            gestureString = "paper"; break;
        case 3:
            gestureString = "scissors"; break;
        default:
            gestureString = "Error: Invalid value. Value should be from 1-3";
        
    }

    return gestureString;
}

function getHumanChoice(){
    let humanChoice = prompt('Enter rock, paper, or scissors:');
    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == computerChoice){
        tieEvent(humanChoice);
    }
    else if (humanChoice == 'rock'){
        if (computerChoice == 'scissors'){
            winEvent('Rock beats scissors.');
        }
        else {
            lossEvent('Paper beats rock.');
        }
    }
    else if (humanChoice == 'paper'){
        if (computerChoice == 'rock'){
            winEvent('Paper beats rock.');
        }
        else {
            lossEvent('Scissors beats paper.');
        }
    }
    else if(humanChoice == 'scissors'){
        if (computerChoice == 'paper'){
            winEvent("Scissors beats paper.");
        }
        else {
            lossEvent('Rock beats scissors.')
        }
    }
}
function tieEvent(gestureString){
    let resultText = "Tie! No one wins. You both chose " + gestureString + ". ";
    let currentScoreText = getCurrentScore();
    let finalScoreText = "";

    editDivText(resultText, currentScoreText, finalScoreText);
}
function winEvent(winReason){
    humanScore++;
    let resultText = "You win! " + winReason;
    let currentScoreText = getCurrentScore();
    let finalScoreText = checkWinCondition();

    editDivText(resultText, currentScoreText, finalScoreText);

}

function lossEvent(lossReason){
    computerScore++; 
    let resultText = "You lose! " + lossReason;
    let currentScoreText = getCurrentScore(); 
    let finalScoreText = checkWinCondition();

    editDivText(resultText, currentScoreText, finalScoreText);
}

function getCurrentScore(){
    return `Your Score: ${humanScore}<br></br>Computer Score: ${computerScore}`;
}

function editDivText(resultText, currentScoreText, finalScoreText){
    resultDiv.textContent = resultText;
    currentScoreDiv.innerHTML = currentScoreText;
    finalScoreDiv.innerHTML = finalScoreText;
}

function checkWinCondition(){
    let resultString = "";    
    if (humanScore == 5 || computerScore == 5){
        resultString = `==== Final Score ====<br></br>User: ${humanScore}<br></br>Computer: ${computerScore}<br></br>`;

        let winDiff;
        if (humanScore == computerScore){
            resultString += "Tie! No one wins this game";
        }
        else if (humanScore > computerScore){
            winDiff = humanScore - computerScore;
            resultString += `You win this game by ${winDiff} points!`;
        }
        else{
            winDiff = computerScore - humanScore;
            resultString += `You lost this game by ${winDiff} points!`;
        }
        
        resultString += "<br></br>Resetting scores..."
        humanScore = 0;
        computerScore = 0;
    }

    return resultString;
}

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

const resultDiv = document.createElement("div");
const currentScoreDiv = document.createElement("div");
const finalScoreDiv = document.createElement("div"); 

rockButton.addEventListener("click", () => {
    const humanChoice = "rock";
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);

});

paperButton.addEventListener("click", () => {
    const humanChoice = "paper";
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
});

scissorsButton.addEventListener("click", () => {
    const humanChoice = "scissors";
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
});

document.body.appendChild(rockButton);
document.body.appendChild(paperButton);
document.body.appendChild(scissorsButton);
document.body.appendChild(resultDiv);
document.body.appendChild(currentScoreDiv);
document.body.appendChild(finalScoreDiv);

let humanScore = 0;
let computerScore = 0;