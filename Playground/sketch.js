var sizW;
var sizH;

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(0);
  
  sizW = (width/2) + (5*frameCount);
  
  if (sizW >= windowWidth) {
       sizW * -1;
  }
  ellipse(width/2,height/2,(width/2)+(5*frameCount),(height/2)-(5*frameCount));
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}