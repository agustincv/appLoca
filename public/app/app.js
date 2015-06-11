
// SampleBackend
angular.module('myApp', ['ngRoute', 'ngCookies', 'ui.bootstrap', 'textAngular', 'pascalprecht.translate', 'translateApp', 'geolocation', 'ngMap'])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/',	                   		{ templateUrl: 'views/main.html',  controller: 'MainController' })
			.when('/login',                   	{ templateUrl: 'views/login.html',  controller: 'LoginController' })
			.when('/logout',                    { templateUrl: 'views/logout.html', controller: 'LogoutController' })
			.when('/import/:class', 			{ templateUrl: 'views/import.html', controller: 'ImportController' })

			.when('/contactos/',			 { templateUrl: 'views/contactos/list.html',   controller: 'ListContactosController' })
			.when('/contactos/select',	 { templateUrl: 'views/contactos/select.html', controller: 'SelectContactosController' })
			.when('/contactos/add',        { templateUrl: 'views/contactos/edit.html',   controller: 'EditContactosController' })
			.when('/contactos/edit/:id', 	 { templateUrl: 'views/contactos/edit.html',   controller: 'EditContactosController' })
			.when('/contactos/delete/:id', { templateUrl: 'views/contactos/edit.html', 	 controller: 'EditContactosController' })
			.when('/contactos/view/:id', 	 { templateUrl: 'views/contactos/edit.html', 	 controller: 'EditContactosController' })
			.when('/usuarios/',			 { templateUrl: 'views/usuarios/list.html',   controller: 'ListUsuariosController' })
			.when('/usuarios/select',	 { templateUrl: 'views/usuarios/select.html', controller: 'SelectUsuariosController' })
			.when('/usuarios/add',        { templateUrl: 'views/usuarios/edit.html',   controller: 'EditUsuariosController' })
			.when('/usuarios/edit/:id', 	 { templateUrl: 'views/usuarios/edit.html',   controller: 'EditUsuariosController' })
			.when('/usuarios/delete/:id', { templateUrl: 'views/usuarios/edit.html', 	 controller: 'EditUsuariosController' })
			.when('/usuarios/view/:id', 	 { templateUrl: 'views/usuarios/edit.html', 	 controller: 'EditUsuariosController' })

			.when('/admin/webHooks/', { templateUrl: 'views/admin/webHooks.html', controller: 'AdminWebHooksController' })
			.when('/admin/apiKeys/',  { templateUrl: 'views/admin/apiKeys.html', controller: 'AdminApiKeysController' })

			.when('/403',  		 	 { templateUrl: 'views/403.html' })

			.otherwise({ redirectTo: '/login' });
	}])

	.constant('AUTH_EVENTS', {
		loginSuccess: 'auth-login-success',
		loginFailed: 'auth-login-failed',
		logoutSuccess: 'auth-logout-success',
		sessionTimeout: 'auth-session-timeout',
		notAuthenticated: 'auth-not-authenticated',
		notAuthorized: 'auth-not-authorized'
	})

	.constant('USER_ROLES', {
		admin: 'admin'
	})

	.run(['$rootScope', '$location', 'Session', function($rootScope, $location, Session) {
		// register listener to watch route changes
		$rootScope.$on( "$routeChangeStart", function(event, next, current) {
			if ( $rootScope.isLogged !== true  ) {
				if ( next.templateUrl == "views/login.html" ) {
				  // already going to #login, no redirect needed
				} else {
					// not going to #login, we should redirect now (and store current route for later redirect)
					$rootScope.requestedRoute = $location.path();
					$location.path( "/login" );
				}
			}
			else {
				//logged. Check Role Authorization
				if ( next.templateUrl && (next.templateUrl.substr(0, 12) === "views/admin/") ) {
					if (!Session.userHasRole("Admin")) {
						$location.path( "/403" );
					}
				}
			}		  			
		});
	}])
;

angular.module('myApp').value('baseUrl', 			'');
angular.module('myApp').value('baseApi', 			'/api');
angular.module('myApp').value('documentationUrl', 	'/api/documentation');

