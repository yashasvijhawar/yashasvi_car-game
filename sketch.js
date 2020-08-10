var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed = random(90,55);
  weight = random(400,1500)
}

function draw() {
  background(255,255,255);  

  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);

  car.velocityX = speed;
 
  if(car.x - wall.x === wall.width/2 + car.width/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;

    if(deformation<180){
      car.shapeColor = green(0,255,0);
    }

    if(deformation<180 && deformation>180){
      car.shapeColor = yellow(230,230,0);
    }

    if(deformation>180){
      car.shapeColor = red(255,0,0);
    }
  }
  drawSprites();
}