// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let time=0
let x;
let y


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2
  y= height/2
}

function draw() {
  background(220);
  x = noise(time) * width
  y = noise(time+1000)*height
  circle(x,y,50)
  time += 0.01
  
}
