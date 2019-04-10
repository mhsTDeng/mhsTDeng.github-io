
function setup() {
  //create a canvas
  createCanvas(1000,1000);
  noStroke();
}

function draw() {
  //create mouse interaction
  //when program is run, creates ellipses based on mouse position, as well as colours based on mouse position
  fill(mouseX,mouseY,145);
  ellipse(mouseX,mouseY,mouseX,mouseY);

}
