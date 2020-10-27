// 小手調べ
function setup(){
  noFill ();
  for(let i = 0; i < 10; i++){
    let j = i * 10 + 10;
ellipse (50,50,j,j);
if(i < 5){
    stroke(0,0,255);
}
else{
  stroke (255,0,0);
}
}
}
