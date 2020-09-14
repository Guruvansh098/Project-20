var car1,car2,car3,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90);
  weight=random(400,1500)

  car1=createSprite(50,300,50,50)
  car2=createSprite(50,200,50,50)
  car3=createSprite(50,100,50,50)
  car1.shapeColor=("blue") //bad
  car2.shapeColor=("black") //almost
  car3.shapeColor=("orange") //good
wall=createSprite(1500,60,10,1500)
wall.shapeColor=("80,80,80")
car1.velocityX= speed;
car2.velocityX= speed;
car3.velocityX= speed;
}

function draw() {
  
  
  

  if(car1.isTouching(wall)){
car1.velocityX=0
car1.shapeColor=("red") //bad
  } 
  if(car2.isTouching(wall)){
    car2.velocityX=0
    car2.shapeColor=("yellow") //almost
      } 
      if(car3.isTouching(wall)){
        car3.velocityX=0
        car3.shapeColor=("green") //good

          } 
  background(255,255,255);  
  drawSprites();
}