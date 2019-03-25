/*
House Assignment
Created by Tina Deng
March 18,2019
*/
function setup() {
  //create a canvas that is 800 pixels by 600 pixels
  createCanvas(800,1000);
  background(21,230,188);
  noStroke();
}

function draw() {
  //create variables for height and width
  var houseWidth=400;
  var houseHeight=houseWidth;

  //Create a reference point for our house
  var refX = width/2-houseWidth/2;
  var refY = height-houseHeight;

  //create base of the house
  fill(224, 187, 54);
  rect(refX,refY,houseWidth,houseHeight);

  //create roof
  fill(222,47,47);
  triangle(refX, refY,refX+houseWidth/2,refY-houseWidth/2,refX+houseWidth,refY);

//create door
fill(168, 131, 67);
 rect(refX+houseWidth/3,refY+houseWidth/2,houseWidth/3,houseHeight/2);

 //create window
 fill(20, 158, 135);
 ellipse(refX+houseWidth/2,refY+houseWidth/4,houseWidth/3,houseHeight/3);

 //create pom-pom
 fill(255,255,255)
 ellipse(refX+houseWidth/2,refY-houseHeight/2,houseWidth/10,houseHeight/10);

}
