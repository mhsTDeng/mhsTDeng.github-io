var myImage;


function preload(){
myImage = loadImage('prettybackground.jpg');


function setup() {
  // put setup code here
  createCanvas(1000,800);
}

function draw() {
  // put drawing code here
  image(prettybackground,100,100);
}
