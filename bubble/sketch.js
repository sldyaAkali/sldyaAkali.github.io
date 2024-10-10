// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let bubbles = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0;i<5;i++){
    spawn()
  }
  window.setInterval(spawn,100)
}

function draw() {
  background(220);
  display()
  move2()


}

function display(){
  for (let bubble of bubbles){
    noStroke()
    fill(bubble.r,bubble.g,bubble.b)
    circle(bubble.x,bubble.y,bubble.radius*2)
  }
}


function move(){
  for(let b of bubbles){
    let d = random(100)
    if (d<50){
      b.y -=b.speed

    }
    else if(d<75){
      b.y += b.speed
    }

    else{
      b.x -=b.speed
    }
  }
}


function move2(){
  for (let b of bubbles){
    b.x = noise(b.timeX)*width
    b.y = noise(b.timeY)*height
    b.timeX += b.deltaTime
    b.timeY += b.deltaTime
  }
}

function mousePressed(){
  for (let b of bubbles){
    if (clicked(mouseX,mouseY,b)){
      let index= bubbles.indexOf(b)
      bubbles.splice(index,1)
    }
  }
}


function clicked(x,y,bubble){
  let d = dist(x,y,bubble.x,bubble.y)
  return(d<bubble.radius)

}



function spawn(){
  let b = {
    x: random(width),
    y:height+random(50),
    speed:random(2,5),
    radius: random(20, 50),
    r: random(255),
    g:random(255),
    b:random(255),
    alpha:random(255),
    timeX:random(10000000000),
    timeY:random(10000000000),
    deltaTime: 0.003
    }
    bubbles.push(b)
}
