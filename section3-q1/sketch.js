// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255)
  balloon("I love keyakizaka46", 10, 50, 25 ,500);
}

function balloon(t, x, y, bc ,tc){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 30;
  fill(bc);
  rect(x, y, w + p * 2, h + p * 2);
  fill(tc);
  text(t, p + x, h + p + y);
}
