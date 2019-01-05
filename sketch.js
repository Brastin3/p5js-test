var s_logo;
var frameCount = 0;
function setup(){
  createCanvas(windowWidth,windowHeight);
  s_logo = loadImage("dvd.png");

}

function draw(){
  frameCount+=1;
  background(0);
  //image(s_logo,0,0);
  colorMode(HSB);

  fill((frameCount*2)%400,255,frameCount);
  textSize(36);
  textAlign(CENTER);
  text("Brastin is very cool",width/2,height/2);

}

function dvd(){

}
