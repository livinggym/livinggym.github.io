this.addEventListener("load", chart, true);

function gbid(x) {
  if (typeof x == "string") return document.getElementById(x);
  return x;
  }
  
function upr(x) {
  return 77-(gbid(x).value)*5.5
  }



function draw(st, ed, x, y, z) {
	var mn = (st + ed) / 2
	ctx.quadraticCurveTo(st-5,x,st,x);
	ctx.quadraticCurveTo(mn-5,y,mn,y);
	ctx.quadraticCurveTo(ed-5,z,ed,z);
}



function ansi(n) {
	if (n == 1) {return aa}
	else if (n == 2) {return bb;}
	else if (n == 3) {return cc;}
}



function chart(){
c = document.getElementById("urb");
ctx = c.getContext("2d");

var aa = upr(b181);
var bb = upr(b182);
var cc = upr(b183);

ctx.beginPath();
ctx.clearRect(0, 0, 250, 100);
ctx.closePath();


ctx.beginPath();
ctx.lineWidth=2;
ctx.strokeStyle = "blue";
ctx.moveTo(00,upr(b181));
draw(012,052,upr(b181),upr(b182),upr(b183))
draw(56,90,upr(b171),upr(b172),upr(b173))
draw(104,146,upr(b161),upr(b162),upr(b163))
draw(153,180,upr(b151),upr(b152),upr(b153))
draw(190,215,upr(b141),upr(b142),upr(b143))
ctx.stroke();
ctx.closePath();
}

function clar() {
//	alert('oooh');
c = document.getElementById("myCanvas");
ctx = c.getContext("2d");
}

