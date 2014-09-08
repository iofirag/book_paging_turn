var width = $( window ).width()*0.70;
var height = $( window ).height()*0.80;
jQuery(document).ready(function($) {
	$("#flipbook").turn({
	    width: width,
	    height: height,
	    autoCenter: true
	});
	dragAndDrop_init();
});

function dragAndDrop_init() {
	$(".holder").css("height", (height-30)+"px");
	var holder = $(".holder"), state = $(".status");
	// length of 'holder' & 'state' are the same
	for (i=0; i<holder.length; i++){
		if (!holder[i]) 
			i=0;
			
		if ( typeof window.FileReader === 'undefined') {
			state[i].id = 'fail';
		} else {
			state[i].id = 'success';
			//state[i].innerHTML = 'File API & FileReader available';
		}
	
		holder[i].ondragover = function() { 
			this.id ='hover';
			return false;
		};
		holder[i].ondragend = function() { debugger;
			this.id = '';
			return false;
		};
		holder[i].ondrop = function(e) { 
			this.id = '';
			this.innerHTML = "";
			e.preventDefault();
			
			var file = e.dataTransfer.files[0], reader = new FileReader();
			reader.onload = function(event) {
				console.log(event.target);
				// 'e.target' is equal to 'holder[i]'
				e.target.style.background = 'url(' + event.target.result + ') no-repeat center';
			};
			console.log(file);
			reader.readAsDataURL(file);
	
			return false;
		};
	}
}


function getNumberOf_lastPage(){
	return $("#flipbook").turn("pages");
}

function addPage(){	
	debugger;
	// Delete the last 3 pages
		removePage("last");
		removePage("last");
		removePage("last");
		
		addPageElement();
		
		odd = getNumberOf_lastPage() % 2;
		if (odd) {
			console.log('odd');
		} else {
			addPageElement();
			console.log('even');
		}

		// Adding page
		element = $("<section />").html("<input type='button' value='+ Add page' onclick='addPage()'/>");
		$("#flipbook").turn("addPage", element, getNumberOf_lastPage() + 1);

		// Add the 2 last hard pages
		element = $("<section class='hard' />");
		$("#flipbook").turn("addPage", element, getNumberOf_lastPage() + 1);
		element = $("<section class='hard' />");
		$("#flipbook").turn("addPage", element, getNumberOf_lastPage() + 1);

		dragAndDrop_init();
		
		console.log('add complete');
}

function addPageElement(){
	// Add more normal page
	element = $("<article />").html("<section>\
										<section class='holder'></section>\
										<p class='status'></p>\
									</section>");
	$("#flipbook").turn("addPage", element, getNumberOf_lastPage() + 1);
}

function removePage(number){
	if (number=="last"){
		$("#flipbook").turn("removePage", getNumberOf_lastPage() );
	}else{
		$("#flipbook").turn("removePage", number);
	}
}


