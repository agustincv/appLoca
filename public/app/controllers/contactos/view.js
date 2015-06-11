angular.module('myApp').controller('ViewContactosController', ['$scope', '$routeParams', '$location', 'ContactosService', function($scope, $routeParams, $location, ContactosService) {

	function init() {
		$scope.contactos = {
			nombre : null, 
			apellido : null, 
			telefono : null 
		
		};
		$scope.dataReceived = false;

		ContactosService.getDocument($routeParams.id).then(function (httpResponse) {
			$scope.contactos = httpResponse.data;
			$scope.dataReceived = true;
		});

	}

	$scope.gotoList = function (event) {
		$location.path('/contactos/');
	};	
	$scope.edit = function (event) {
		$location.path('/contactos/edit/' + $scope.contactos._id );
	};

	init();

}]);
