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
  player.resize(player.width*0.5,player.height*0.5)
  imageMode(CENTER)
}

function draw() {
  background(220);
  
  updatestat()
  displayP()
  move()

 
}

function mousePressed() {
 
  destination.set(mouseX, mouseY);
}


function displayP(){
  image(player,position.x,position.y)

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


function spawnE(){
  let e = {
    x:x,
    y:y,

    alpha:125,
  }
  balla.push(ball)
}