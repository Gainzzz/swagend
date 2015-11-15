angular.module('Gainzzz', ['ngDialog'])

.controller('SearchCtrl',function($scope, $log){
	$scope.searchTerm = '';
	$scope.filterTerms = [];
	$scope.$log = $log;
	// var pop = function()
	//$scope.muscleID = http

	$scope.search = function(searchTerm){
		var redirect_url;
		$.ajax({
			url: "http://52.88.98.2:8000/muscle/"+searchTerm+"/",
			method: "GET",
			async: false
		}).done(function(obj){
			redirect_url = "results.html?muscle_id=" + obj.id;
		});
		$.each($scope.filterTerms, function(index, value){
			redirect_url += "&" + value + "=True";
		});
		window.location.assign(redirect_url);
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
})

.controller('PersonalCtrl', function($scope){
	$scope.username = '';
	$scope.age = '';
	$scope.sex = '';
	$scope.heightin_cm = 175;
	$scope.weightin_kg = 70;
	$scope.bmi = 0;

	$scope.calculate = function(heightin_cm, weightin_kg, bmi){
		var bmi = weightin_kg/(heightin_cm*heightin_cm*100*100;
		console.log(bmi);
	}
});
