// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let sfx;
let music;

function preload(){
  sfx = loadSound("sfx.mp3")
  music = loadSound("sfx.mp3")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}






function keyPressed(){
  if (!sfx.isPlaying()){
    music.loop();
  }
}


function mousePressed(){
  sfx.play();
}