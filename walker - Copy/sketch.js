// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
class Walker {
  constructor(x,y,color){
    this.x=x
    this.y=y
    this.v=8
    this.r = 3
    this.color = color

  }

  display(){
    fill(this.color)
    circle(this.x,this.y,this.r*2)
  }

  move(){
    let i = random(100)
    if(i<25){
      this.y-=this.v
    }
    else if (i<50){
      this.y+=this.v
    }
    else if (i<75){
      this.x+=this.v
    }
    else if (i<100){
      this.x-=this.v
    }
  }
}


let walkers = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  let walker = new Walker(width/2,height/2,"red")
  walkers.push(walker)
}

function draw() {

  for (let w of walkers){
    w.move()
    w.display()
    
  }

}

function mousePressed(){
  let randomColor = color(random(255),random(255),random(255))
  let walker = new Walker(mouseX,mouseY,randomColor)
  walkers.push(walker)
}