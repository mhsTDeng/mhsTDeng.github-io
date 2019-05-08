/*
Sound and Images
Created by Tina Deng
Revised May 8th, 2019
*/

//Variables for image and sound
let myImage;
let mySound;

//Preload image and sound
function preload(){
  myImage = loadImage('prettybackground.jpg');
  mySound = loadSound('roblox-death-sound_1.mp3');
}

function setup() {
  // put setup code here
  createCanvas(1000,800);
}

//Show image
function draw() {
  // put drawing code here
  image(myImage,100,100);
}

//Assign an action to play sound
function mousePressed() {
  mySound.play();
}
