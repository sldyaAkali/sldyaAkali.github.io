// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
const SPAWNX = 0;
const SPAWNY = 400;
let resource = 200
let health = 468;
let apr = 20;
let adr = 20;
let attackdamage = 70;
let abilitypower = 0;
let position;
let destination;
let speed = 3.75;

let stat = []
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
  
  updatestat()
  
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

function updatestat(){
  let s ={
    hp: health,
    power: resource,
    //mana: resource,
    ar: adr,
    mr:apr,
    ad: attackdamage,
    ap: abilitypower,
    ms: speed,
  }
  stat.push(s)
}
