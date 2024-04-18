function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200);

  //this is a call to myShape()
  myShape(width / 2, height / 2, 1);
  myShape(width / 5, height / 4, 1);
  myShape(2 , width / 2, 2 , height / 4, 0.5); 
  
  
}

function myShape(x, y, s) {
  // make this function more interesting
  push(); // make a separate layer
  translate(x, y); // move the origin point
  scale(s);
  fill(255,0,0);
  ellipse(0, 0, 30, 50); // simple ellipse at the translated origin (0,0)
  
  pop(); // dispose of the layer
}
