// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theShapes = []

class Shape{
  constructor(x,y,color){
    this.x = x;
    this.y=y;
    this.theColor = color;
  }
  display(){
    noStroke();
    fill(this.theColor);

  }
  move(){
    this.x+=random(-2,2);
    this.y+= random(-2,2);
  }

}

class Circle extends Shape{
  constructor(x,y,theColor,radius){
    super(x,y,color)
    this.radius = radius
  }

  display(){
    super.display()
    circle(this.x,this.y,this.radius*2)
  }
}

class Square extends Shape{
  constructor(x,y,theColor,size){
    super(x,y,theColor)
    this.size = size
  }
  display(){
    super.display()
    square(this.x,this.y,this.size)
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i =0;i<20;i++){
    if (random(100)<50){
      let circle = new Circle(random(width),random(height),(random(255),random(255),random(255)),random(20,50))
      theShapes.push(circle)
    }
    else{
      let square = new Square(random(width),random(height),(random(255),random(255),random(255)),random(20,50))
      theShapes.push(square)
    }
  }
}

function draw() {
  background(220);
  for (let s of theShapes){
    s.move()
    s.display()
    
  }
}
