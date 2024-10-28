// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let grid
const GRIDSIZE = 10
const CELLSIZE = 25
let mines = 0



function setup() {
  createCanvas(windowWidth, windowHeight);
  generateGrid()
}

function draw() {
  background(220);
}


function displayGrid() {
  for (let y = 0; y < GRIDSIZE; y++) {
    for (let x = 0; x < GRIDSIZE; x++) {
      if (grid[y][x] === 1) {
        fill("black");
      }
      else if (grid[y][x] === 0) {
        fill("white");
      }
      square(x * CELLSIZE, y * CELLSIZE, CELLSIZE);
    }
  }
}

function generateGrid(){
  let newGrid = [];
  for (let y = 0; y < GRIDSIZE; y++) {
    newGrid.push([]);
    for (let x = 0; x < GRIDSIZE; x++) {
      if (random(100) < 75) {
        newGrid[y].push(0);
      }
      else {
        newGrid[y].push(1);
        mines +=1
      }
    }
  }
  return newGrid;
}
