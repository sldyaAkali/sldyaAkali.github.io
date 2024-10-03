// Project Title
// Your Name
// Date
//
// Extra for Experts:
let balla = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i=0;i<10;i++){
    spawn(width/2,height/2)
  }
}

function draw() {
  background(220);
  

  for (let aball of balla){
    aball.x+=aball.dx
    aball.y+=aball.dy
    if (aball.x > width - aball.r || aball.x<aball.r){
      aball.dx = aball.dx *-1
      
    }
  
    if (aball.y > height - aball.r || aball.y<aball.r){
      aball.dy = aball.dy *-1
      
    }
    noStroke()
    fill(aball.re,aball.gr,aball.bl,aball.alpha)
    circle(aball.x,aball.y,aball.r*2)
  }
    

  
}


function mousePressed(){
  spawn(mouseX,mouseY)
}

function spawn(x,y){
  let ball = {
    x:x,
    y:y,
    r:75,
    dx: random(-5,5),
    dy: random(-5,-5),
    re: random(255),
    gr:random(255),
    bl:random(255),
    alpha:125,
  }
  balla.push(ball)
}