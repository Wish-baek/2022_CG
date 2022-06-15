var cols, rows;
var scl = 20;
var w = 1400;
var h = 1000;
var a=0;
var b=5;
var c=10;
var bg = 0;
var flying = 0;
var i=-300;
var img;
var obj;
var terrain = [];
var ry = 0.1;
var tr = -300;

function preload() {
  img = loadImage('pattern.jpeg');
  obj = loadModel('cloud.obj');
}
function setup() {
  createCanvas(600, 600, WEBGL);
  cols = w / scl;
  rows = h / scl;
  fill(255);
  
  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }
    

}

function draw(){
  background(185, 235, 255, 180);

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
  
  fill(a, b, c, 170);
  b+=1;
  c+=2;
  a+=5;
  if (a == 250) a = 0;
  if (b == 250) b = 5;
  if (c == 250) c = 10;
  
  push();
  translate(-300,-700);
  fill(255, 255, 255, 220);
  scale(0.7);
  translate(tr, -200);
  tr += 5;
  if(tr == 2000) tr = -800;
  rotateX(1.7);
  rotateY(ry);
  ry += 0.01;
  rotateZ(0.1);
  model(obj);
  pop();
  
  push();
  //normalMaterial();
  translate(i, i );
  i += 2;
  if (i == 300) i = -300;
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  texture(img);
  torus(50, 20);
  pop();
  
 
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