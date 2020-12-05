var shoot,speed,weight;
var wall,tn;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  tn = random(22,83);

   shoot= createSprite(50,200,30,3);
  shoot.shapeColor = color(255);
  shoot.velocityX = speed;

  wall = createSprite(1200,200,tn,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  
  background(0);
  
  drawSprites();

  if(hasCollided(shoot,wall)){

    shoot.velocityX = 0;
    var damage  = 0.5 * weight * speed * speed / (tn * tn * tn);

    if(damage > 10){
    wall.shapeColor = color(255,0,0);
    }

    if(damage < 10 ){
      wall.shapeColor = color(0,255,0);
      }
}
}

function hasCollided(lshoot,lwall){
  shootRightEdge = lshoot.x + lshoot.width;
  wallLeftEdge = lwall.x;
  if(shootRightEdge >= wallLeftEdge){
    return true;
  } 
  return false;
}


