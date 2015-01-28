var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function($scope, $routeParams, teamService, teamData){

	$scope.teamData = teamData;
	// console.log($scope.teamData);

	$scope.showNewGameForm = false;
	$scope.toggleNewGameForm = function() {
		$scope.showNewGameForm = !$scope.showNewGameForm;
	}
	
	console.log($routeParams.team);

	switch($routeParams.team) {
		case "utahjazz" :
			$scope.homeTeam = 'Utah Jazz';
			$scope.logoPath = 'images/jazz-logo.png';
			break;
		case "losangeleslakers" :
			$scope.homeTeam = 'Los Angeles Lakers';
			$scope.logoPath = 'images/lakers-logo.png';
			break;
		case "miamiheat" :
			$scope.homeTeam = 'Miami Heat';
			$scope.logoPath = 'images/heat-logo.png';
			break;
	}

	$scope.newGame = {
		homeTeam: $scope.homeTeam.split(' ').join('').toLowerCase()
	};

	$scope.submitGame = function() {
		// console.log($scope.newGame);
		teamService.addNewGame($scope.newGame).then(function() {
			teamService.getTeamData($scope.newGame.homeTeam).then(function(results) {
				// console.log(results);
				$scope.teamData = results;
				$scope.newGame = {};
				$scope.showNewGameForm = false;
			})
		});
	}


	// console.log($scope);


	// console.log($scope.teamData);





});