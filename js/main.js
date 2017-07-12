var app = angular.module('app', ['ngRoute']);
//Constantes
app.constant('CONFIG', {
	TEMPLATE_DIR:'templates/',
	ROL_CURRENT_USER:3
}).constant('ROLES', {
	ADMIN:{
		ROL:1,
		PATH:'/admin'
	},
	REGISTERED:{
		ROL:2,
		PATH:'/registered'		
	},
	GUEST:{
		ROL:3,
		PATH:'/guest'		
	},
	NEGADO:{
		PATH:'/404'		
	}
}).run(['$rootScope', '$location', 'CONFIG', 'ROLES', function($rootScope, $location, CONFIG, ROLES){
	$rootScope.$on('$routeChangeStart', function(event, next){
		if(next.data !== undefined){
			if(next.data.authorized.indexOf(CONFIG.ROL_CURRENT_USER) !== -1){
				console.log('Entra');
			}else{
				if(CONFIG.ROL_CURRENT_USER == 1){
					$location.path(ROLES.ADMIN.PATH);
				}else if(CONFIG.ROL_CURRENT_USER == 2){
					$location.path(ROLES.REGISTERED.PATH);
				}else if(CONFIG.ROL_CURRENT_USER == 3){
					$location.path(ROLES.GUEST.PATH);
				}else{
					$location.path(ROLES.NEGADO.PATH);
				}
			}
		}
	});
}]);