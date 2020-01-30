
let choice = ["rock", "paper", "scissors"]
let computerChoice = 0;

function startGame() {
  setTimeout(function () {
    document.getElementById("computerChoiceImage").classList.replace("rock", "computer")
    document.getElementById("computerChoiceImage").classList.replace("scissors", "computer")
    document.getElementById("computerChoiceImage").classList.replace("paper", "computer")
    document.getElementById("winning").classList.add("invisible")
    document.getElementById("losing").classList.add("invisible")
    document.getElementById("tie").classList.add("invisible")
  }, 2000)
}

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
    document.getElementById("tie").classList.remove("invisible")
    console.log("It's a tie!")
  } else if (computerChoice == 1) {
    document.getElementById("losing").classList.remove("invisible")
    console.log("You lose!")
  } else {
    document.getElementById("winning").classList.remove("invisible")
    console.log("You win!")
  }

  startGame()
}

function playScissors() {

  drawComputerChoice()

  if (computerChoice == 0) {
    document.getElementById("losing").classList.remove("invisible")
    console.log("You lose!")
  } else if (computerChoice == 1) {
    document.getElementById("winning").classList.remove("invisible")
    console.log("You win!")
  } else {
    document.getElementById("tie").classList.remove("invisible")
    console.log("It's a tie!")
  }

  startGame()
}

function playPaper() {

  drawComputerChoice()

  if (computerChoice == 0) {
    document.getElementById("winning").classList.remove("invisible")
    console.log("You win!")
  } else if (computerChoice == 1) {
    document.getElementById("tie").classList.remove("invisible")
    console.log("It's a tie!")
  } else {
    document.getElementById("losing").classList.remove("invisible")
    console.log("You Lose!")
  }

  startGame()
}

