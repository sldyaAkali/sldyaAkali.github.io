// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
const SPAWNX = 0;
const SPAWNY = 400;

//let hp = 468;
//let apr = 20;
//let adr = 20;
//let ad = 70;
//let ap = 0;
let position;
let destination;
let speed = 3.75;


function preload(){
  player = loadImage("akali.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  position = createVector(SPAWNX, SPAWNY); 
  destination = createVector(copy); 
}

function draw() {
  background(220);
  

  
  move()
  image(player,position.x,position.y)
 
}

function mousePressed() {
 
  destination.set(mouseX, mouseY);
}

function move(){
  let direction = p5.Vector.sub(destination, position);
  if (direction.mag() > 1) {
    direction.setMag(speed);
    position.add(direction); 
  }
}
