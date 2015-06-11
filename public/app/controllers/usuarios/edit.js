angular.module('myApp').controller('EditUsuariosController', ['$scope', '$routeParams', '$location', '$translate', 'UserErrorService', 'UsuariosService', function($scope, $routeParams, $location, $translate, UserErrorService, UsuariosService) {

	$scope.isEdition = false;
	$scope.isCreation = false;
	$scope.isDeletion = false;
	$scope.isView = false;
	$scope.readOnly = false;
	$scope.dataReceived = false;
	$scope.obj = {
		username : null, 
		password : null 
		
	};

	$scope.add = function () {
		UsuariosService.add($scope.obj)
		              .then(gotoList, errorHandlerAdd);
	};
	$scope.update = function () {
		UsuariosService.update($scope.obj)
	              	  .then(gotoList, errorHandlerUpdate);
	};
	$scope.delete = function () {
		UsuariosService.delete($scope.obj._id)
		              .then(gotoList, errorHandlerDelete);		
	};
	function errorHandlerAdd(httpError) {
		$scope.errors = UserErrorService.translateErrors(httpError, "add");
	}
	function errorHandlerUpdate(httpError) {
		$scope.errors = UserErrorService.translateErrors(httpError, "update");
	}
	function errorHandlerDelete(httpError) {
		$scope.errors = UserErrorService.translateErrors(httpError, "delete");
	}
	function errorHandlerLoad(httpError) {
		$scope.errors = UserErrorService.translateErrors(httpError, "query");
	}

	function loadData(httpResponse) {
		$scope.obj = httpResponse.data;
		$scope.errors = null;
		$scope.dataReceived = true;
	}

	$scope.cancel = function () {
		gotoList();
	};
	$scope.gotoEdit = function() {
		$location.path('/usuarios/edit/' + $routeParams.id);		
	};
	$scope.gotoDelete = function() {
		$location.path('/usuarios/delete/' + $routeParams.id);		
	};
	function gotoList() {
		$location.path('/usuarios/');		
	}

	function init() {
		$scope.isDeletion = isDeletionContext();
		$scope.isView     = isViewContext();
		$scope.readOnly   = $scope.isDeletion || $scope.isView;

		if ($routeParams.id) {
			$scope.isEdition = !$scope.readOnly;
			$scope.isCreation = false;

			UsuariosService.getDocument($routeParams.id)
				.then(loadData, errorHandlerLoad);
		} else {
			$scope.isEdition = false;
			$scope.isCreation = true;
			$scope.dataReceived = true;
		}
	}
	function isDeletionContext() {
		return stringContains($location.path(), '/delete/');
	}
	function isViewContext() {
		return stringContains($location.path(), '/view/');
	}
	function stringContains(text, substring) {
		return text.indexOf(substring) > -1;
	}

	init();

}]);
