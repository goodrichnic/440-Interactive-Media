function setup() {
  createCanvas(800,600);
}

var posX = 10;
var posY = 10;

function draw() {
  background('#ff00ff');

  fill( '#0000ff' );
  ellipse(posX,posY,20,20);

  posX = posX + 1;
  posY = posY + 1;

  if( posX >= width ) {
    posX = 10;
  }
  if( posY >= height ) {
    posY = 10;
  }

  fill('#00ff00');
  ellipse(mouseX,mouseY,25,25);

  if(dist(posX,posY,mouseX,mouseY) <= ){

  }

}
