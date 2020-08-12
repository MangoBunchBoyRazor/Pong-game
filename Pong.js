//Initialsing the objects for the game
var ball = new Ball(200,200);
var computerPaddle = new Paddle(10,200);
var playerPaddle = new Paddle(380,200);

//Initialising essential variables
var gameState = "serve";
var playerScore = 0;
var computerScore = 0;

function setup() {
  createCanvas(400, 400);
}
function draw() {
  //Bakcground color
  background(210);

  //Calling ball class member functions
  ball.displayBall();
  ball.isTouchingEdge();
  ball.isTouchingPaddle(playerPaddle);
  ball.isTouchingPaddle(computerPaddle);

  //Displaying the computer paddle
  computerPaddle.displayPaddle();
  computerPaddle.y = ball.y - computerPaddle.height/2;   

  //Making the player paddle position with the mouse
  playerPaddle.y = mouseY;
  //Displaying the player paddle
  playerPaddle.displayPaddle();
  
  //Text Properties
  textSize(20);
  text(playerScore,300,100);
  text(computerScore,100,100);

  //Displaying when the game state is serve
  if(gameState === "serve"){
    textAlign(CENTER);
    text("Press a to serve",200,150);
  }
  if(gameState === "end"){
    //Incrementing the computer score
    if(ball.x > 400){
      computerScore++;
    }
    //Resetting the ball position
    ball.x = 200;
    ball.y = 200;

    //Displaying the text
    text("You lose a point",200,200);
    text("Press r to restart",200,225);
  }

  //Condition to end the game
  if(ball.x < 0 || ball.x > 400){
    gameState = "end";
  }
}
//Defining the keyPressed function to handle keyboard inputs
function keyPressed(){
  //Starting the game
  if(key === 'a' && gameState === "serve"){
    ball.velocityX = random(-3,3);
    ball.velocityY = random(-3,3);
    gameState = "play";
  }
  //Restarting the game
  if(key === 'r' && gameState === "end"){
    gameState = "serve";
    ball.velocityX = 0;
    ball.velocityY = 0;
  }
}