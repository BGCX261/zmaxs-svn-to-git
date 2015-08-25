var cbvis3 = false,cbload3 = false,cbvis2 = false,cbload2 = false,cbvis = false,cbload = false,cbcookie3 = "cboxvis3=";

function comment_SM (urlnya,lebarnya,tingginya,orangnya,targetnya) {var cbdiv = document.getElementById(targetnya);var cbbut = document.getElementById(orangnya);if (!cbvis) {if (!cbload) {cbdiv.innerHTML = '<iframe frameborder="0" width="'+lebarnya+'" height="'+tingginya+'" src="'+urlnya+'" marginheight="2" marginwidth="2" scrolling="auto" allowtransparency="yes"></iframe>';cbload = true;}cbdiv.style.display = "block";$(cbbut).css({'background-position':'-27px -322px'});}else {cbdiv.style.display = "none";$(cbbut).css({'background-position':'0 -185px'});}cbvis = !cbvis;}
function feed_SM (urlnya,lebarnya,tingginya,orangnya,targetnya) {var cbdiv2 = document.getElementById(targetnya);var cbbut2 = document.getElementById(orangnya);if (!cbvis2) {if (!cbload2) {cbdiv2.innerHTML = '<iframe frameborder="0" width="'+lebarnya+'" height="'+tingginya+'" src="'+urlnya+'" marginheight="2" marginwidth="2" scrolling="auto" allowtransparency="yes"></iframe>';cbload2 = true;}cbdiv2.style.display = "block";$(cbbut2).css({'background-position':'-77px -322px'});}else {cbdiv2.style.display = "none";$(cbbut2).css({'background-position':'-50px -220px'});}cbvis2 = !cbvis2;}



function togglecbox () {
	var cbdiv3 = document.getElementById("cboxdiv");
	var cbbut3 = document.getElementById("cboxbutton");

	if (!cbvis3) {
		if (!cbload3) {
			cbdiv3.innerHTML = '<iframe frameborder="0" width="200" height="305" src="http://www5.cbox.ws/box/?boxid=695235&amp;boxtag=q15t6b&amp;sec=main" marginheight="2" marginwidth="2" scrolling="auto" allowtransparency="yes" name="cboxmain5-695235" style="border:#ababab 1px solid;border-bottom:0px" id="cboxmain5-695235"></iframe><iframe frameborder="0" width="200" height="75" src="http://www5.cbox.ws/box/?boxid=695235&amp;boxtag=q15t6b&amp;sec=form" marginheight="2" marginwidth="2" scrolling="no" allowtransparency="yes" name="cboxform5-695235" style="border:#ababab 1px solid;border-top:0px" id="cboxform5-695235"></iframe>';
			cbload3 = true;
		}
		cbdiv3.style.display = "block";
		cbbut3.innerHTML = "Obrolan";
	}
	else {
		cbdiv3.style.display = "none";
		cbbut3.innerHTML = "Obrolan";
	}
	cbvis3 = !cbvis3;
	document.cookie = cbcookie3+((cbvis3)?1:0);
}
// Toggle Cbox open if it was previously
var cbcookiei3 = document.cookie.indexOf(cbcookie3);
if (cbcookiei3 >= 0) {
	if (document.cookie.substring(cbcookiei3+cbcookie3.length, cbcookiei3+cbcookie3.length+1) === "1") {
		togglecbox();
	}
}