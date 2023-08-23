"use strict";
// window.onload = function () {
//   alert("page is loaded");
// };

// const playButton = document.getElementById("playBtn");
// playButton.addEventListener("click", game);
// let playerselectionRock = document.getElementById("rock");
// playerselectionRock.addEventListener("click", game);
// let playerselectionPaper = document.getElementById("paper");
// playerselectionPaper.addEventListener("click", game);
// let playerselectionScissors = document.getElementById("scissors");
// playerselectionScissors.addEventListener("click", game);

function playRound(playerSelection, computerSelection) {
  // playerSelection = prompt("Make your choice");
  // let caseConvertUserInput = playerSelection.toLowerCase();
  // playerSelection = caseConvertUserInput;

  const choices = ["rock", "paper", "scissors"];

  function getComputerChoice() {
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
  }

  computerSelection = getComputerChoice();

  //   prettier-ignore

  if (playerSelection === "paper" && computerSelection === "paper") {
    console.log("The computer chose" + " " + computerSelection + " " + "It's a tie");
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    console.log("The computer chose" + " " + computerSelection + " " + "It's a tie");
  } else if (playerSelection === "scissors" && computerSelection === "scissors") {
    console.log("The computer chose" + " " + computerSelection + " " + "It's a tie");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("The computer chose" + " " + computerSelection + " " + "you win congrats");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("The computer chose" + " " + computerSelection + " " + "you loose better luck next time");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("you win congrats");
  } else if (playerSelection === "scissors "&& computerSelection === "rock") {
    console.log("The computer chose" + " " + computerSelection + " " + "you loose better luck next time");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("The computer chose" + " " + computerSelection + " " + "you loose better luck next time");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("The computer chose" + " " + computerSelection + " " + "you win congrats");
  }
}

function game() {
  let counter = 0;

  while (counter <= 4) {
    counter++;
    playRound();
    if (counter === 5) break;
    // return playRound();
  }
  console.log("Game over");
}
