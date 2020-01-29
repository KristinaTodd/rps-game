

let userChoice
let choice = ["rock", "paper", "scissors"]
let computerChoiceElem = document.getElementById("computer-choice")
let computerChoice = 0;


function drawComputerChoice() {
  computerChoice = Math.floor(Math.random() * choice.length)
  console.log("comp choice number", computerChoice)

  if (computerChoice == 0) {
    document.getElementById("computerChoiceImage").classList.replace("computer", "rock")
  }
  else if (computerChoice == 1) {
    document.getElementById("computerChoiceImage").classList.replace("computer", "paper")
  }
  else {
    document.getElementById("computerChoiceImage").classList.replace("computer", "scissors")
  }
}


function playRock() {

  drawComputerChoice()

  if (computerChoice == 0) {
    console.log("It's a tie!")
  } else if (computerChoice == 1) {
    console.log("You lose!")
  } else {
    console.log("You win!")
  }
}

function playScissors() {

  drawComputerChoice()

  if (computerChoice == 0) {
    console.log("You lose!")
  } else if (computerChoice == 1) {
    console.log("You win!")
  } else {
    console.log("It's a tie!")
  }
}

function playPaper() {

  drawComputerChoice()

  if (computerChoice == 0) {
    console.log("You win!")
  } else if (computerChoice == 1) {
    console.log("It's a tie!")
  } else {
    console.log("You Lose!")
  }
}

