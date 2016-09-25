this.addEventListener("load", chart, true);
//this.addEventListener("load", draw3(18,17,53), true);

function avg(st,ed) {
  return Math.round((st + ed) / 2);
  }


function gbid(x) {
  if (typeof x == "string") return document.getElementById(x);
  return x;
  }
  

  
function cht(x) {
	if (1 == 1){
	return upb(x)
	}
  }
  
function upb(x) {
  return 114-(gbid(x).value)*6.6
  }


function pd(st,ed,a,b,c) {
  var mn = Math.round((st + ed) / 2);
  ctx.fillRect(st,20,6,20);
}

function chart2() {
	ctx.beginPath();
	ctx.fillStyle = "red";
	ctx.globalAlpha = 0.7
	var mn = avg(17,51)
	ctx.moveTo(017,cht(b184));
	ctx.lineTo(017,cht(b181));
	ctx.lineTo(avg(17,mn),avg(cht(b181),cht(b182)));
	ctx.lineTo(028,cht(b184));
	ctx.closePath();
	ctx.fill();
	ctx.closePath();
}




function draws(n, st, ed) {
	var x = cht(eval('b' + n + 1));
	var y = cht(eval('b' + n + 2));
	var z = cht(eval('b' + n + 3));
	var a = cht(eval('b' + n + 7));
	var b = cht(eval('b' + n + 8));
	var c = cht(eval('b' + n + 9));
	var mn = avg(st,ed)
	var t1 = st + Math.round((ed-st) / 3)
	var t2 = ed - Math.round((ed-st) / 3)
	var zz = eval('b' + n + 4)
	ctx.beginPath();
	ctx.globalAlpha = 0.7
	if (gbid(eval('b' + n + 4)).value >= 5) {
		ctx.moveTo(st,a);
		ctx.lineTo(st,x);
		ctx.lineTo(t1,avg(x,y));
		ctx.lineTo(t1,a);
		ctx.closePath();
		ctx.fill();
	}
	ctx.closePath();
	
	ctx.beginPath();
	ctx.globalAlpha = 0.7
	if (gbid(eval('b' + n + 5)).value >= 5) {
		ctx.moveTo(t2,b);
		ctx.lineTo(t1,b);
		ctx.lineTo(t1,avg(x,y));
		ctx.lineTo(mn,y);
		ctx.lineTo(t2,avg(z,y));
		ctx.closePath();
		ctx.fill();
	}
	ctx.closePath();

	ctx.beginPath();
	ctx.globalAlpha = 0.7
	if (gbid(eval('b' + n + 6)).value >= 5) {
		ctx.moveTo(ed,c);
		ctx.lineTo(t2,c);
		ctx.lineTo(t2,avg(z,y));
		ctx.lineTo(ed,z);
		ctx.fill();
	}
	ctx.closePath();
}

function draw2(st, ed, x, y, z) {
	var mn = avg(st,ed);
	ctx.lineTo(st,x);
	ctx.lineTo(mn,y);
	ctx.lineTo(ed,z);
}

function draw(n, st, ed) {
	var x = cht(eval('b' + n + 1));
	var y = cht(eval('b' + n + 2));
	var z = cht(eval('b' + n + 3));
	var mn = avg(st,ed);
	ctx.quadraticCurveTo(st,x,st,x);
	ctx.quadraticCurveTo(mn-10,y,mn,y);
	ctx.quadraticCurveTo(ed-10,z,ed,z);
}


var up = [18,17,16,15,14,13,12,11,21,22,23,24,25,26,27,28]
var upbx = [17,51,70,110]

function chart(){
ctx = document.getElementById("urb").getContext("2d");
ctx.beginPath();
ctx.clearRect(0, 0, 910, 400);
ctx.closePath();

	ctx.beginPath();
	ctx.fillStyle = "red";
	draws(18,17,51)
	

now = 'upb'
ctx.beginPath();
ctx.globalAlpha = 1
ctx.lineWidth = 3;
ctx.strokeStyle = "blue";
ctx.moveTo(017,cht(b181));

draw(up[0],17,51);
draw(up[1],70,110);
draw(16,131,179);
draw(15,191,225);
draw(14,238,266);

ctx.moveTo(305,cht(b131));
draw(13,305,341);
draw(12,356,390);
draw(11,405,447);
draw(21,459,503);
draw(22,520,552);
draw(23,568,602);

ctx.moveTo(640,cht(b241));
draw(24,644,674);
draw(25,690,720);
draw(26,732,782);
draw(27,798,842);
draw(28,860,894);
ctx.stroke();
ctx.closePath();
calp();

}

function cal(n){
	var x = eval('b' + n + 1).value;
	var y = eval('b' + n + 2).value;
	var z = eval('b' + n + 3).value;
	var a = eval('b' + n + 4).value;
	var b = eval('b' + n + 5).value;
	var c = eval('b' + n + 6).value;
	var t = x*1 + a*1;
	var u = y*1 + b*1;
	var v = z*1 + c*1;
	var d = 'b' + n + 7
	var e = 'b' + n + 8
	var f = 'b' + n + 9
	document.getElementById(d).value = t;
	document.getElementById(e).value = u;
	document.getElementById(f).value = v;
}

function calp(){
	for (i=0;i<=15;i++){
		var tmp = up[i]
		cal(tmp);
	};
}

