var circArr = [];
var enemyCirc = [];

var enemyCount = 1;

function setup() {
     createCanvas(windowWidth,windowHeight);

     // Clicker
     for (var i = 0; i < 4; i++) {
          circArr[i] = {
               xPos: width/2,
               yPos: height/2,
               diam: 15,
               r: 255,
               g:0,
               b:255,
               display: function() {
                    noStroke();
                    fill(this.r,this.g,this.b);
                    ellipse(this.xPos,this.yPos,this.diam,this.diam);
               },
               move: function() {
                    this.xPos = mouseX + random(-5,5);
                    this.yPos = mouseY + random(-5,5);
                    this.r = this.r - random(-50,50);
                    this.g = this.g - random(-50,50);
                    this.b = this.b - random(-50,50);
                    this.diam = this.diam + random(-5,5);
               },
          };
     }
     for (var j = 0; j < enemyCount; j++) {
          enemyCirc[j] = {
               xPos: random(width),
               yPos: random(height),
               diam: 10,
               enemy: function() {
                    fill(random(255),random(255),random(255));
                    ellipse(this.xPos,this.yPos,this.diam,this.diam);
               },
          };
     }
}

function draw() {

     background('#00ff00');

     for (var i = 0; i < 4; i++) {
          // Mouse Ball
          circArr[i].display();
          circArr[i].move();
          // Size Limiter
          if (circArr[i].diam >= width/2) {
               circArr[i].diam = 100;
          }

          for (var j = 0; j < enemyCount; j++) {
               enemyCirc[j].enemy();
               if (dist(circArr[i].xPos, circArr[i].yPos, enemyCirc[j].xPos, enemyCirc[j].yPos) <= (circArr[i].diam + enemyCirc[j].diam)) {
                    enemyCirc[j].xPos = random(width);
                    enemyCirc[j].yPos = random(height);
                    enemyCount = enemyCount + 1;
                    enemyCirc[j].diam = enemyCirc[j].diam + 2;
               }
          }
     }
}


function windowResized(){
     resizeCanvas(windowWidth, windowHeight);
}
