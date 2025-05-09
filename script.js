
let humanScore = 0, computerScore = 0, roundsPlayed = 0; 

function getComputerChoice() {
    function getRandomNumber() {
        return Math.floor(Math.random() * 3); //returns 0, 1, 2
    }
    let randomNumber = getRandomNumber();
    if (randomNumber === 0) {
        return "rock";
      } else if (randomNumber === 1) {
        return "paper";
      } else {
        return "scissors";
      }
}


function playRound(humanChoice, computerChoice){   
        
    humanChoice = String(humanChoice).toLowerCase();

    const computerChoiceElement = document.querySelector('.computer-choice');
    
    computerChoiceElement.textContent = `Computer chose ${computerChoice}`;
                
    if (humanChoice == 'rock' && computerChoice == 'paper') {
        computerScore += 1;
    }
    else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        humanScore += 1;
    }
    else if (humanChoice == 'paper' && computerChoice == 'rock') {
        humanScore += 1;
    }
    else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        computerScore += 1;
    }
    else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        computerScore += 1;
    }
    else if (humanChoice == 'scissors' && computerChoice == 'paper'){
        humanScore += 1;
    }
    else {
        
    }
}


function updateUI() {
    document.querySelector('.result').textContent = `Your score: ${humanScore} \n Computer score: ${computerScore}`;

    roundsPlayed++;

    if(roundsPlayed === 3) {
        if (humanScore > computerScore) {
            alert('Congratulations, You win!!');
        }
        else if (computerScore < humanScore) {
            alert('Computer wins. Better luck next time!!');
        }
        else {
            alert('Its a draw!!')
        }

        roundsPlayed = 0;
        computerScore = 0;
        humanScore = 0;

        document.querySelector('.computer-choice').textContent = '';

        document.querySelector('.result').textContent = `New Game begins!`;

    }




}
document.querySelector('.rock').addEventListener('click', () => { 
    playRound('rock', getComputerChoice());
    updateUI();
});

document.querySelector('.paper').addEventListener('click', () => { 
    playRound('paper', getComputerChoice());
    updateUI();
});
document.querySelector('.scissors').addEventListener('click', () => { 
    playRound('scissors', getComputerChoice());
    updateUI();
});


