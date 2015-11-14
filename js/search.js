angular.module('Gainzzz', [])

.controller('SearchCtrl', function($scope){
	$scope.searchTerm = '';
	$scope.arrayTerms = ['sdf','asdf'];

	$scope.search = function(searchTerm){
		$scope.arrayTerms.push(searchTerm);
	};
});
