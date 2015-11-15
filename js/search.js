angular.module('Gainzzz', [])

.controller('SearchCtrl',function($scope, $log){
	$scope.searchTerm = '';
	$scope.filterTerms = [];
	$scope.$log = $log;
	// var pop = function()

	$scope.search = function(searchTerm){
		// $scope.message(window.location.href);
		console.log(window.location.href);
		$scope.arrayTerms.push(searchTerm);
		// window.location = './results.html';
	}

	$scope.includeDiet = function(){
		if ($scope.filterTerms.indexOf('includeDiet') == -1)
			$scope.filterTerms.push("includeDiet");
	};
	$scope.includeInjury = function(){
		if ($scope.filterTerms.indexOf('includeInjury') == -1)
			$scope.filterTerms.push("includeInjury");
	};
	$scope.includeExercise = function(){
		if ($scope.filterTerms.indexOf('includeExercise') == -1)
			$scope.filterTerms.push("includeExercise");
	};
	$scope.includeStretch = function(){
		if ($scope.filterTerms.indexOf('includeStretch') == -1)
			$scope.filterTerms.push("includeStretch");
	};
});
