// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x = 200;
let y = 200;
let r = 25
let dx=4


let bgColor= 220
let fill_colorR = 0;
let fill_colorG = 0;
let fill_colorB = 0; 
function setup() {
  createCanvas(400,400);
  background(bgColor);
}


function draw() {
  

  x = mouseX
  y = mouseY
  
  // multicolor()
  changecolor()
}

function mouseWheel(event){

  direction = event.delta
  

  noStroke()
  circle(x,y,r*2)
  if (direction>0&&r>2){
    r = r-5
  }
  else{
    r=r+5
  }
}

function mouseDragged(){
  if (mouseButton===LEFT){
    fill(fill_colorR,fill_colorG,fill_colorB)
    circle(x,y,r*2)
  }
  if (mouseButton===RIGHT){
    noStroke()
    fill(bgColor)
    circle(x,y,r*2)
    
  }
}

function keyPressed(){
  if (key==='e'){
    clear()
    setup()
  }
  if (key==='h'){
    
    rect(0,mouseY,wCanva,r)
  }
  if (key==='v'){
    
    rect(mouseX,0,r,hCanva)
  }
  //  if (key === LEFT_ARROW){
  //     changecolor()
  //  }
}

function multicolor(){
  
  fill_colorR = Math.sqrt(mouseX**2+mouseY**2)/400*255
  fill_colorG = Math.sqrt((400-mouseX)**2+(400-mouseY)**2)/400*255
  fill_colorB = Math.sqrt((mouseX)**2+(400-mouseY)**2)/400*255
}

function changecolor(){
  fill_colorR = random(0,255)
  fill_colorB = random(0,255)
  fill_colorG = random(0,255)
}
