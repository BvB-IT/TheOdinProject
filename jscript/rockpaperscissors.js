function playRound(playerSelection, computerSelection) {
  let playerSelection = prompt("Make your choice");
  let caseConvertUserInput = playerSelection.toLowerCase();
  playerSelection = caseConvertUserInput;

  const choices = ["rock", "paper", "scissors"];

  function getComputerChoice() {
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
  }

  let computerSelection = getComputerChoice();

  if (playerSelection === "paper" && computerSelection === "paper") {
    console.log("It's a tie");
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    console.log("It's a tie");
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    console.log("It's a tie");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("you win congrats");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("you loose better luck next time");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("you win congrats");
  } else if (playerSelection === "scissors " && computerSelection === "rock") {
    console.log("you loose better luck next time");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("you loose better luck next time");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("you win congrats");
  }
}
