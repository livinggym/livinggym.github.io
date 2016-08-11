function setImageVisible(id, visible) {
    var img = document.getElementById(id);
    img.style.visibility = (visible ? 'visible' : 'hidden');
}

function toggleContent() {
  // Get the DOM reference
  var contentooth = document.getElementById("13");
  // Toggle 
  contentooth.style.display == "block" ? contentooth.style.display = "none" : 
contentooth.style.display = "block"; 
}

// getElementById
function gbid(x) {
  if (typeof x == "string") return document.getElementById(x);
  return x;
  }

function zzz() {
	gbid("aaa").innerHTML = "New text!"
	}
	

function nat(tooth) {
	var img_w = gbid(tooth).width
	gbid(tooth).style.visibility = 'visible';
	gbid(tooth).src = "img/" + tooth + ".jpg";
	gbid(tooth).width = img_w;
	// alert(img_w)
	}
	
function ext(tooth) {
	var img_w = gbid(tooth).width
	gbid(tooth).style.visibility = 'hidden';
	// alert(img_w)
	}

function imp(tooth) {
	var img_w = gbid(tooth).width
	gbid(tooth).style.visibility = 'visible';
	gbid(tooth).src = "img/imp.jpg";
	gbid(tooth).width = img_w;
	gbid(tooth).height = "121";
	}
