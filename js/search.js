angular.module('Gainzzz', [])

.controller('SearchCtrl',function($scope, $log){
	$scope.searchTerm = '';
	$scope.arrayTerms = [];
	$scope.$log = $log;
	// var pop = function()

	$scope.search = function(searchTerm){
		// $scope.message(window.location.href);
		console.log(window.location.href);
		$scope.arrayTerms.push(searchTerm);
		// window.location = './results.html';
	}

	$scope.includeDiet = function(){
		if ($scope.arrayTerms.indexOf('includeDiet') == -1)
			$scope.arrayTerms.push("includeDiet");
	};
	$scope.includeInjury = function(){
		if ($scope.arrayTerms.indexOf('includeInjury') == -1)
			$scope.arrayTerms.push("includeInjury");
	};
	$scope.includeExercise = function(){
		if ($scope.arrayTerms.indexOf('includeExercise') == -1)
			$scope.arrayTerms.push("includeExercise");
	};
	$scope.includeStretch = function(){
		if ($scope.arrayTerms.indexOf('includeStretch') == -1)
			$scope.arrayTerms.push("includeStretch");
	};
});
