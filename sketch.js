var trex;
var trexImg;
var ground;
var bg;
var bgImage;
var line2;
var obstacle;
var PLAY = 1;
var END = 0;
var gameState = PLAY; 
var score = 0;

function preload(){
bgImage = loadImage("bg2.jpg")
obstacle = loadImage("door.png")

}
function setup(){
  createCanvas(windowWidth-300,windowHeight)

  bg = createSprite(width/2,height,width,height)
  bg.addImage("tower",bgImage)
  bg.x = width/2
  bg.velocityX = -5
  bg.scale = 4.67

  trex = createSprite(250,520,50,50)
  trex.shapeColor = "Yellow"
  
  line2 = createSprite(250,600,250,5)

  lineGroup = new Group()
  obstacleGroup = new Group()

}

function draw(){
  background(0)
  
  score = score + Math.round(getFrameRate()/60);

  if(bg.x<0){
    bg.x = width/2+60
    }

  if(keyDown("up")){
    trex.y -= 9
  }

  //gravity
  trex.y +=1.8
  trex.collide(line2)

if(gameState === 1){
  spawnLines()
}

trex.collide(lineGroup)

  if(gameState === 1){
  spawnObsctacles()
}

if(gameState === 0){
tert = 
}

if(trex.y === 420){
  gameState = 0;
}

if(trex.isTouching(obstacleGroup)){
  obstacleGroup.setVelocityXEach(0);
  lineGroup.setVelocityXEach(0);
  bg.velocityX = 0
  trex.velocityX = 0
  trex.velocityY = 0
  gameState = 0
  
}  


drawSprites()
text("Score: " + score, 450, 50);

}

function spawnLines(){
  if(frameCount % 150 === 0){
    line2.visible = false;
    rand = Math.round(random(300,550))
    line1 = createSprite(1000,rand,250,5)
    line1.velocityX = -2;
    line1.shapeColor=("yellow")
    lineGroup.add(line1)
    line1.velocityX = -(6 + 3*score/100);

  }
}

function spawnObsctacles(){
   if(frameCount % 300 === 0){
     obstacles = createSprite(1000,rand-60,50,50)
     obstacles.velocityX = -2;
     obstacles.addImage(obstacle)
     obstacleGroup.add(obstacles)
     obstacles.velocityX = -(6 + 3*score/100);

   }
}