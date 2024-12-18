// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let initialTriangle = [
  {x:500,y:50},
  {x:50, y:700},
  {x:950, y:700}
]

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  serpenski(initialTriangle,3)

  
}


function serpenski(points,dpeth){
  triangle(points[0].x, points[0].y,points[1].x, points[1].y,points[2].x, points[2].y)

  if (dpeth>0){

    serpenski(points[0],midpoint(points[0],points[1]), midpoint(points[0],points[2]),dpeth-1)
  }
}


function midpoint(p1,p2){
  let mx = (p1.x+p2.x)/2
  let my = (p1.y+p2.y)/2

  return {x:mx,y:my}
}