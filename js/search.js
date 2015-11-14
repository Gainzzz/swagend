angular.module('Gainzzz', [])

.controller('SearchCtrl', function($scope){
	$scope.searchTerm = '';
	$scope.arrayTerms = ['sdf','asdf'];

	$scope.search = function(searchTerm){
		$scope.arrayTerms.push(searchTerm);
	}

	$scope.includeDiet = function(){
		$scope.arrayTerms.push("includeDiet");
	};
	$scope.includeInjury = function(){
		$scope.arrayTerms.push("includeInjury");
	};
	$scope.includeExercise = function(){
		$scope.arrayTerms.push("includeExercise");
	};
	$scope.includeStretch = function(){
		$scope.arrayTerms.push("includeStretch");
	};
});
