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

let stopwatch = 0;
let rStarttime = 0;
let position;
let destination;
let speed = 4;
const ENEMYIMAGESCALE = 0.3;
const PLAYERIMAGESCALE = 0.5;

let enemies = [];



let kunais =[];

let spawndelay = 3000;
let time = 0;

let range = 100;


const QMISSILESPEED = 10;
const QIMAGESCALE = 0.1;




let initialqAngle = 0;

const FLASHD = 100;
const GHOSTDURATION = 2000;
let dinitialtime = 0;
let ghosting = false;

let invulnerable = false;
let wCD = 0;
let flashCD = 0;
let eCD=0;
let qCD=0;
let dmgCD = 0;
let tpCD = 0;
let rCD = 0;
let rdist = 300;
let ulting = false;
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
  qWeapon.resize(qWeapon.width*QIMAGESCALE,qWeapon.height*QIMAGESCALE);
  imageMode(CENTER);
  angleMode(DEGREES);
}






function draw() {
  background(220);
  

  displayP();
  move();
  displayHealth();
  enemySP();
  enemyspawnovertime();
  enemycollide();
  
  qSpawn();
  cdTimer();

  wTimer();

  
  gameover();
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
    if(qCD===0){
      spawnKunai();
      qCD=6;
    }
    
  }

  if (key==='e'||key==='E'){
    if(eCD === 0){
      dashbackward();
      eCD=10;
    }
  }

  if (key==='f'||key==='F'){
    if (flashCD===0){
      flashCD=20;
      flash();
    }
  }


  if (key==='w'||key==='W'){
    if (wCD===0){
      w();
      wCD = 12+2;
      
    }
  }
  
  if (key==='d'||key==='D'){
    if (tpCD===0){
      tp(mouseX,mouseY);
      tpCD=30;
    }
  }
} 
  






function tp(x,y){
  position.set(x,y);
  destination.set(x,y);
}





function cdTimer(){
  let ti = millis(); 
  if (ti - stopwatch >= 1000) {
    wCD -= 1;
    flashCD -= 1;
    eCD -=1;
    qCD -=1;
    dmgCD -= 1;
    tpCD -=1;
    rCD -=1;
    dmgCD = max(dmgCD,0);
    tpCD = max(tpCD,0);
    wCD = max(wCD, 0);
    flashCD = max(flashCD, 0);
    eCD = max(eCD,0);
    qCD = max(qCD,0);
    rCD=max(rCD,0);
    stopwatch = ti;
  }
}


function w(){
  if (!ghosting){
    dinitialtime = millis();
    ghosting = true;
    speed = 10;

    invulnerable = true;
  }
}

function wTimer(){
  if (ghosting && millis() >= dinitialtime + GHOSTDURATION) {
    speed = 4; 
    ghosting = false;

    invulnerable = false;
  }
}




function flash(){
  let theta = atan2(mouseY - position.y, mouseX - position.x);
  position.x += FLASHD*cos(theta);
  position.y += FLASHD*sin(theta);
  destination.set(position.x,position.y);
}

function dashbackward(){
  let theta = atan2(mouseY - position.y, mouseX - position.x);
  position.x -= player.width*1.3*cos(theta);
  position.y -= player.width*1.3*sin(theta);
  destination.set(position.x,position.y);
}








function qSpawn(){
  for (let kunai of kunais){
    push();
    translate(kunai.xi,kunai.yi);
    rotate(kunai.angle);
    image(qWeapon,kunai.x,kunai.y);
    pop();
    qmovement(kunai);

    for (let e of enemies){
      if (killedQ(kunai.xi,kunai.yi,e)){
        let index = enemies.indexOf(e);
        enemies.splice(index,1);
      }
    }
  }
  
}



function qmovement(q){
  q.xi += q.vx;
  q.yi += q.vy;

}
function spawnKunai(angle){
  let theta1 = atan2(mouseY - position.y, mouseX - position.x);
  let theta2 = theta1- 10;
  let theta3 = theta1 +10;
  let q1 = {
    xi: position.x,
    yi: position.y,
    vx: QMISSILESPEED* cos(theta1),
    vy: QMISSILESPEED* sin(theta1),
    angle: theta1,
    x:0,
    y:0,

  };
  kunais.push(q1);
  let q2 = {
    xi: position.x,
    yi: position.y,
    vx: QMISSILESPEED* cos(theta2),
    vy: QMISSILESPEED* sin(theta2),
    angle: theta2,
    x:0,
    y:0,

  };
  kunais.push(q2);
  
  let q3 = {
    xi: position.x,
    yi: position.y,
    vx: QMISSILESPEED* cos(theta3),
    vy: QMISSILESPEED* sin(theta3),
    angle: theta3,
    x:0,
    y:0,

  };
  kunais.push(q3);
  
  
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







function enemyspawnovertime(){

  if (millis()>=time+spawndelay){
    time += spawndelay;
    createEnemystat(5);
    
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
      range: 30,
      dmg:30
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



function enemycollide(){
  for (let e of enemies){
    let d = dist(e.x, e.y, position.x, position.y);
    if (abs(d)<e.range&&dmgCD===0&&invulnerable===false){
      dmgCD= 1;
      health-=e.dmg;
      
    }
  }
}



function gameover(){
  if (health<=0){
    noLoop();
  }
}





//interface/menu


function displayHealth() {
  fill(255);
  textSize(24);
  text(`Health: ${health}`, 10, 30);
}
