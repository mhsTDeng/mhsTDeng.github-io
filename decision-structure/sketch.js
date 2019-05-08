/*
Decision Structure
Created by Tina Deng
Revised May 8th, 2019
*/


//Variables for coin flip, heads or tails
let tails;
let heads;

var choices = ["Heads", "Tails"]


function preload(){
  tails = loadImage('quarter_tails.png');
  heads = loadImage('quarter_heads.png');
}

function setup() {
  // put setup code here
  createCanvas(1000,800);
  background(127);
}

function draw() {
  // put drawing code here
  /*Instructions*/

  fill(0,0,0);
  textSize(32);
  textFont('Comic Sans MS');
  text('coin flip',width/2-100,height/2-300);
  text('click to flip',width/2-125,height/2-100);
}

  /*Input for coin flip*/
function mousePressed(){
  var selection = random(choices)
  if (selection === "Tails"){
    image(tails,width/2-150,height/2,);
  }
  else if (selection === "Heads"){
    image(heads,width/2-150,height/2);
  }
}
