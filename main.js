let choices = ["Rock","Paper","Scisors"];
let computerChoice = choices[getRandomInt(choices.length)];
let drawScore = 0;
let computerScore = 0;
let userScore = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

document.onkeyup = function(event){
    initGame();
    displayChoices(event);
    let winner = settleWinner(event);
    displayWinner(winner);
    settleScores(winner);
}

function displayChoices(event){
    if (event.key === 'r' || event.key === 's' || event.key === 'p'){
        let cChoice = document.getElementById('computerChoice');
        cChoice.innerHTML = computerChoice;
        if (event.key === 'r'){
            let pChoice = document.getElementById('playerChoice');
            pChoice.innerHTML = 'Rock';
        } else if (event.key === 's'){
            let pChoice = document.getElementById('playerChoice');
            pChoice.innerHTML = 'Scisors';
        } else if (event.key === 'p'){
            let pChoice = document.getElementById('playerChoice');
            pChoice.innerHTML = 'Paper';
        }
    } else {
        let pChoice = document.getElementById('playerChoice');
        pChoice.innerHTML = "nothing because you cant type";
    }
}

function initGame(){
    computerChoice = choices[getRandomInt(choices.length)];
}

function settleWinner(event){
    let winner = 0;
    if (computerChoice === 'Rock'){
        if (event.key === 'r'){
            winner = 'draw';
        } else if (event.key === 's'){
            winner = 'computer';
        } else if (event.key === 'p'){
            winner = 'user';
        }
    } else if (computerChoice === 'Paper'){
        if (event.key === 'r'){
            winner = 'computer';
        } else if (event.key === 's'){
            winner = 'user';
        } else if (event.key === 'p'){
            winner = 'draw';
        }
    } else if (computerChoice === 'Scisors'){
        if (event.key === 'r'){
            winner = 'user';
        } else if (event.key === 's'){
            winner = 'draw';
        } else if (event.key === 'p'){
            winner = 'computer';
        }
    } else {
    }
    return winner;
}

function displayWinner(winner){
    if (winner !== 0){
        elemWinner = document.getElementById('winner');
        elemWinner.innerHTML = winner;
    }
}

function settleScores(winner){
    if (winner !== 0){
        if (winner === "draw"){
            drawScore++;
            document.getElementById('drawScore').innerHTML = drawScore;
        } else if (winner === "computer"){
            computerScore++;
            document.getElementById('computerScore').innerHTML = computerScore;
        } else if (winner === "user"){
            let score = parseInt(document.getElementById('userScore'));
            userScore++;
            document.getElementById('userScore').innerHTML = userScore;
        }
    }
}


