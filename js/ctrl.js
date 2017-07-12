app.controller('homeCtrl', ['$scope' ,function($scope){
	console.log('home');
}]).controller('adminCtrl', ['$scope' ,function($scope){
	console.log('admin');
}]).controller('registeredCtrl', ['$scope' ,function($scope){
	console.log('registered');
}]).controller('guestCtrl', ['$scope' ,function($scope){
	console.log('guest');
}]).controller('sesionCtrl', ['$scope' ,function($scope){
	console.log('sesion');
}]).controller('404', ['$scope' ,function($scope){
	console.log('404');
}]);