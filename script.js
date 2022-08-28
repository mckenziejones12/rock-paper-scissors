// functions
function randomPlay() {
  const handChoices = ["rock", "paper", "scissors"];
  const randomDecimal = Math.random() * handChoices.length;
  const randomWholeNumber = Math.floor(randomDecimal);
  return handChoices[randomWholeNumber];
}

/*
 parameter 1 - playerSelection
 Selection of the player

 parameter 2 - computerSelection
 Selection of the computer

 Returns:
 user or computer - depending on who wins
*/
function playRound(playerSelection, computerSelection) {
  const lowerCaseUserSelection = playerSelection.toLowerCase();
  const USER = "user";
  const COMPUTER = "computer";
  const TIE = "tie";

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

  return TIE;
}

// variables
let userScore = 0;
let computerScore = 0;
let plays = 0;

function updateScore(whoWon) {
  plays++;
  const finalScore = document.querySelector("#finalScore");

  if (plays >= 5) {
    if (userScore > computerScore) {
      // show user won
      finalScore.textContent = "User won!";
    } else if (computerScore > userScore) {
      // show computer won
      finalScore.textContent = "Computer won!";
    } else {
      finalScore.textContent = "Tie game!";
    }
    return;
  }

  // scoreboard elements
  const userScoreboard = document.querySelector("#userScoreH3");
  const computerScoreboard = document.querySelector("#computerScoreH3");

  if (whoWon === "user") {
    userScore++;
  } else if (whoWon === "computer") {
    computerScore++;
  }

  // Update scoreboards
  userScoreboard.textContent = `User Score: ${userScore}`;
  computerScoreboard.textContent = `Computer Score: ${computerScore}`;
}

// Create our elements that go on our page
// Create a div to hold results
const div = document.createElement("div");
div.style.border = "1px solid black";
div.style.height = "200px";
div.style.overflow = "scroll";

// Create two h3's to show the running score
const userScoreH3 = document.createElement("h3");
userScoreH3.id = "userScoreH3";
userScoreH3.textContent = "User Score: 0";

const computerScoreH3 = document.createElement("h3");
computerScoreH3.id = "computerScoreH3";
computerScoreH3.textContent = "Computer Score: 0";

// Final score element
const finalScore = document.createElement("h1");
finalScore.id = "finalScore";

// Page body
const body = document.querySelector("body");

// 3 buttons (rock/paper/scissors)
const btn1 = document.createElement("button");
btn1.textContent = "rock";

const btn2 = document.createElement("button");
btn2.textContent = "paper";

const btn3 = document.createElement("button");
btn3.textContent = "scissors";

// Define event listeners
btn1.addEventListener("click", function (event) {
  const paragraph = document.createElement("p");
  const userSelection = event.target.innerText;
  const compSelection = randomPlay();

  if (plays >= 5) {
    return;
  }
  // Play a round
  const winner = playRound(userSelection, compSelection);

  // Update our paragraph text
  paragraph.textContent = winner;

  // Add to results
  div.appendChild(paragraph);

  // Check and update score
  updateScore(winner);
});

btn2.addEventListener("click", function (event) {
  const paragraph = document.createElement("p");
  const userSelection = event.target.innerText;
  const compSelection = randomPlay();
  if (plays >= 5) {
    return;
  }

  const winner = playRound(userSelection, compSelection);

  paragraph.textContent = winner;

  div.appendChild(paragraph);

  updateScore(winner);
});

btn3.addEventListener("click", function (event) {
  const paragraph = document.createElement("p");
  const userSelection = event.target.innerText;
  const compSelection = randomPlay();
  if (plays >= 5) {
    return;
  }

  const winner = playRound(userSelection, compSelection);

  paragraph.textContent = winner;

  div.appendChild(paragraph);

  updateScore(winner);
});

// Append things to page
body.appendChild(btn1);
body.appendChild(btn2);
body.appendChild(btn3);
body.appendChild(div);
body.appendChild(userScoreH3);
body.appendChild(computerScoreH3);
body.appendChild(finalScore);
