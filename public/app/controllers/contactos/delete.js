angular.module('myApp').controller('DeleteContactosController', ['$scope', '$routeParams', '$location', 'ContactosService', function($scope, $routeParams, $location, ContactosService) {

	function init() {
		$scope.contactos = {};
		$scope.dataReceived = false;

		if($location.path() !== '/contactos/delete') {
			ContactosService.getDocument($routeParams.id).then(function (httpResponse) {
				$scope.contactos = httpResponse.data;
				$scope.dataReceived = true;
			});
		} else {
			$scope.dataReceived = true;
		}
	}

	$scope.delete = function () {
		ContactosService.delete($scope.contactos._id).then(function () {
			$location.path('/contactos/');
		});
	};

	$scope.cancel = function () {
		$location.path('/contactos/');
	};

	init();

}]);
