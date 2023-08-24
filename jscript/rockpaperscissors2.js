// "use strict";

let playerSelection;
let computerSelection;
let element;
let result;
let start;

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

computerSelection = getComputerChoice();

const choose = document.querySelectorAll(".choose button");
choose.forEach((choose) => {
  choose.addEventListener("click", processClick);
});

function processClick() {
  result = "click";
  getComputerChoice();
  window.playerSelection = this.id;
  if (window.playerSelection === "rock" && computerSelection === "rock") {
    result = "It's a Tie";
    document.getElementById("matchOutcome").innerHTML = result;
  } else if (
    window.playerSelection === "rock" &&
    computerSelection === "paper"
  ) {
    result = "you loose";
    document.getElementById("matchOutcome").innerHTML = result;
  } else if (
    window.playerSelection === "rock" &&
    computerSelection === "scissors"
  ) {
    result = "you win";
    document.getElementById("matchOutcome").innerHTML = result;
  } else if (
    window.playerSelection === "paper" &&
    computerSelection === "rock"
  ) {
    result = "you win";
    document.getElementById("matchOutcome").innerHTML = result;
  } else if (
    window.playerSelection === "paper" &&
    computerSelection === "scissors"
  ) {
    result = "you loose";
    document.getElementById("matchOutcome").innerHTML = result;
  } else if (
    window.playerSelection === "paper" &&
    computerSelection === "paper"
  ) {
    result = "It's a Tie";
    document.getElementById("matchOutcome").innerHTML = result;
  } else if (
    window.playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    result = "It's a Tie";
    document.getElementById("matchOutcome").innerHTML = result;
  } else if (
    window.playerSelection === "scissors" &&
    computerSelection === "rock"
  ) {
    result = "you loose";
    document.getElementById("matchOutcome").innerHTML = result;
  } else if (
    window.playerSelection === "scissors" &&
    computerSelection === "paper"
  ) {
    result = "you win";
    document.getElementById("matchOutcome").innerHTML = result;
  }
}

// document.getElementById("matchOutcome").innerHTML = result;
