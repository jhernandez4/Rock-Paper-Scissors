function getComputerChoice(){
    let randomChoice = Math.floor((Math.random()*3)) + 1;
    let gestureString;
    switch(randomChoice){
        case 1: 
            gestureString = "rock"; break;
        case 2:
            gestureString = "paper"; break;
        case 3:
            gestureString = "scissor"; break;
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
        console.log('Tie! No one wins.')
        return;
    }

    if (humanChoice == 'rock'){
        if (computerChoice == 'scissors'){
            winEvent('Rock beats scissors.');
        }
        else{
            lossEvent('Paper beats rock');
        }
    }
    else if (humanChoice == 'paper'){
        if (computerChoice == 'rock'){
            winEvent('Paper beats rock.');
        }
        else{
            lossEvent('Scissors beats paper');
        }
    }
    else if(humanChoice == 'scissors'){
        if (computerChoice == 'paper'){
            winEvent("Scissors beats paper");
        }
        else{
            lossEvent('Rock beats scissors')
        }
    }
}

function winEvent(winReason){
    console.log('You win! ' + winReason);
    humanScore++;
}

function lossEvent(lossReason){
    console.log('You lose! '+ lossReason);
    computerScore++;
}

function playGame(){
    for(let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    console.log(`==== Scores ====\nUser: ${humanScore}\nComputer: ${computerScore}\n`);
    
    let winDiff;
    if (humanScore == computerScore){
        console.log("Tie! No one wins this game");
    }
    else if (humanScore > computerScore){
        winDiff = humanScore - computerScore;
        console.log(`You win this game by ${winDiff} points!`);
    }
    else{
        winDiff = computerScore - humanScore;
        console.log(`You lost this game by ${winDiff} points!`);
    }
}

let humanScore = 0;
let computerScore = 0;


playGame();