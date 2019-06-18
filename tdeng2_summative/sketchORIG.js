
//declare global variables
let cloud;
let start_flag;
let check_flag;
let x = 200;
let y = 200;
let dy;
let gravity = 0;
let jump = false;
let xSpeed = 7;


//load in images
function preload(){
check_flag = loadImage('checkpoint_flag.png');
start_flag = loadImage('start_flag.png');
cloud = loadImage('cloud.png');

}


function setup() {
  createCanvas(1000,875);
  noStroke();
}

function draw() {

  //collision
  fill(0);
  rect(x,height/3+x,x/2,y/2);


  y -= dy;
  dy -= gravity;

  if (y>height/3+height/3){
    y = height/3+height/3;
    gravity = 0;
    dy = 0;
    jump = false;
  }
  if (keyIsDown(LEFT_ARROW)) {
   x-=xSpeed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
   x+=xSpeed;
  }
  //sky
    background(62,191,206);
  //hill
    fill(40,200,45);
    ellipse(width/2-x*2,height/2+x*2,x*2,x*3);
  //clouds

  //ground
    fill(237,196,87);
    rectMode(CENTER);
    rect(x*5+300,height/2+x+x/2,x*2,x+x/2);
    rectMode(CORNER)
    rect(0,height/3+height/3,width/2,height/3+height/3);

  //floating blocks
    rect(width/2-x/8,height/2+25,x-50,x-145);
    rect(width/2+150,height/2-100,x-50,x-145);
    rect(width/2+x+100,height/2+25,x-50,x-145);

  //images
    image(start_flag,0,height/2-x+x+20,start_flag.width/4,start_flag.height/4);
    image(check_flag,width/2+x*2.7,height/2-x/2.5,check_flag.width/4,check_flag.height/4);
    image(cloud,width/4,height/4-x,cloud.width/3,cloud.height/3);
    image(cloud,width/4+width/2,height/4-x,cloud.width/3,cloud.height/3);

/*--------Start Menu--------*/
  /*background(85,129,255);
//title
  fill(255);
  rect(width/3+x-20,height/2-x-60,width/5,height/5-x/2);
  fill(85,255,95);
  rect(width/3+x-10,height/2-x,width/6+x/8,height/5-x-20);
  fill(0);
  textSize(60);
  text('PENDING',width/3+x-10,height/2-x);

//instructions
  textSize(39);
  text('Welcome to Pending!',width/2-x+x/2,height/2-x+175);
  text('1.Move with the left and right arrow keys',width/2-x,height/2-x+300);
  text('2.Jump with the space bar',width/2-x,height/2-x+350);
  text('3.Avoid or defeat enemies blocking your path',width/2-x,height/2+x);
  text('4.Reach the checkpoint flag to advance',width/2-x,height/2+x+50);
  text('CLICK ANYWHERE TO BEGIN',width/2-x+x/2,height/2+x+x);*/
}


function mousePressed() {

  /*--------Level 1--------*/
//sky
  background(62,191,206);
//hill
  fill(40,200,45);
  ellipse(width/2-x*2,height/2+x*2,x*2,x*3);
//clouds

//ground
  fill(237,196,87);
  rectMode(CENTER);
  rect(x*5+300,height/2+x+x/2,x*2,x+x/2);
  rectMode(CORNER)
  rect(0,height/3+height/3,width/2,height/3+height/3);

//floating blocks
  rect(width/2-x/8,height/2+25,x-50,x-145);
  rect(width/2+150,height/2-100,x-50,x-145);
  rect(width/2+x+100,height/2+25,x-50,x-145);

//images
  image(start_flag,0,height/2-x+x+20,start_flag.width/4,start_flag.height/4);
  image(check_flag,width/2+x*2.7,height/2-x/2.5,check_flag.width/4,check_flag.height/4);
  image(cloud,width/4,height/4-x,cloud.width/3,cloud.height/3);
  image(cloud,width/4+width/2,height/4-x,cloud.width/3,cloud.height/3);


  /*-------Level 2---------*/

//sky
  /*background(62,191,206);
  image(cloud,width/4,height/4-x,cloud.width/3,cloud.height/3);
  image(cloud,width/4+width/2,height/4-x,cloud.width/3,cloud.height/3);

//ground
  fill(237,196,87);
  rect(0,height/3+height/3,width,height/3+height/3);

//obstacles
  fill(67,101,124);
  rect(width/6+x/2,height/3+height/3.63,x/4,x/4);
  rect(width/4+x/2,height/3+height/6,x-50,x-145);
  rect(width/3+x,height/3+height/3.63,x/4,x/4);
  rect(width/2+x,height/3+height/6,x-50,x-145);

//images
  image(check_flag,0-x/2,height/2-x/2.5,check_flag.width/4,check_flag.height/4);
  image(check_flag,width/2+x*2.7,height/2-x/2.5,check_flag.width/4,check_flag.height/4);

  /*---------Game Over Screen----------*/
  /*background(255,0,0);
  fill(0)
  textSize(60);
  text('YOU DIED',width/3+x-10,height/2-x);
  textSize(39);
  text('Click anywhere to try again',width/3+x-10,height/2+x/2);*/
}

function keyPressed() {
  if (keyCode === 32) {
    if (jump === false) {
      jump = true;
      dy=15; //When jumping change the y value by 15 pixels
      gravity = 0.5;
    }
  }
}
