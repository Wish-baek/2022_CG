var cols, rows;
var scl = 20;
var w = 1400;
var h = 1000;
var a=0;
var b=50;
var c=200;
var bg = 0;
var flying = 0;
var a1 = -300;
var a2 = -300;
var b1 = 300;
var b2 = -250;
var c1 = -200;
var c2 = -200;

var terrain = [];
let img;
function preload() {
  obj = loadModel('Mercury 1K.obj');
}
function setup() {
  createCanvas(600, 600, WEBGL);
  cols = w / scl;
  rows = h / scl;
  fill(255);
  model(obj);
  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }
    

}

function draw(){
  background(0, 0, 255, 180);
    
  flying -= 0.1;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.15;
    }
    yoff += 0.15;
  }
  noStroke();

  
  
  translate(0, 50);
  rotateX(PI / 3);
  fill(255, 250);
  b+=0;
  c+=5;
  a+=10;
  if (a == 250) a -= 5;
  if (b == 250) a -= 5;
  if (c == 250) a -= 5;
  
  push();
  fill(68, 24, 24);
  translate(a1,a2);
  a1 += 2;
  a2 += 1;
  if (a1 == 300) a1 =-300;
  if (a2 == 300) a2 =-300;
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  torus(30, 15);
  pop();
  
  push();
  fill(68, 24, 24);
  translate(b1,b2);
  b1 -= 2;
  b2 += 2;
  if (b1==-300) b1 = 300;
  if (b2==300) b2 = -300;
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.03);
  torus(30, 15);
  pop();
  
  push();
  fill(68, 24, 24);
  translate(c1,c2);
  c1 += 2;
  c2 += 2.5
  if (c1==300) i3 = -300;
  if (c2==300) 
  rotateX(frameCount * 0.04);
  rotateY(frameCount * 0.04);
  torus(30, 15);
  pop();
  
  if (c==250) c = 0;
  if (b==0) b = 250;
  translate(-w / 2, -h / 2);
  for (var y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
    }
    endShape();
  }
  
}