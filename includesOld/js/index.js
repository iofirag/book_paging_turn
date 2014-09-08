var width = 1152;
var height = 752;

jQuery(document).ready(function($) {
	$("#flipbook").turn({
	    width: width,
	    height: height,
	    autoCenter: true
	});
	
	$("#flipbook").css("width", width+"px");
	$("#flipbook").css("height", height+"px");
	
	var pages = document.getElementsByClassName("page");
	var pages = $(".page");
	//console.log ( pages.length );
	
	// for (i=0; i<pages.length; i++){
		// console.log(i);
		// pages[i].style.width= width+"px";
		// pages[i].style.height= height+"px";
	// }
	
	
	//$(".page").css("width", width);
	//$(".page").css("height", height);
});