//this.addEventListener("load", clear, true);

aa = 50
bb = 40
cc = 50
dd = 40
ee = 30
ff = 40
gg = 40
hh = 30
ii = 40

function gbid(x) {
  if (typeof x == "string") return document.getElementById(x);
  return x;
  }


function draw(st, ed, x, y, z) {
	var mn = (st + ed) / 2
	ctx.quadraticCurveTo(st-5,x,st,x);
	ctx.quadraticCurveTo(mn-5,y,mn,y);
	ctx.quadraticCurveTo(ed-5,z,ed,z);
//	ctx.lineTo(st,x);
//	ctx.lineTo(mn,y);
//	ctx.lineTo(ed,z);
	}



function ansi(n) {
	if (n == 1) {return aa}
	else if (n == 2) {return bb;}
	else if (n == 3) {return cc;}
}



function chart(){
c = document.getElementById("myCanvas");
ctx = c.getContext("2d");

var bb = gbid(text1).value
ctx.beginPath();
ctx.clearRect(0, 0, 200, 100);
ctx.closePath();


ctx.beginPath();
ctx.lineWidth=2;
ctx.strokeStyle = "black";
ctx.moveTo(0,10);
ctx.lineTo(200,10);
ctx.moveTo(0,20);
ctx.lineTo(200,20);
ctx.moveTo(0,30);
ctx.lineTo(200,30);
ctx.moveTo(0,40);
ctx.lineTo(200,40);
ctx.moveTo(0,50);
ctx.lineTo(200,50);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(00,aa);
ctx.quadraticCurveTo(15,bb,20,bb);
ctx.quadraticCurveTo(35,cc,40,cc);
draw(54,86,dd,ee,ff)
draw(100,122,gg,hh,ii)
//ctx.fillRect(10,20,10,30)
ctx.stroke();
ctx.closePath();
}

function clar() {
//	alert('oooh');
c = document.getElementById("myCanvas");
ctx = c.getContext("2d");


}

