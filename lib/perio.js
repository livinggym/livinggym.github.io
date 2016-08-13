this.addEventListener("load", chart, true);

function gbid(x) {
  if (typeof x == "string") return document.getElementById(x);
  return x;
  }
  
function upr(x) {
  return 114-(gbid(x).value)*6.6
  }



function draw(st, ed, x, y, z) {
	var mn = Math.round((st + ed) / 2)
	//ctx.moveTo(st,x);
	ctx.quadraticCurveTo(st-10,x,st,x);
	ctx.quadraticCurveTo(mn-10,y,mn,y);
	ctx.quadraticCurveTo(ed-6,z,ed,z);
}
function draw2(st, ed, x, y, z) {
	var mn = (st + ed) / 2
	ctx.lineTo(st,x);
	ctx.lineTo(mn,y);
	ctx.lineTo(ed,z);
}



function ansi(n) {
	if (n == 1) {return aa}
	else if (n == 2) {return bb;}
	else if (n == 3) {return cc;}
}



function chart(){
c = document.getElementById("urb");
ctx = c.getContext("2d");

ctx.beginPath();
ctx.clearRect(0, 0, 910, 400);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 3;
ctx.strokeStyle = "blue";
ctx.moveTo(012,upr(b181));
draw(017,063,upr(b181),upr(b182),upr(b183));
draw(70,110,upr(b171),upr(b172),upr(b173));
draw(131,179,upr(b161),upr(b162),upr(b163));
draw(191,225,upr(b151),upr(b152),upr(b153));
draw(238,266,upr(b141),upr(b142),upr(b143));

ctx.moveTo(305,upr(b131));
draw(305,341,upr(b131),upr(b132),upr(b133));
draw(356,390,upr(b121),upr(b122),upr(b123));
draw(405,447,upr(b111),upr(b112),upr(b113));
draw(459,503,upr(b211),upr(b212),upr(b213));
draw(520,552,upr(b221),upr(b222),upr(b223));
draw(568,602,upr(b231),upr(b232),upr(b233));


ctx.moveTo(640,upr(b241));
draw(644,674,upr(b241),upr(b242),upr(b243));
draw(690,720,upr(b251),upr(b252),upr(b253));
draw(732,782,upr(b261),upr(b262),upr(b263));
draw(798,842,upr(b271),upr(b272),upr(b273));
draw(860,894,upr(b281),upr(b282),upr(b283));

ctx.stroke();
ctx.closePath();
}

function clar() {
//	alert('oooh');
c = document.getElementById("myCanvas");
ctx = c.getContext("2d");
}

