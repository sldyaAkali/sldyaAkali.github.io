let cols = 10; 
let rows = 10; 
let cellSize = 40; 
let grid = []; 
let minesCount = 10;
let blank = 0;
const MINES = 5;
let firstClick = true;
let mines = [];
const MINE = 1;
const BLANKINITIALDISPLAY = 50;
let blanks = [];
const MARKED_MINE = 2;
const REVEALED =3
let markedmines = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = gridinitial(cols, rows);
  displaygridinitial();
}

function draw() {
  checkWin()
}



function mousePressed() {
  let x = Math.floor(mouseX / cellSize);
  let y = Math.floor(mouseY / cellSize);

  if (firstClick) {
    firstClick = false;
    generateMines(x, y);
    revealFirstClickArea(x, y);
  }

  if (grid[y][x] === MINE) {
    gameover();
  } else if (grid[y][x] === blank) {
    revealCell(y, x);
  }
  
}



function keyPressed() {
  if (key === 'r') {
    let x = Math.floor(mouseX / cellSize);
    let y = Math.floor(mouseY / cellSize);

    if (x >= 0 && x < cols && y >= 0 && y < rows) { 
      if (grid[y][x] ===blank||grid[y][x]===MINE) {
        grid[y][x] = MARKED_MINE;
        markedmines++
        displayMarked(y, x);  
      } else if (grid[y][x] === MARKED_MINE) {
        grid[y][x] = MINE;
        displayUntoggled(y, x);
        markedmines-=1
      }
    }
  }
  
}


function gridinitial(cols, rows) {
  let arr = [];
  for (let y = 0; y < rows; y++) {
    arr.push([]);
    for (let x = 0; x < cols; x++) {
      arr[y].push(blank);
    }
  }
  return arr;
}



function displayMarked(y, x) {
  fill("red");
  square(x * cellSize, y * cellSize, cellSize);
}

function displayUntoggled(y, x) {
  fill("green");
  square(x * cellSize, y * cellSize, cellSize);
}


function displaygridinitial() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === blank) {
        fill("green");

      }
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}

function generateMines(firstClickX, firstClickY) {
  let placedMines = 0;
  while (placedMines < MINES) {
    let x = Math.floor(Math.random() * cols);
    let y = Math.floor(Math.random() * rows);

    if (grid[y][x] !== MINE && (x !== firstClickX || y !== firstClickY)) {
      grid[y][x] = MINE;
      placedMines += 1;
    }
  }
}

function count(y, x) {
  if (x >= 0 && y >= 0 && x < cols && y < rows) {
    if (grid[y][x] === MINE) {
      return 1;
    }
  }
  return 0;
}

function revealFirstClickArea(centerX, centerY) {
  let startX = max(centerX - 5, 0);
  let startY = max(centerY - 5, 0);
  let endX = min(centerX + 5, cols - 1);
  let endY = min(centerY + 5, rows - 1);
  
  for (let y = startY; y <= endY; y++) {
    for (let x = startX; x <= endX; x++) {
      if (grid[y][x] === blank) {
        revealCell(y, x);
      }
    }
  }
}

function revealCell(y, x) {
  if (grid[y][x] === blank) {
    let n = count(y - 1, x - 1) + count(y - 1, x) + count(y - 1, x + 1)
      + count(y, x - 1) + count(y, x + 1) + count(y + 1, x - 1)
      + count(y + 1, x) + count(y + 1, x + 1);
    
    grid[y][x]=REVEALED
    fill(230, 209, 156)
    square(x*cellSize,y*cellSize,cellSize)
    fill(255);
    textSize(10);
    text(n, x * cellSize + cellSize / 2, y * cellSize + cellSize / 2);

  }
}

function checkWin() {
  if(markedmines===MINES){
    gameover()
    //change to a winning menu but this woorks :)
  }

}


function gameover() {
  background(220);
  noLoop();
}
