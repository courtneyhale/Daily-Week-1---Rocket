function setup() {
  createCanvas(700,700);
  background('black');// black sky
  fill('red'); // rocket color
  rect(100,300,200,400); //rocket base
  fill('blue');//top color
  triangle(80,320,200,100,320,320); // rocket top
  fill('yellow'); //rocket window color
  ellipse(200,400,100,100); // rocket window
  fill('blue');//side triangle fill
  triangle(50,700,100,700,100,600);//left wing
  triangle(300,700,350,700,300,600);//right wing
  
  
}

function draw() {
  
}