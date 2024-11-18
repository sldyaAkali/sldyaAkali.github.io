// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
const P_PER_C = 50


class Particle{
  constructor(x,y){
    this.x = x
    this.y = y
    this.dx = random(-5,5)
    this.dy = random(-5,5)
    this.size = 5
    this.r = random(255)
    this.g = random(255)
    this.b = random(255)
    this.opacity = 255

  }
  display(){
    fill(this.r,this.g,this.b,this.opacity)
    circle(this.x,this.y,this.size)
  }

  update(){
    this.x+=this.dx
    this.y+=this.dy
    this.opacity--
  }


  isDead(){
    return this.opacity <=0
  }
}

let fireworks = []


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let f of fireworks){
    if (f.isDead()){
      let index = fireworks.indexOf(f)
      fireworks.splice(index,1)
    }
    else{
      f.update()
      f.display()
      noStroke()
    }
    
  }
}



function mousePressed(){
  for (let i = 0;i<P_PER_C;i++){
    let p = new Particle(mouseX,mouseY)
    fireworks.push(p)
  }
}