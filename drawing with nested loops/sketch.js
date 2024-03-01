// Grdient Background + Nested Loops
// Kaiwen Yang
// Feb 29th, 2024
// Creating a gradient + drawing with nested loops

let rectHeight = 10;
let circleSize = 20;
let spacing = 25;
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  gradientBackground();
  nestedLoops();
}



function circleDistance(x1,y1,x2,y2){
  let a = abs(x1-x2);
  let b = abs(y1-y2);
  let c = sqrt(pow(a,2) + pow(b,2));
  return c;

}
function nestedLoops(){
  for(let x=0; x<width; x+=spacing){
    for(let y =0; y<height; y+=spacing){
      let d = round(circleDistance(x,y,mouseX,mouseY));
      let currentSize = circleSize;
      if(d>100){
        fill(0);
      }
      else{
        fill(255,0,0);
        currentSize = circleSize*1.2;
      }



      rect(x,y,currentSize);
      fill(255);
      textAlign(CENTER,CENTER);
      text(d,x,y);

    }
  }
}
function gradientBackground(){
  let y = 0;
  while(y<height){
    let c = color(mouseX,map(y,0,height, 255, 0), mouseY,map(y,0,height,0,255));
    fill(c);
    rect(0,y,width,rectHeight);
    y += rectHeight;
  }
}