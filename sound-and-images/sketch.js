let myImage;
let mySound;

function preload(){
myImage = loadImage('prettybackground.jpg');
mySound = loadSound('roblox-death-sound_1.mp3');
}
function setup() {
  // put setup code here
  createCanvas(1000,800);


}
function draw() {
  // put drawing code here
  image(myImage,100,100);
}

function mousePressed() {
  mySound.play();
}
