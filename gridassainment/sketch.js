// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let cols = 10; 
let rows = 10; 
let cellSize = 40; 
let grid = []; 
let minesCount = 10;
const blank = 0


function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(220);
}


function gridbackground(cols, rows) {
  let arr = [];
  for (let y = 0; y < rows; y++) {
    arr.push([])
    for (let x = 0; x < cols; x++){
      newGrid[y].push(blank)
    }
  }
  return arr;
}


