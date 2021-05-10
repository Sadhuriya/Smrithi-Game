const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
var engine,world;
var player;
var brinjal,burger,capsicum,donut,hotdog,onion,pizza,potato;
var brinjalImg,burgerImg,capsicumImg,donutImg,hotdogImg,onionImg,pizzaImg,potatoImg;
var health = 100;
var junkGroup
var healthyFood= []
var img

function preload(){
backgroundImg=loadImage("images/background.jpg")
brinjalImg=loadImage("images/brinjal.png")
burgerImg=loadImage("images/burger.png")
capsicumImg=loadImage("images/capsicum.png")
donutImg=loadImage("images/donut.png")
hotdogImg=loadImage("images/hotdog.png")
onionImg=loadImage("images/onion.png")
pizzaImg=loadImage("images/pizza.png")
potatoImg=loadImage("images/potato2.png")


}

function setup() {
  createCanvas(1320,600);
  engine=Engine.create()
  world=engine.world

  player=new Player(150,500,25);

  bg=createSprite(850,150,1350,600)
  bg.scale=3.1;
  bg.addImage(backgroundImg);


  junkGroup = new Group()
}

function draw() {
  Engine.update(engine)

  background("blue"); 
  

  bg.velocityX=-5;

  drawSprites();

  textSize(50);
  fill("white")
  text("Health: " + health, 200,50)

  player.display();

  if(keyDown(UP_ARROW)){
    player.move(0,-5)
  }

  if(keyDown(DOWN_ARROW)){
    player.move(0,5)
  }

  if(bg.x<400){
    bg.x=bg.width/2;
  }

  if(frameCount%150===0){
    var rand = Math.round(random(1,4))
    switch(rand){
    case 1:img = brinjalImg
      break;
    case 2:img = capsicumImg
      break;
    case 3:img = onionImg
      break;
    case 4:img = potatoImg
      break;
    default: break;
    }
  
  healthyFood.push(new HealthyFood(1320, random(50,550), 50,img))

  
  }

  for(var i=0; i<healthyFood.length;i++){

    
if(healthyFood[i]!=null){
  healthyFood[i].display();
    healthyFood[i].body.position.x += -10
    if(healthyFood[i].body.position.x <= -100){
      healthyFood[i] = null;
    }
    if(detectollision(player,healthyFood[i])){
        healthyFood[i]=null
        health = health+ 10
    }
    
}
  }

 



}

function detectollision(lplayer,healthJunk){
  if(healthJunk!=null){

  playerPosition=lplayer.body.position
  healthJunkPosition=healthJunk.body.position
  
  var distance=dist(playerPosition.x, playerPosition.y, healthJunkPosition.x, healthJunkPosition.y)
  if(distance<=player.radius+healthJunk.radius) {
     return true
    }
  }

  }


// function healthy(){
//   if(frameCount%200===0){
// var healthyFood=createSprite(1320,500,10,10);
// healthyFood.velocityX=-5;
// healthyFood.scale = 0.1
// healthyFood.y = Math.round(random(50,550))
// var img =Math.round(random(1,4))
// switch(img){
//   case 1:healthyFood.addImage(brinjalImg);
//   break;
//   case 2:healthyFood.addImage(capsicumImg);
//   break;
//   case 3:healthyFood.addImage(onionImg);
//   break;
//   case 4:healthyFood.addImage(potatoImg);
//   break;
// }
// healthyFood.setLifetime=270;
// healthyGroup.add(healthyFood)
//   }
// }


function junk(){
  if(frameCount%350===0){
    var junkFood=createSprite(1320,500,10,10);
    junkFood.velocityX=-5;
    junkFood.scale = 0.1
    junkFood.y = Math.round(random(50,550))
    var img =Math.round(random(1,4))
    switch(img){
      case 1:junkFood.addImage(burgerImg);
      break;
      case 2:junkFood.addImage(donutImg);
      break;
      case 3:junkFood.addImage(pizzaImg);
      break;
      case 4:junkFood.addImage(burgerImg);
      break;
    }
    junkFood.setLifetime=270;
    junkGroup.add(junkFood)
      }
}

