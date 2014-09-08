jQuery(document).ready(function($) {
	$("#flipbook").turn({
	    width: 400,
	    height: 300,
	    autoCenter: true
	});
	
	var holder = document.getElementById('holder'),
			    state = document.getElementById('status');
			
			if (typeof window.FileReader === 'undefined') {
			  state.className = 'fail';
			} else {
			  state.className = 'success';
			  state.innerHTML = 'File API & FileReader available';
			}
			 
			holder.ondragover = function () { this.className = 'hover'; return false; };
			holder.ondragend = function () { this.className = ''; return false; };
			holder.ondrop = function (e) {
			  this.className = '';
			  e.preventDefault();
			
			  var file = e.dataTransfer.files[0],
			      reader = new FileReader();
			  reader.onload = function (event) {
			    console.log(event.target);
			    holder.style.background = 'url(' + event.target.result + ') no-repeat center';
			  };
			  console.log(file);
			  reader.readAsDataURL(file);
			
			  return false;
			};
});

function getNumberOf_lastPage(){
	return $("#flipbook").turn("pages");
}

function addPage(){	
	// Delete the last 3 pages
		removePage("last");
		removePage("last");
		removePage("last");
		
		// Add normal page
		element = $("<div />").html("Page "+(getNumberOf_lastPage()-1) );
		$("#flipbook").turn("addPage", element, getNumberOf_lastPage() + 1);
		
		odd = getNumberOf_lastPage() % 2;
		if (odd) {
			console.log('odd');
		} else {
			// Add more normal page
			element = $("<div />").html("Page "+(getNumberOf_lastPage()-1) );
			$("#flipbook").turn("addPage", element, getNumberOf_lastPage() + 1);
			console.log('even');
		}

		// Adding page
		element = $("<section />").html("<input type='button' value='+ Add page' onclick='addPage()'/>");
		$("#flipbook").turn("addPage", element, getNumberOf_lastPage() + 1);

		// Add the 2 last hard pages
		element = $("<div class='hard' />");
		$("#flipbook").turn("addPage", element, getNumberOf_lastPage() + 1);
		element = $("<div class='hard' />");
		$("#flipbook").turn("addPage", element, getNumberOf_lastPage() + 1);

		console.log('add complete');
}

function removePage(number){
	if (number=="last"){
		$("#flipbook").turn("removePage", getNumberOf_lastPage() );
	}else{
		$("#flipbook").turn("removePage", number);
	}
}