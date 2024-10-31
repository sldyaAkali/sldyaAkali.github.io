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
let blank = 0
const MINES = 25
let mines = []
const MINE = 1
function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = gridinitial(cols,rows)
  displaygridinitial()
  generatemines()
}

function draw() {

  displaygridinitial()
}






function gridinitial(cols, rows) {
  let arr = [];
  for (let y = 0; y < rows; y++) {
    arr.push([])
    for (let x = 0; x < cols; x++){
      arr[y].push(blank)
    }
  }
  return arr;
}

function displaygridinitial(){
  for (let y=0;y<rows;y++){
    for (let x=0;x<cols;x++){
      if (grid[y][x]===blank){
        fill("green")
      }
      else if(grid[y][x]===MINE){
        fill ('blue')
      }
      square(x*cellSize,y*cellSize,cellSize)
    }
  }
}



function generatemines(){
  let placedMines = 0
  while (placedMines < MINES) {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    if (grid[y][x] !== MINE) {
      grid[y][x] = MINE;
      placedMines +=1;
    }
  }
  
}