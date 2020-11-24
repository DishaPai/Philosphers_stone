var backgroundImage;
var ghost;
var harry;
var stone;
var Ron;
function preload() {
 backgroundImage=loadImage("Images/hps.jpg");
ghostImg= loadImage("Images/ghost.jpg");
harryImg=loadImage("Images/harry.jpg");
stoneImg=loadImage("Images/stone.png");
RonImg=loadImage("Images/Ron.jpg");
}


function setup(){
 createCanvas(1200,600);
 harry = createSprite(100,150,);
 harry.addImage("h",harryImg);

 harry.scale=0.5;

 stone = createSprite(1000,250);
 stone.addImage("s",stoneImg);
 stone.scale=0.2;

 Ron = createSprite(200,300);
 Ron.addImage("r",RonImg);
 Ron.scale=0.3;
 
 
}

function ghosts(){
  if (frameCount%80 ===0) {
    ghost=createSprite(300,250);
   ghost.x=Math.round(random(50,450));
   ghost.y=Math.round(random(10,540));
   ghost.addImage("g",ghostImg);
   ghost.velocityX = 2;
   ghost.velocityY=-2;
   ghost.scale=0.5;
   //if (Ron.isTouching(ghost)) {
   // ghost.visible=false;
//  }
 


  }
}
var edges ;
var ghost;
function draw(){
  background(backgroundImage)
  if (keyDown(UP_ARROW)) {
    harry.y = harry.y-10;
  }
  if (keyDown(DOWN_ARROW)) {
    harry.y = harry.y+10;
  }
  if (keyDown(LEFT_ARROW)) {
    harry.x = harry.x-10;
  }
  if (keyDown(RIGHT_ARROW)) {
    harry.x = harry.x+10;
  }
  Ron.x=World.mouseX;
 Ron.y=World.mouseY;

 edges= createEdgeSprites();
  ghosts();
  ghost.bounceOff(edges[0]);
  ghost.bounceOff(edges[1]);
  ghost.bounceOff(edges[2]);
  ghost.bounceOff(edges[3]);
  drawSprites();

}
