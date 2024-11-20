// Nodes Demo
// Michael Zhu
// Nov 20, 2024
// mr scheuyasgiudiuahsdiuahsdiusahduiashduiahdsiuahdsaiudhaius periof 4 comp sci


// - describe what you did to take this project "above and beyond" <------nigger
let points = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnPoint(width/2,height/2)
}

function draw() {
  background("white");
  for (let p of points){
    p.display()
    p.update(points)
  }
}

function mousePressed(){
  spawnPoint(mouseX,mouseY)
}

function spawnPoint(x,y){
  let point = new MovingPoint(x,y)
  points.push(point)
}

class MovingPoint{
  constructor(x,y){
    this.x = x
    this.y = y
    this.speed = 5
    this.radius = 15
    this.color = color(random(255),random(255),random(255))
    this.xTime = random(1000)
    this.yTime = random(1000)
    this.deltaTime = 0.01
    this.reach = 150
  }

  display(){
    fill(this.color)
    circle(this.x,this.y,this.radius*2)
  }

  move(){
    let dx = noise(this.xTime)
    let dy = noise(this.yTime)

    this.dx = map(dx,0,1,-this.speed,this.speed)
    this.dy = map(dy,0,1,-this.speed,this.speed)

    this.x+=this.dx
    this.y+=this.dy

    this.xTime += this.deltaTime
    this.yTime += this.deltaTime
    
  }

  wrapAround(){
    if (this.x<0){
      this.x += width
    }
    if (this.x>width){
      this.x -=width
    }
    if (this.y<0){
      this.x += height
    }
    if (this.x>height){
      this.x -=height
    }
  }

  connectTo(pointsArray){
    for (let p of pointsArray){
      if (this !== p){
        let distance = dist(this.x,this.y,p.x,p.y)
        if (distance<this.reach){
          stroke(this.color)
          line(this.x,this.y,p.x,p.y)
        }
      }
    }
  }
  
  update(ps){
    this.move()
    this.wrapAround()
    this.connectTo(ps)
  }

  adjustSizeWithMouse(){
    let distance = dist(this.x,this.y,mouseX,mouseY)
    if (distance<this.reach){
      this.radius
    }
    else{
      this.radius = 15
    }
  }
}