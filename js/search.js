angular.module('Gainzzz', [])

.controller('SearchCtrl',function($scope, $log){
	$scope.searchTerm = '';
	$scope.filterTerms = [];
	$scope.$log = $log;
	// var pop = function()

	$scope.search = function(searchTerm){
		// $scope.message(window.location.href);
		console.log(window.location.href);
		resultQuery(searchTerm);
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

	function resultQuery(querystring){
		if (typeof(querystring) != 'string')
			return;
		else
		{
			switch (querystring) {
				case 'arms':
					return window.location = './results.html?muscle_id=' + 21;

				case 'chest':
					return window.location = './results.html?muscle_id=' + 16;
					// break;
				case 'thighs':
					return window.location = './results.html?muscle_id=' + 19;
					// break;

				default:
					console.log('no results');
			}
		}
	}
});
