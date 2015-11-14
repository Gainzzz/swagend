angular.module('Gainzzz', [])

.factory('results', function showResults(diet, aid, work, stretch){
	console.log('test');
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
