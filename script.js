// ES6 Variables
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// ES6 Arrow Function
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(targetGuess - humanGuess);
  const computerDifference = Math.abs(targetGuess - computerGuess);
  // Conditional Statement
  if (humanGuess < 0 || humanGuess > 9) {
    alert("Next time pick a number between 0 & 9");
  }

  if (humanDifference <= computerDifference) {
    return true;
  }
  return false;
};

// Updates the global variables
const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber += 1;
};
