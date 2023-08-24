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

let playerSelection;
let computerSelection;
let element;
let result;
// function processClick() {
//   window.playerSelection = this.id;
// }

const choose = document.querySelectorAll(".choose button");
choose.forEach((choose) => {
  choose.addEventListener("click", processClick);
});

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}
computerSelection = getComputerChoice();

function processClick() {
  window.playerSelection = this.id;
  switch (window.playerSelection) {
    case "rock" && computerSelection === "rock":
      result = document.getElementById("matchOutcome").innerHTML = "It's a Tie";
      break;
    case "rock" && computerSelection === "paper":
      result = document.getElementById("matchOutcome").innerHTML = "you loose";
      break;
    case "rock" && computerSelection === "scissors":
      result = document.getElementById("matchOutcome").innerHTML = "you win";
      break;
    case "paper" && computerSelection === "rock":
      result = document.getElementById("matchOutcome").innerHTML = "you win";
      break;
    case "paper" && computerSelection === "paper":
      result = document.getElementById("matchOutcome").innerHTML = "It's a Tie";
      break;
    case "paper" && computerSelection === "scissors":
      result = document.getElementById("matchOutcome").innerHTML = "you loose";
      break;
    case "scissors" && computerSelection === "rock":
      result = document.getElementById("matchOutcome").innerHTML = "you loose";
      break;
    case "scissors" && computerSelection === "paper":
      result = document.getElementById("matchOutcome").innerHTML = "you win";
      break;
    case "scissors" && computerSelection === "scissors":
      result = document.getElementById("matchOutcome").innerHTML = "It's a Tie";
      break;
  }

  // function playRound(playerSelection, computerSelection) {
  //   computerSelection = getComputerChoice();
  // document.addEventListener("click", function (evt) {
  //   element = evt.target;
  //   playerSelection = element + document.getElementById("rock");

  // if (playerSelection === "paper" && computerSelection === "paper") {
  //   // console.log("The computer chose" + " " + computerSelection + " " + "It's a tie");
  //   result = document.getElementById("matchOutcome");
  //   result.textContent = "It's a tie";
  // } else if (playerSelection === "rock" && computerSelection === "rock") {
  //   // console.log("The computer chose" + " " + computerSelection + " " + "It's a tie");
  //   result = document.getElementById("matchOutcome");
  //   result.textContent = "It's a tie";
  // } else if (
  //   playerSelection === "scissors" &&
  //   computerSelection === "scissors"
  // ) {
  //   // console.log("The computer chose" + " " + computerSelection + " " + "It's a tie");
  //   result = document.getElementById("matchOutcome");
  //   result.textContent = "It's a tie";
  // } else if (playerSelection === "paper" && computerSelection === "rock") {
  //   // console.log("The computer chose" + " " + computerSelection + " " + "you win congrats");
  //   result = document.getElementById("matchOutcome");
  //   result.textContent = "you win congrats";
  // } else if (playerSelection === "paper" && computerSelection === "scissors") {
  //   // console.log("The computer chose" + " " + computerSelection + " " + "you loose better luck next time");
  //   result = document.getElementById("matchOutcome");
  //   result.textContent = "You losse, better luck next time";
  // } else if (playerSelection === "scissors" && computerSelection === "paper") {
  //   // console.log("you win congrats");
  //   result = document.getElementById("matchOutcome");
  //   result.textContent = "you win congrats";
  // } else if (playerSelection === "scissors " && computerSelection === "rock") {
  //   // console.log("The computer chose" + " " + computerSelection + " " + "you loose better luck next time");
  //   result = document.getElementById("matchOutcome");
  //   result.textContent = "You losse, better luck next time";
  // } else if (playerSelection === "rock" && computerSelection === "paper") {
  //   // console.log("The computer chose" + " " + computerSelection + " " + "you loose better luck next time");
  //   result = document.getElementById("matchOutcome");
  //   result.textContent = "You losse, better luck next time";
  // } else if (playerSelection === "rock" && computerSelection === "scissors") {
  //   // console.log("The computer chose" + " " + computerSelection + " " + "you win congrats");
  //   result = document.getElementById("matchOutcome");
  //   result.textContent = "You win congrats";
  // }
}

// console.log(`Clicked button: ${element.textContent}`);
// playerSelection = document.getElementById("rock");
// playerSelection = prompt("Make your choice");
// let caseConvertUserInput = playerSelection.toLowerCase();
// playerSelection = caseConvertUserInput;

// switch(playerSelection, computerSelection) {
//   case playerSelection === "rock" && computerSelection === "rock":
//     result = document.getElementById('matchOutcome');
//     result.innerHTML = "It's a tie";
//     break;
//   case playerSelection === "paper" && computerSelection === "paper":
//     result = document.getElementById('matchOutcome').innerHTML = "It's a tie";
//     break;
//   case playerSelection === "scissors" && computerSelection === "scissors":
//     result = document.getElementById('matchOutcome').innerHTML = "It's a tie";
//     break;
//   case playerSelection === "rock" && computerSelection === "paper":
//     result = document.getElementById('matchOutcome').innerHTML = "You lose better luck next time";
//     break;
//   case playerSelection === "rock" && computerSelection === "scissors":
//     result = document.getElementById('matchOutcome').innerHTML = "You win congrats";
//     break;
//   case playerSelection === "paper" && computerSelection === "scissors":
//     result = document.getElementById('matchOutcome').innerHTML = "You lose better luck next time";
//     break;
//   case playerSelection === "paper" && computerSelection === "rock":
//     result = document.getElementById('matchOutcome').innerHTML = "You win congrats";
//   case playerSelection === "scissors" && computerSelection === "rock":
//     result = document.getElementById('matchOutcome').innerHTML = "You lose better luck next time";
//     break;
//   case playerSelection === "scissors" && computerSelection === "paper":
//     result = document.getElementById('matchOutcome').innerHTML = "You win congrats";
//     break;
// }

// result = document.getElementById('matchOutcome').innerText =

//prettier - ignore;

// function game() {
//   let counter = 0;

//   while (counter <= 4) {
//     counter++;
//     playRound();
//     if (counter === 5) break;
//     // return playRound();
//   }
//   console.log("Game over");
// }
