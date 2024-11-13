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
let walker;
let walker1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  walker = new Walker(width/2,height/2,"red")
  walker1= new Walker(300,200,"green")
}

function draw() {

  walker.display()
  walker.move()
  walker1.display()
  walker1.move()
}
