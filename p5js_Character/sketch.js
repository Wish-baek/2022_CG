function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  translate(200, 200);
  fill(255, 255, 50);
  ellipse(0, 54, 40, 40);
  ellipse(0, -54, 40, 40);
  ellipse(54, 0, 40, 40);
  ellipse(-54, 0, 40, 40);
  ellipse(-38, +38, 40, 40);
  ellipse(38, -38, 40, 40);
  ellipse(-38, -38, 40, 40);
  ellipse(+38, +38, 40, 40);
  fill(255, 255, 255);
  ellipse(0, 0, 100, 100);
  fill(0, 0, 0);
  ellipse(-20, -5, 15, 25);
  ellipse(+20, -5, 15, 25);
  fill(255, 0, 0);
  arc(0, 20, 35, 30, 0, PI);

}