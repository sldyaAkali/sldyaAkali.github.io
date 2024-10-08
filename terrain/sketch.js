// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let terrain =[];
let someRect;
const NR = 10000
function setup() {
  createCanvas(windowWidth, windowHeight);
  let Wide = width/ NR
  genter(Wide)

}

function draw() {
  background(220);
  for (let someRect of terrain){
   rect(someRect.x,someRect.y,someRect.width,someRect.height) 
  }
  
}

function genter(w){
  let time =0;
  let dt = 0.0001;
  for (let x=0; x<width; x+=w){
    let theHeight = noise (time) *height
    let someRect = spawn(x,theHeight,w)
    terrain.push(someRect)
    time += dt
  }
}
function spawn(left,rheight, rwidth){
  let recta = {
    x: left,
    y: height-rheight,
    width: rwidth,
    height: rheight,


  }
  return recta
}