function computerPlay(choice) {
  const handChoices = ["rock", "paper", "scissors"];
  const randomDecimal = Math.random() * handChoices.length;
  const randomWholeNumber = Math.floor(randomDecimal);
  return handChoices[randomWholeNumber];
}
