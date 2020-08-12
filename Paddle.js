//Paddle class declaration
class Paddle{
    //Initialising the properties
    constructor(xPos,yPos){
        this.x = xPos;
        this.y = yPos;
        this.height = 100;
        this.width = 10;
    }
    //Function to display the paddle
    displayPaddle(){
        rect(this.x,this.y,this.width,this.height);

        //Variables to change the color of the paddle with its position
        let r = map(this.x,0,400,0,255);
        let g = map(this.y,0,400,0,255);
        fill(r,g,150);
    }
}//End class paddle