function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(220);
  
  let rectWidth = 40;
    
  
  stroke(51);
  line(200,rectWidth/2,rectWidth/2,200);

  fill('red');
  stroke(51);
  rect(200-rectWidth/2,0,rectWidth);
  

  fill('blue');
  stroke(51);
  rect(0,200-rectWidth/2,rectWidth);

}
