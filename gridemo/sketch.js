// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const GRIDSIZE = 300
let cellsize;
// let grid = [
//   [1,0,1,0],
//   [0,0,1,1],
//   [1,1,1,0],
//   [0,1,1,0],]

let grid;


function setup() {
  createCanvas(windowWidth, windowHeight);
  cellsize = height/GRIDSIZE
  grid = generategrid(GRIDSIZE,GRIDSIZE)
}

function draw() {
  background(220);
  display()
}

function display(){
  for (let y=0;y<GRIDSIZE;y++){
    for(let x =0;x<GRIDSIZE;x++){
      if(grid[y][x]===0){
        fill("black")
      }
      else if(grid[y][x]===1  ){
        fill("white")
      }
      square(x*cellsize,y*cellsize,cellsize)
    }
  }
  }

function generategrid(column,rows){
  let newgrid = []
  for (let y=0;y<rows;y++){
    newgrid.push([])
    for (let x=0;x<column;x++){
      if(random(100)<50){
        newgrid[y].push(1)
      }
      else{newgrid[y].push(0)}
    }
  }
  return newgrid
}