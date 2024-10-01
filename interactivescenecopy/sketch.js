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
  ccolor = color(0,0,0)
  circles = [];
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

  fill(ccolor);
  ellipse(mouseX,mouseY,r);
  
}


function mouseWheel(event){

  let direction = event.delta;
  

  
  if (direction>0&&r>2){
    r = r-5;
  }
  else{
    r=r+5;
  }
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





function keyPressed(){
  if (key==="e"){
    clear();
    setup();
  }
  
  if (key === "i"){
    r += 5;
  }
  else if (key === "d") {
    r = max(5, r - 5); 
  }
  
  if (key==="c"){
    ccolor = color(random(255), random(255), random(255));
    // fill_colorR = random(0,255);
    // fill_colorB = random(0,255);
    // fill_colorG = random(0,255);
    // ccolor = (fill_colorR,fill_colorG,fill_colorB)
  }
}

function memorize(x,y){
  circles.push({ x: x, y: y, size: r, color: ccolor });
}
