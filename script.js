// functions
function randomPlay() {
  const handChoices = ["rock", "paper", "scissors"];
  const randomDecimal = Math.random() * handChoices.length;
  const randomWholeNumber = Math.floor(randomDecimal);
  return handChoices[randomWholeNumber];
}

function playRound(playerSelection, computerSelection) {
  const lowerCaseUserSelection = playerSelection.toLowerCase();
  const USER = "user";
  const COMPUTER = "computer";

  // user selection is rock
  if (lowerCaseUserSelection === "rock" && computerSelection === "paper") {
    return COMPUTER;
  }
  if (lowerCaseUserSelection === "rock" && computerSelection === "scissors") {
    return USER;
  }

  // user selection is paper
  if (lowerCaseUserSelection === "paper" && computerSelection === "scissors") {
    return COMPUTER;
  }
  if (lowerCaseUserSelection === "paper" && computerSelection === "rock") {
    return USER;
  }

  // user selection is scissors
  if (lowerCaseUserSelection === "scissors" && computerSelection === "paper") {
    return USER;
  }
  if (lowerCaseUserSelection === "scissors" && computerSelection === "rock") {
    return COMPUTER;
  }
}

// variables
let p1Score = 0;
let p2Score = 0;

// executing code below
for (let i = 0; i < 5; i++) {
  const userSelection = randomPlay();
  const randomSelection = randomPlay();
  const result = playRound(userSelection, randomSelection);

  if (result === "user") {
    p1Score++;
  } else if (result === "computer") {
    p2Score++;
  }

  console.log("Your score is ", p1Score);
  console.log("Computer's score is ", p2Score);
}

if (p1Score > p2Score) {
  console.log("You win!");
} else {
  console.log("Computer wins!");
}
