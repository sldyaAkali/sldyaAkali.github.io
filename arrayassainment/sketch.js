// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
const SPAWNX = 0;
const SPAWNY = 400;
let ms = 40;
let hp = 468;
let apr = 20;
let adr = 20;
let ad = 70;
let ap = 0;
let player;
let startmoving = false;
let pX;
let pY;
let vx;
let vy;
let desti = [];
let moving = false;
function preload(){
  player = loadImage("akali.png");
}
function setup() {
  
  createCanvas(windowWidth, windowHeight);
  
  spawnchampion();
  
}

function draw() {
  background(220);
  displayP();

}

function keyPressed(){
  if (key === 'a'){
    startmoving = true;
    moveIni();
  }

  
}

function moveP(){
  if  (moving === true ){
    while (pX!==desti.destiX&&pY!==desti.destiY){
      let sum = desti.destiX-pX+(desti.destiY-pY);
      pX = (desti.destiX-pX)/abs.sum*ms;
      pY += (desti.destiY-pY)/abs.sum*ms;
    }

  }
}


function displayP(){
  image(player,pX,pY);
  moveP();
}
function spawnchampion(){
  image(player,SPAWNX,SPAWNY);
  pX = SPAWNX;
  pY = SPAWNY;
}




function moveIni(){
  let destination = {
    destiX: mouseX,
    destiY:mouseY,
  };
  desti.push(destination);
  startmoving = false;
  moving = true;
}