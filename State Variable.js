function setup() {
  createCanvas(400, 400);
}


a = 0;
b = 0;
function move(){
  if (b===0 && a<350){
    a+=5;
  }
  else if(a === 350 && b<350){
    b+=5;
    }
  else if(a === 350 || b >0 && a>0){
    a-=5;
    }
  else if (a===0&&b>0){
    b-=5

  }
}



function draw() {
  background(220);
  square(a,b,50);
  move();
}