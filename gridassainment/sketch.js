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

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = gridinitial(cols,rows)
  displaygridinitial()
  mines = generatemines()
}

function draw() {
  
  displaygrid()
}

function mousePressed(){
  generatemines()
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
      // if(grid[y][x]===mine){

      // }
      square(x*cellSize,y*cellSize,cellSize)
    }
  }
}



function generatemines(){
  let arr = []
  for (let i=0;i<MINES;i++){
    let x = floor(random(0,10))
    let y = florr(random(0,10))
    grid[y][x]===1
  }
  
}