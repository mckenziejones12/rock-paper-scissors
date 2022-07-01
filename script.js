function computerPlay() {
  const handChoices = ["rock", "paper", "scissors"];
  const randomDecimal = Math.random() * handChoices.length;
  const randomWholeNumber = Math.floor(randomDecimal);
  return handChoices[randomWholeNumber];
}

computerPlay();

let userSelection = "paper";
const randomSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
  const lowerCaseUserSelection = playerSelection.toLowerCase();

  // user selection is rock
  if (lowerCaseUserSelection === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats rock!";
  }
  if (lowerCaseUserSelection === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats scissors!";
  }
  if (lowerCaseUserSelection === "rock" && computerSelection === "rock") {
    return "You Tie!";
  }
  // user selection is paper
  if (lowerCaseUserSelection === "paper" && computerSelection === "paper") {
    return "You Tie!";
  }
  if (lowerCaseUserSelection === "paper" && computerSelection === "scissors") {
    return "You Lose! Scissors beats paper!";
  }
  if (lowerCaseUserSelection === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats rock!";
  }
  // user selection is scissors
  if (lowerCaseUserSelection === "scissors" && computerSelection === "paper") {
    return "You Win! Scissors beats paper!";
  }
  if (
    lowerCaseUserSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return "You Tie!";
  }
  if (lowerCaseUserSelection === "scissors" && computerSelection === "rock") {
    return "You Lose! Rock beats scissors!";
  }
}

console.log(playRound(userSelection, randomSelection));
