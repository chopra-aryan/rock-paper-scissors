
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

    let finalResult = document.querySelector('.final-result');

    if(roundsPlayed === 3) {
        if (humanScore > computerScore) {
            finalResult.textContent = "Congratulations! You win!!"
        }
        else if (computerScore < humanScore) {
            finalResult.textContent = 'Computer wins. Better luck next time!!';
        }
        else {
            finalResult.textContent = 'Its a draw!!';
        }

        document.querySelector('.computer-choice').textContent = '';

        if (!document.querySelector('.new-game-button')) {
            const newGameButton = document.createElement('button');
            newGameButton.textContent = " New Game";
            newGameButton.classList.add('new-game-button');

            newGameButton.addEventListener('click', () => {
                roundsPlayed = 0;
                computerScore = 0;
                humanScore = 0;

                document.querySelector('.result').textContent = '';
                document.querySelector('.final-result').textContent = '';
                newGameButton.remove();
            })
        
            document.body.appendChild(newGameButton);

        }
    }
}



function handlePlayerChoice(choice) {
    if (roundsPlayed >= 3) {
        alert("Game over! Click 'New Game' to play again.");
        return;
    }
    playRound(choice, getComputerChoice());
    updateUI();
}



document.querySelector('.rock').addEventListener('click', () => handlePlayerChoice('rock'));
document.querySelector('.paper').addEventListener('click', () => handlePlayerChoice('paper'));
document.querySelector('.scissors').addEventListener('click', () => handlePlayerChoice('scissors'));


