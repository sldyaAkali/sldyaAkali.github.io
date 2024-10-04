// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const SIZE = 20;

let pixelarray=[];
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let x = 0; x<width; x+=SIZE){
    for (let y=0;y<height;y+=SIZE){

      let pixel = spawn(x,y)
      pixelarray.push(pixel)
    }

  }
}

function draw() {
  background(220);
  for (let tile of pixelarray){

    line(tile.x1,tile.y1, tile.x2,tile.y2)
  }
}


function spawn(x,y){
  let pixel;
  let e = random(0,100)
  if (e<50){
    pixel = {
      x1: x- SIZE/2,
      y1: y-SIZE/2,
      x2: x+ SIZE/2,
      y2: y+SIZE/2,
  }}
  else{
    pixel = {
      x1: x- SIZE/2,
      y1: y+SIZE/2,
      x2: x+ SIZE/2,
      y2: y-SIZE/2,
  }
  }
  return pixel
}