/*
Mouse Interaction
Created by Tina Deng
Revised May 8th, 2019
*/

function setup() {
  //create a canvas
  createCanvas(1000,1000);
  noStroke();
}

function draw() {
  //create mouse interaction
  //Create colours and ellipses based on mouse position
  fill(mouseX,mouseY,145);
  ellipse(mouseX,mouseY,mouseX,mouseY);

}
