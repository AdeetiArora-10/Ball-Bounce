var ball,img,paddle;
var edges 

function preload() {

  paddle = loadImage("paddle.png");
  ball_= loadImage("ball.png");
}//end of preload

function setup() {
  createCanvas(800,600);
  
  player = createSprite(300,550,20,50);
  player.addImage("padde", paddle);
  player.rotation=90;
  
   ball = createSprite(200,200);
   ball.addImage("ball.png",ball_)
   ball.scale = 0.8;
  
  ball.velocityY=3;
  ball.velocityX=4;
  
  
}   //end of setup




function draw() {
  background("pink");
    

  
  edges = createEdgeSprites();

  
  //make the ball bounce off the top and bottom walls
  if (ball.isTouching(edges[1]) || ball.isTouching(edges[0])||ball.isTouching(edges[2])||
  ball.isTouching(edges[3])) {
    ball.bounceOff(edges[1]);
    ball.bounceOff(edges[2]);
    ball.bounceOff(edges[0]);
    ball.bounceOff(edges[3]);
   // wall_hitSound.play();
  }
    if (player.isTouching(edges[1]) || player.isTouching(edges[0])||player.isTouching(edges[2])
) {
    player.bounceOff(edges[1]);
    player.bounceOff(edges[2]);
    player.bounceOff(edges[0]);
   // wall_hitSound.play();
  }
  
  
   if(ball.isTouching(player)){
     ball.bounceOff(player);
   }

  if(keyDown(RIGHT_ARROW))
  {
  player.velocityX=6;
  }
  
  if(keyDown(LEFT_ARROW))
  {
player.velocityX=-6;
  }

  
    

  
  // Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting
 
  /* Prevent the paddle from going out of the edges */ 
 
  //randomVelocity();
  drawSprites();
  
}

