//Global Variables
let playerScore = 0, computerScore = 0;
let userName = "";

// Check if input is valid and lowercase string
const getPlayerSelection = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    return false;
  }
};

// Get the computer's choice
const computerPlay = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

//Get higher score
const getHigherScore = (playerScore, computerScore) => {
  if(playerScore > computerScore){
    console.log(`${userName} won the game!`);
  } else if(computerScore > playerScore){
    console.log(`Better luck next time`);
  } else {
    console.log("The game is a tie");
  }
}

// Get winner
const getWinner = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    playerScore++;
    computerScore++;
    return "The round is a tie.";
  }
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
      return "You lose! paper beats rock \n";
    } else {
      playerScore++;
      return "You won! rock beats scissors \n";
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      computerScore++;
      return "You lose! scissors beats paper \n";
    } else {
      playerScore++;
      return "You won! paper beats rock \n";
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      return "You lose! rock beats scissors \n";
    } else {
      playerScore++;
      return "You won! scissors beats paper \n";
    }
  }
};

// Play a round
const playRound = () => {
  let input = prompt("Enter rock, paper or scissors");
  let playerSelection = getPlayerSelection(input);

  while (playerSelection === false) {
    input = prompt("Invalid input, Please enter rock, paper or scissors");
    playerSelection = getPlayerSelection(input);
  }

  let computerSelection = computerPlay();
  console.log(`You chose: ${playerSelection}`);
  console.log(`The computer chose: ${computerSelection}`);
  console.log(getWinner(playerSelection, computerSelection));
};

// Score Reset if new game started
const startOver = () => {
  playerScore = 0;
  computerScore = 0;
}

// Play the game
const playGame = () => {
  for (let i=1; i<=5; i++){
    console.log("Round " + i);
    playRound();
    console.log("\n");
  }
  console.log(`Computer: ${computerScore} | ${userName}: ${playerScore}`);
  getHigherScore(playerScore, computerScore);

  console.log("\nPress any key to start a new game");
  document.addEventListener('keyup', event => {
    console.clear();
    startOver();
    playGame();
  });
}

userName = prompt("Please enter your name to start the game:");
playGame();

