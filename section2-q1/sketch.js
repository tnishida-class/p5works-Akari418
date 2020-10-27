// 小手調べ
function setup(){
  noFill ();
  for(let i = 0; i < 10; i++){
ellipse (50,50,10*(i+1));
if(i < 4){
    stroke(0,0,255);
}
else{
  stroke (255,0,0);
}
}
}
