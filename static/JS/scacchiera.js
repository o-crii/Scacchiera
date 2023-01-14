let l = 40
let x = 0
let y = 0
let w = 400

let Colorelat = false
function setup() {
  createCanvas(400, 400);
}

function draw() {
  if(Colorelat == true) {
    fill(255,255,255)
    Colorelat = false
  } else if (Colorelat == false) {
    fill(0,0,0)
    Colorelat = true
  }
  noStroke()
  square(x, y, l)
 

 
  x = x + l
 
  if(x>=w) {
    y = y + l
    x = 0
    Colorelat = !Colorelat
  }
}

//! serve per fare il contrario//