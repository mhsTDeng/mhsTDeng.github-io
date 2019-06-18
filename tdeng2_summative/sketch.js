
//declare global variables
let cloud;
let start_flag;
let check_flag;
let player;
let x = 0;
let y = 566;
let dy = 0;
let gravity = 0;
let jump = false;
let xSpeed = 7;
let level = 'start'
let getColour;
let platformColour = [237,196,87,255];
let fall = false;
let checkGround;



//load in images
function preload(){
  check_flag = loadImage('checkpoint_flag.png');
  start_flag = loadImage('start_flag.png');
  cloud = loadImage('cloud.png');
  player = loadImage('hero.png');
}


function setup() {
  createCanvas(1280,875);
  noStroke();
} //end function setup

function draw() {
  if (level==="start") {
    /*--------Start Menu--------*/
    background(85,129,255);

    //title
    fill(255);
    rect(605,175,285,75);
    fill(85,255,95);
    rect(615,185,270,60);
    fill(0);
    textSize(60);
    text('PENDING',615,235);

    //instructions
    textSize(39);
    text('Welcome to Pending!',540,415);
    text('1.Move with the left and right arrow keys',440,535);
    text('2.Jump with the space bar',440,585);
    text('3.Avoid or defeat enemies blocking your path',440,635);
    text('4.Reach the checkpoint flag to advance',440,685);
    text('CLICK ANYWHERE TO BEGIN',540,835);
  } //end level start

  /*--------Level 1--------*/
  else if (level ===1) {
    //Check ground colours
    checkGround = 0;

    //sky
    background(62,191,206);

    //hill
    fill(40,200,45);
    ellipse(240,840,400,600);

    //ground
    fill(237,196,87);
    rect(width-200,600,525,height-600);

    rect(0,600,525,height-600);


    //floating blocks
    rect(500,475,150,55);
    rect(700,350,150,55);
    rect(900,475,150,55);

    //clouds
    image(cloud,320,20,cloud.width/3,cloud.height/3);
    image(cloud,960,20,cloud.width/3,cloud.height/3);

    //flags
    image(start_flag,0,600-start_flag.height/4,start_flag.width/4,start_flag.height/4);
    image(check_flag,1050,600-check_flag.height/4,check_flag.width/4,check_flag.height/4);

    //find the colour directly under player
    getColour=get(x+player.width/2,y+player.height+1);

    for (let i=0; i<4; i++) {
      if (getColour[i]!=platformColour[i]) {
        jump=true;
        gravity = 0.5;
        break
      }
    }

    print(checkGround);



    //main character
    image(player,x,y);

    //move character
    if (keyIsDown(LEFT_ARROW)) {
     x-=xSpeed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
     x+=xSpeed;
    }

    //apply gravity
    y -= dy;
    dy -= gravity;






  } //end level 1

  else if (level === 2) {
    background(0,255,0);
  }

}//end draw function


function mousePressed() {
  if (level==="start") {
    level=1
  }



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
} //end mousePressed

function keyPressed() {
  if (keyCode === 32) {
      //Check to see if player is already jumping
      if (jump===false)
      {
        jump = true;
        dy=15; //When jumping change the y value by 15 pixels
        gravity = 0.5;
      }
  }
}//end keyPressed
