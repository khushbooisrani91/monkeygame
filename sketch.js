var ground;
var monkey , monkey_running;
var banana ,bananaImage, stone, obstacleImage;
var bananaGroup, obstacleGroup;
var survivalTime=0;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  
}



function setup() {
  
  createCanvas(600,400);
  
  
monkey=createSprite(50,340,20,20);
monkey.addAnimation("mon",monkey_running);
monkey.scale=0.1;  
  
ground=createSprite(300,400,600,40);

  bananaGroup=new Group();
  
  
}


function draw() {

  background("lightgrey");
  
   createObstacles();
  banana();
  
  
  
  ground.velocityX=-3;
  
  if (ground.x <298){
      ground.x = ground.width/2;
    }
  
  
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  score = score + Math.round(getFrameRate()/60);
  


  
  stroke("black");
  textSize(20);
  fill("black");
 survivalTime=Math.ceil(frameCount/frameRate())
 text("Survival  Time: "+survivalTime,250,50);
  

  
  drawSprites();
  
  
}

function banana(){
  
  if (frameCount % 80 === 0) {
    
banana1=createSprite(600,150,20,20);
banana1.y = Math.round(random(80,220));    
banana1.addImage("banan",bananaImage); 
banana1.scale=0.05 ; 
banana1.velocityX=-4 ; 
banana1.lifetime=-1;    
  
    bananaGroup.add(banana1);
       
  }
  
  
  
  

  
}


function createObstacles(){
  
  
   if (frameCount % 300 === 0) {
  
  stone=createSprite(600,360,10,10);
  stone.addImage("stoneimg",obstaceImage);
  stone.scale=0.1 ;
  stone.velocityX=-4;
  stone.lifetime=-1;   
     
    //obstacleGroup.add(stone);
     
 }
}

