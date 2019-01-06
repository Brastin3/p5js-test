var s_logo;
var frameCount = 0;
var x;
var y;
var xs = 4;
var ys = 4;
var sans;

function preload(){
  sans=loadSound("sans.mp3");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  //s_logo = loadImage("dvd.png");

  x=width/2;
  y=height/2;
  xs=4;
  ys=4;
  //sans.play();
  //background(0);
}

function draw(){
  frameCount+=1;
  background(0);
  //image(s_logo,0,0);
  colorMode(HSB);
  fill((frameCount*2)%400,255,frameCount);
  textSize(36);
  textAlign(CENTER);
  if(y<0||y>height){
    ys=-ys;
  }
  if(x<0||x>width){
    xs=-xs;
  }
  x+=xs;
  y+=ys;
  text("Click the screen",x+sin(frameCount/20)*50,y+cos(frameCount/20)*50);
  fill(255);
  //text("poopoo peepee",20,20);
  if(mouseIsPressed&&frameCount%10==0){
    sans.play();
  }
}

function dvd(){

}
