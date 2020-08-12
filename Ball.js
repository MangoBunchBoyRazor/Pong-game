//Ball class definition
class Ball{
    //Initialising the properties  
    constructor(xPos,yPos){
      this.x = xPos;
      this.y = yPos;
      this.diameter = 20;
      this.velocityX = 0;
      this.velocityY = 0;
    }
    //Function to render the ball
    displayBall(){
      circle(this.x,this.y,this.diameter);

      //Moving the ball with the velocity
      this.x += this.velocityX;
      this.y += this.velocityY;

      //Increasing the ball speed gradually
      if(gameState != "serve"){
        if(this.VelocityX <= 0)
          this.velocityX += -0.005;
        else if(this.velocityX > 0)
          this.velocityX += 0.005;
        if(this.velocityY <= 0)
          this.velocityY += -0.005;
        else if(this.velocityY > 0 )
          this.velocityY += 0.005;
      }
    }
    //Function to handle collision with the edges
    isTouchingEdge(){
      //Variable for setting the test edge
      let test;

      if(this.y >= 200) //Testing bottom edge
        test = "bottomEdge";
      if(this.y < 200) //Testing top edgee
        test = "topEdge";
      
      //Making the ball bounce off the test edge
      if(test === "topEdge") {
       if(this.y <= (this.diameter/2))
        this.velocityY = this.velocityY * -1;
      }
      else if(test === "bottomEdge"){
      if((400 - this.y) <= (this.diameter/2))
        this.velocityY = this.velocityY * -1;
      }
    }
    //Function to handle collision with paddles
    isTouchingPaddle(object) {
      //Setting the test variables
      let testX = this.x;
      let testY = this.y;

      if (this.x < object.x)//Testing the left edge
       testX = object.x;      
      else if (this.x > object.x+object.width) //Testing the right edge
       testX = object.x+object.width;   
      if (this.y < object.y)//Testing the top edge
       testY = object.y;     
      else if (this.y > object.y+object.height) //Testing the bottom edge
       testY = object.y+object.height;   

      //Finding the distance between the ball and the test edges 
      var distX = this.x-testX; //Distance on x axis
      var distY = this.y-testY; //Distance on y axis

      //Finding the exact distance between the ball and paddle
      var distance = sqrt( (distX*distX) + (distY*distY) );

      //If the distance is less than the radius of the ball
      //Then they are colliding
      if (distance <= this.diameter/2) 
        this.velocityX *= -1;
  }
}//End class ball