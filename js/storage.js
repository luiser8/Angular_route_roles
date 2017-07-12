app.controller('sesionCtrl', ['$scope', '$http', function($scope, $http){
	getDatos();
	getDatosModels();
	
	function getDatosModels(){
	$http.get('api/model.php').success(function(data){
		$scope.names = data;
		console.log(data);
	}).error(function(data){
		console.log('Error ' + data);
	});
	}

	function getDatos(){
	$http.get('api/datos.json').success(function(data){
		$scope.names = data;
		console.log(data);
	}).error(function(data){
		console.log('Error ' + data);
	});
	}
	$scope.addName = function(){
		$http.post('api/model.php', {
			op:'append',
			name: $scope.name,
			email:$scope.email
		}).success(function(data){
			//$scope.names = data;
			console.log(data);
		}).error(function(data){
			console.log('Error ' + data);
		});

		$scope.name = '';
		$scope.email = '';
	}
	$scope.getIds = function(id){
		console.log('Id is ' + id);
	}
}]);