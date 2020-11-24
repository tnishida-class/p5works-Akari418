let n = 10;
let snows = new Array(100);
let v = 2.5;
function setup() {
  createCanvas(windowWidth, windowHeight);
  for(i = 0; i < snows.length; i++){
    snows[i] = [random(width), random(height), random(5,16)];
  }

}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight)}

function draw() {
  background(0)
  noStroke();
  for(j = 0; j < snows.length; j++){
    drawLight(snows[j]);
    snows[j][1] += v;
  }

}

function drawLight(snow){
  for(i = 0;i < n;i++){
    fill(255, 255/n);
    ellipse(snow[0], (snow[1])%height, (snow[2] / n)*(n - i));
  }
}
