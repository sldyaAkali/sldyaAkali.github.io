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


const QMISSILESPEED = 10
const QIMAGESCALE = 0.1
let initialqAngle = 0

const EDASHD = 100;


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
  qWeapon.resize(qWeapon.width*QIMAGESCALE,qWeapon.height*QIMAGESCALE)
  imageMode(CENTER);

}






function draw() {
  background(220);
  
  updatestat();
  displayP();
  move();
  
  enemySP();
  enemyspawnovertime();

  
  qSpawn()
}





function mousePressed() {
  destination.set(mouseX, mouseY);
}





function keyPressed(){
  if (key==='a'||key==='A'){
    for (let e of enemies){
      if (killed(mouseX,mouseY,e,position.x,position.y)){
        let index= enemies.indexOf(e);
        enemies.splice(index,1);
      }
    }
  }

  if (key==='q'||key ==='Q'){
    spawnKunai()
  }

  if (key==='e'||key==='D'){
    dashbackward()
   }
}


function dashbackward(){
  let theta = atan2(mouseY - position.y, mouseX - position.x);
  position.x -= EDASHD*cos(theta)
  position.y -= EDASHD*sin(theta)
  destination.set(position.x,position.y)
}


function qSpawn(){
  for (let kunai of kunais){
    push()
    translate(kunai.xi,kunai.yi)
    rotate(kunai.angle)
    image(qWeapon,kunai.x,kunai.y)
    pop()
    qmovement(kunai)

    for (let e of enemies){
      if (killedQ(kunai.xi,kunai.yi,e)){
        let index = enemies.indexOf(e)
        enemies.splice(index,1)
      }
    }
  }
  
}



function qmovement(q){
  q.xi += q.vx
  q.yi += q.vy

}
function spawnKunai(){
  let theta = atan2(mouseY - position.y, mouseX - position.x);
  let q = {
    xi: position.x,
    yi: position.y,
    vx: QMISSILESPEED* cos(theta),
    vy: QMISSILESPEED* sin(theta),
    angle: theta,
    x:0,
    y:0,

  }
  kunais.push(q)
}

function killedQ(x,y,enemy){
  let d = dist(x,y,enemy.x,enemy.y);
  return d<enemy.hitbox;
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


