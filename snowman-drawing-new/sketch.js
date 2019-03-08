//Setup the canvas
function setup() {
  // put setup code here
  //Sets the screen to be 640 pixels wide and 480 pixels high
  createCanvas(640,480);
}

function draw() {
  // put drawing code here
  //Create the ground
  rect(0,350,400,50);
  //Create the snowman body, copied from Khan Academy
ellipse(200,300,150,150);
ellipse(200,200,100,100);
ellipse(200,130,75,75);
//Create the arms
line(160,200,100,100);
line(240,200,300,100);
}
