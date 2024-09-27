// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let isDrawing = false;



let circles = [];


let ccolor;

let r =25;
let bgColor= 220;
let fill_colorR = 0;
let fill_colorG = 0;
let fill_colorB = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(bgColor);
  
  for (let circle of circles) {
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size);
  }
  if (isDrawing){
    fill(ccolor);
    noStroke();
    ellipse(mouseX, mouseY, r);
  }
  ccolor = (fill_colorR,fill_colorG,fill_colorB);
  fill(ccolor);
  ellipse(mouseX,mouseY,r);
  
}


function mousePressed(){
  isDrawing = true;
  memorize(mouseX, mouseY);
}
 function mouseDragged(){
  memorize(mouseX, mouseY);
 }

function mouseReleased(){
  isDrawing = false;
}


function changecolor(){
  fill_colorR = random(0,255);
  fill_colorB = random(0,255);
  fill_colorG = random(0,255);
}



function keyPressed(){
  if (key==="e"){
    clear();
    setup();
  }
  
  if (key === "i"){
    r += 5;
  }
  else if (key === "d") {
    r = max(5, r - 5); // Prevent negative size
  }
  
  if (key==="c"){
    changecolor();
  }
}

function memorize(x,y){
  circles.push({ x: x, y: y, size: r, color: ccolor });
}
