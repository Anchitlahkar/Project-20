var car,wall;
var speed,weight,bg;
var dis = "Please Click Space To Check The Output"

function setup() {
  createCanvas(1600,800);

  speed = Math.round(random(55,150));
  weight = Math.round(random(400,1500));

  car = createSprite(50,200,50,50);
  car.shapeColor = "blue"
  
  red = createSprite(300,650,50,50);
  red.shapeColor = "red"
  
  yellow = createSprite(550,650,50,50);
  yellow.shapeColor = "yellow"
  
  Green = createSprite(800,650,50,50);
  Green.shapeColor = "green"
  
  wall = createSprite(1500,200,60,height/2);

  bg = createSprite(1600/2,200,1600,400);
  bg.shapeColor = "Black"

  wall.depth = car.depth;
  wall.depth = wall.depth-1;

  bg.depth = wall.depth;
  bg.depth = bg.depth - 3
}

function draw() {
  background("White");

  if(keyDown("space")){
    car.velocityX = speed;
    dis = "";
  }
  // car.x = mouseX
  // car.y = mouseY
  
  deformation(car,wall);
  
  TEXTES(); 
  
  drawSprites();
}
function isTouching(object1,object2){

  if(object1.x - object2.x <= object1.width/2 + object2.width/2 && 
    object2.x - object1.x <= object2.width/2 + object1.width/2 &&
    object1.y - object2.y <= object1.height/2 + object2.height/2 && 
    object2.y - object1.y <= object2.height/2 + object1.height/2){
        return true;
  
     }
     else{
  
      return false;
     }

}
function deformation(input1,input2) {
 
  var damage = (0.5 * weight * speed * speed)/22509

  if(isTouching(input1,input2)){

    input1.velocityX = 0;

    if(damage > 180){
      input1.shapeColor = "Red";
      input1.x = 1446;
    }
    if(damage < 180 && damage > 100){
      input1.shapeColor = "Yellow";
      input1.x = 1446;
    }
    if(damage < 100){
      input1.shapeColor = "Green";
      input1.x = 1446;
    }
    console.log("damage = "+ damage)
  }
}
function TEXTES() {
  fill("Black");
  textSize(20);
  text("Car's Speed = "+ speed,200,500);

  fill("Black");
  textSize(20);
  text("Car's Speed = "+ speed,200,500);
  
  fill("Black");
  textSize(20);
  text("Car's Weight = "+ weight,200,550);
  
  fill("Black");
  textSize(20);
  text("Car's Weight = "+ weight,200,550);
 


  fill("Black");
  textSize(20);
  text("= Lethal ",340,655);
  
  fill("Black");
  textSize(20);
  text("= Average ",590,655);
  
  fill("Black");
  textSize(20);
  text("= Safe ",840,655); 
  
  fill("Black");
  textSize(20);
  text("= Lethal ",340,655);
  
  fill("Black");
  textSize(20);
  text("= Average ",590,655);
  
  fill("Black");
  textSize(20);
  text("= Safe ",840,655);
  
  
  fill("Black");
  textSize(25);
  text(dis,650,500);

}