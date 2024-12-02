// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let highestClick = 0
let numberOfClicks = 0
function setup() {
  createCanvas(windowWidth, windowHeight);
  if (getItem("highest")){
    highestClick = getItem("highest")
  }
}

function draw() {
  background(220);
  displayClicks()
  displayHighest()
}


function mousePressed(){
  numberOfClicks++
  if (numberOfClicks >highestClick){
    highestClick = numberOfClicks
    storeItem("highest",highestClick)
  }
}

function displayClicks(){
  fill("black")
  textSize(75)
  text(numberOfClicks,100,height/2)
}

function displayHighest(){
  fill("black")
  textSize(75)
  text(highestClick,400,height/2)
}