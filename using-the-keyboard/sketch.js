function setup() {
  // put setup code here
  background(255,255,255);
  createCanvas(1000,800);
  noStroke();
}

function draw() {
  // put drawing code here
  rectMode(CENTER);
}

function keyPressed() {
if (keyCode === UP_ARROW) {
background(62,171,182);
fill(238,74,123);
rect(width/2,height/2, 400,400);
}
else if (keyCode === DOWN_ARROW) {
  background(243,80,75);
  fill(22,196,104);
  rect(300,600,250,250);
}
else if (keyCode === LEFT_ARROW){
  background(74,94,238);
  fill(243,226,75);
  ellipse(930,500,120,120);
}
else if (keyCode === RIGHT_ARROW){
  background(88,201,231);
  fill(232,159,95);
  ellipse(200,250,500,500);
}
}
