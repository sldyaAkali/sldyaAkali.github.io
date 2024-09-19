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
let wCanva = 1000
let hCanva = 1000
let bgColor= 220
let fill_color = "black"
function setup() {
  createCanvas(wCanva,hCanva);
  background(bgColor);
}


function draw() {
  

  x = mouseX
  y = mouseY
  
  
  
}

function mouseWheel(event){
  direction = event.delta
  
  noFill()
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
    fill(fill_color)
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
}


