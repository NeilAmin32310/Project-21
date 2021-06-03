var thickness, wall;
var bullet, speed,weight;
function setup() {
  createCanvas(1600,400);
  
  wall=createSprite(1500,200,thickness,height/2);
  console.log(wall)
  wall.shapeColor=("red");
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50,200,50,50);
  bullet.shapeColor="white";
  bullet.velocityX=speed;
  
  
}

function draw() {
  background(80,80,80);
  if( wall.x-bullet.x<bullet.width+wall.width)  {
bullet.velocityX=0;
damage=0.5*weight*speed*speed;
if(damage>10){
  bullet.shapeColor="red";
}

if(damage<10){
  bullet.shapeColor="green";
}
  }
    console.log('Wall Sprite in Draw', wall)
    drawSprites(); 
  
}