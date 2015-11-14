angular.module('Gainzzz')

.factory('results', function(){
	var workouts = 
		{"exercises": [
			{"description": "something useful", 
			"name": "bicep curl"}, 

			{"description": "something also useful", 
			"name": "pec fly"}
		], 
		"muscle": {
			"description": "something useful", 
			"name": "biceps"
		}};
});