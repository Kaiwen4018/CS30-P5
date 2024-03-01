// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let xPos, yPos;

function setup() {
  createCanvas(400, 300);
  xPos = [];
  yPos = [];
  initWithLoops();
}

function initWithLoops(){
  for (let x=10; x<width; x+=40){
    xPos.push(x);
    yPos.push(height); 
  }
  for (let x=10; x<width; x+=40){
    xPos.push(x);
    yPos.push(0); 
  }



  for (let y=10; y<height; y+=40){
    xPos.push(width);
    yPos.push(y);
  }

  for (let y=10; y<height; y+=40){
    xPos.push(0);
    yPos.push(y);
  }
}


function draw() {
  background(220);
  cornersAndMouse();
  cornersAndMouseLoop();
}


function mousePressed(){
  xPos.push(mouseX);
  yPos.push(mouseY);
}


function cornersAndMouseLoop(){
  let i = 0;
  while(i < xPos.length){
    let x = xPos[i];
    let y = yPos[i];
    circle(x,y,20);
    fill(10);
    line(x,y,mouseX,mouseY);
    i++;
  }
  circle(mouseX, mouseY, 20);
}


function cornersAndMouse(){
  //draw some circles near each of the four corners
  //and connect some lines from there to the mouse position
 
  circle(mouseX, mouseY, 20);

}