app.config(['$routeProvider', 'CONFIG', 'ROLES', function($routeProvider, CONFIG, ROLES){
	$routeProvider.when('/', {
		redirectTo:'/home'
	}).when('/home', {
		templateUrl:CONFIG.TEMPLATE_DIR+'home.html',
		controller:'homeCtrl',
		data:{
			authorized:[ROLES.ADMIN.ROL, ROLES.REGISTERED.ROL]
		}
	}).when('/admin', {
		templateUrl:CONFIG.TEMPLATE_DIR+'admin.html',
		controller:'adminCtrl',
		data:{
			authorized:[ROLES.ADMIN.ROL]
		}
	}).when('/registered', {
		templateUrl:CONFIG.TEMPLATE_DIR+'registered.html',
		controller:'registeredCtrl',
		data:{
			authorized:[ROLES.ADMIN.ROL]
        }
	}).when('/guest', {
		templateUrl:CONFIG.TEMPLATE_DIR+'guest.html',
		controller:'guestCtrl',
		data:{
			authorized:[ROLES.GUEST.ROL]
		}
	}).when('/sesion', {
		templateUrl:CONFIG.TEMPLATE_DIR+'sesion.html',
		controller:'sesionCtrl',
		data:{
			authorized:[ROLES.GUEST.ROL, ROLES.ADMIN.ROL, ROLES.REGISTERED.ROL]
		}
	}).when('/404', {
		templateUrl: 'templates/404.html',
		controller: '404'
	}).otherwise({
		redirectTo:'/404'
	})
}])