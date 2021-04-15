var bullet,wall,thickness;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
 bullet = createSprite(500, 200, 50, 10);
 wall = createSprite(1200, 200, thickness, 100);
 
 speed = random(223,321);
 weight = random(30,52);
 bullet.velocityX=-5;

}

function draw() {
  background("black");  

  if(wall.x=bullet.x<(bullet.width+wall.width)/2);{
  bullet.velocityX = -5;

  var deformation = 0.5 * weight * speed * speed/22509;
  if(deformation>180){
    bullet.shapeColor = "white";
  }

  if(deformation<180 && deformation>100){
    bullet.shapeColor = "white";
  }
  if(deformation<100){
    bullet.shapeColor = "white";
  }
  }

  if (hasCollided(bullet,wall)){
    bullet.velocity;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if(damage>10){
      wall.shapeColor = "red";
    }
    
    if (damage<10){
      wall.shapeColor = "green";
    }

  }
  drawSprites();
}
  function hasCollided(bullet,wall){
    bulletRightEdge = bullet.x + bullet.width;
    wallLeftEdge = wall.x;
    if(bulletRightEdge<=wallLeftEdge){
      return true;   
    }
      
  
  }
