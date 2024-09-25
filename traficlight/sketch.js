let s = "red"
let t= 0
const GREENT = 3000
const YELLOWT=1000
const REDT= 4000
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
  state()
  display()
}

function state(){
  if (s === "green" && millis()>t+ GREENT){
    s = "yellow"
    t = millis()
  }
  else if (s === "yellow" && millis()>t+ YELLOWT){
    s = "red"
    t = millis()}
  else if (s === "red" && millis()>t+ REDT){
      s = "green"
      t = millis()}
}

function display(){
  if (s === "green"){
    fill("green")
    ellipse(width/2, height/2 + 65, 50, 50);

  }
  else if (s==="yellow"){
    fill("yellow")
    ellipse(width/2, height/2, 50, 50);
  }
  else if (s==="red"){
    fill("red")
    
    ellipse(width/2, height/2 - 65, 50, 50)
  }
}



function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}

