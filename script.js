let paragraph = document.getElementById(`paragraph`)
let startButton = document.getElementById(`startButton`)
let colors = document.getElementById(`colors`)
let redButton = document.getElementById(`redButton`)
let greenButton = document.getElementById(`greenButton`)
let blueButton = document.getElementById(`blueButton`)

let randomColor
let randomColorName

startButton.addEventListener(`click`, startGame)
redButton.addEventListener(`click`, checkIfRed)
greenButton.addEventListener(`click`, checkIfGreen)
blueButton.addEventListener(`click`, checkIfBlue)

function startGame() {
  
  colors.style.display = `block`
  startButton.style.display = `none`
  displayColor()
}

function displayColor() {

  randomColor = Math.floor(Math.random() * 3)
  randomColorName = Math.floor(Math.random() * 3)

  generateRandomColor()
  generateRandomColorName()

  paragraph.style.color = randomColor
  paragraph.innerHTML = randomColorName
}

function showYouLose() {

  paragraph.style.color = `black`
  paragraph.innerHTML = `You Lose`
  startButton.style.display = `block`
  colors.style.display = `none`
}

function generateRandomColor() {

  if (randomColor == 0) {
    randomColor = `red`
  }
  else if (randomColor == 1) {
    randomColor = `green`
  }
  else {
    randomColor = `blue`
  }
}

function generateRandomColorName() {

  if (randomColorName == 0) {
    randomColorName = `red`
  }
  else if (randomColorName == 1) {
    randomColorName = `green`
  }
  else {
    randomColorName = `blue`
  }
}

function checkIfRed() {

  if (randomColor == `red`) {
    startGame()
  }
  else {
    showYouLose()
  }
}

function checkIfGreen() {

  if (randomColor == `green`) {
    startGame()
  }
  else {
      showYouLose()
  }  
}

function checkIfBlue() {
  
  if (randomColor == `blue`) {
    startGame()
  }
  else {
    showYouLose()
  }
}


