var app = angular.module("book", []);

app.controller("bookController", function($scope) {
	$scope.pages = 4;
	$scope.getNumberOf_lastPage = function(){
		return $("#flipbook").turn("pages");
	};
	$scope.removePage = function(number) {
		if (number == "last") {
			$("#flipbook").turn("removePage", $scope.getNumberOf_lastPage());
		} else {
			$("#flipbook").turn("removePage", number);
		}
	};
	$scope.addPage = function() {
		// Delete the last 3 pages
		$scope.removePage("last");
		$scope.removePage("last");
		$scope.removePage("last");
		
		// Add normal page
		element = $("<div />").html("Page "+($scope.getNumberOf_lastPage()-1) );
		$("#flipbook").turn("addPage", element, $scope.getNumberOf_lastPage() + 1);
		
		odd = $scope.getNumberOf_lastPage() % 2;
		if (odd) {
			console.log('odd');
		} else {
			// Add more normal page
			element = $("<div />").html("Page "+($scope.getNumberOf_lastPage()-1) );
			$("#flipbook").turn("addPage", element, $scope.getNumberOf_lastPage() + 1);
			console.log('even');
		}

		// Adding page
		element = $("<section />").html("<input type='button' value='+ Add ng page' ng-click='addPage()'/>");
		$("#flipbook").turn("addPage", element, $scope.getNumberOf_lastPage() + 1);

		// Add the 2 last hard pages
		element = $("<div class='hard' />");
		$("#flipbook").turn("addPage", element, $scope.getNumberOf_lastPage() + 1);
		element = $("<div class='hard' />");
		$("#flipbook").turn("addPage", element, $scope.getNumberOf_lastPage() + 1);

		console.log('add complete');
	};
});