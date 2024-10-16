// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


const SPAWNX = 0;
const SPAWNY = 400;
let resource = 200;
let health = 468;
let apr = 20;
let adr = 20;
let attackdamage = 70;
let abilitypower = 0;
let position;
let destination;
let speed = 3.75;
const ENEMYIMAGESCALE = 0.3;
const PLAYERIMAGESCALE = 0.5;
let stat = [];
let enemies = [];


let kunais =[];

let spawndelay = 3000;
let time = 0;

let range = 100;


let qAngle = 0


function preload(){
  player = loadImage("akali.png");
  yuumi = loadImage("enemy.png");
  qWeapon = loadImage("kunai.png");
}



function setup() {
  createCanvas(windowWidth,windowHeight);
  position = createVector(SPAWNX, SPAWNY); 
  destination = createVector(copy); 
  player.resize(player.width*PLAYERIMAGESCALE,player.height*PLAYERIMAGESCALE);
  yuumi.resize(yuumi.width*ENEMYIMAGESCALE,yuumi.height*ENEMYIMAGESCALE);
  imageMode(CENTER);

}






function draw() {
  background(220);
  
  updatestat();
  displayP();
  move();
  
  enemySP();
  enemyspawnovertime();
}





function mousePressed() {
  destination.set(mouseX, mouseY);
}





function keyPressed(){
  if (key==='a'||'A'){
    for (let e of enemies){
      if (killed(mouseX,mouseY,e,position.x,position.y)){
        let index= enemies.indexOf(e);
        enemies.splice(index,1);
      }
    }
  }

  if (key==='q'||'Q'){
    qability()
  }
}


// function qability(){

// }

function spawnKunai(){
  let q = {
    xi: position.x,
    yi: position.y,
    initialdirection: qAngle,

  }
  kunais.push(q)
}







function displayP(){
  image(player,position.x,position.y);

}

function move(){
  let direction = p5.Vector.sub(destination, position);
  if (direction.mag() > 1) {
    direction.setMag(speed);
    position.add(direction); 
  }
}

function updatestat(){
  let s ={
    hp: health,
    power: resource,
    //mana: resource,
    ar: adr,
    mr:apr,
    ad: attackdamage,
    ap: abilitypower,
    ms: speed,
    attackrange: range,
  };
  stat.push(s);
}




function enemyspawnovertime(){

  if (millis()>=time+spawndelay){
    time += spawndelay;
    createEnemystat(1);
    
  }
  
}
function createEnemystat(a){
  for (let i = 0; i<a ; i++){
    let enemy = {
      x:random(width),
      y:random(height),
      vx:random(-5,5) ,
      vy:random(-3,3),
      hitbox: yuumi.width,
    };
    enemies.push(enemy);
    
  
  }
}
function Emovement(enemy){
  enemy.x += enemy.vx;
  enemy.y += enemy.vy;
  if (enemy.x < 0 || enemy.x > width) {
    enemy.vx *= -1;
  }
  if (enemy.y < 0 || enemy.y > height) {
    enemy.vy *= -1;
  }
}

function enemySP(){
  for (let e of enemies){
    image(yuumi,e.x,e.y);
    
    Emovement(e);
  }
}

function killed(x,y,enemy,px,py){
  let d = dist(x,y,enemy.x,enemy.y);
  let pd = abs(dist(x,y,px,py));
  return d<enemy.hitbox&&pd<=range;
}


