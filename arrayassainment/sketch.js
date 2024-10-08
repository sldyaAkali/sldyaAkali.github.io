// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
const SPAWNX = 0;
const SPAWNY = windowHeight
let ms = 3.85;
let hp = 468
let apr = 20
let adr = 20
let ad = 70
let ap = 0
let player;
let move = false;
let pX;
let pY;
function setup() {
  player = loadImage("akali.png")
  createCanvas(windowWidth, windowHeight);
  spawnchampion()
  
}

function draw() {
  background(220);

}

function mouseClicked(){
  if (mouseButton === RIGHT){
    move = true
  }
  
}

function moving(){

}

function spawnchampion(){
  image(akali,SPAWNX,SPAWNY)
  pX = SPAWNX
  pY = SPAWNY
}
