angular.module('myApp').service('MetadataService', [function () {
	var MetadataService = {};


	var metaData = {
		"contactos" 		: 	["nombre","apellido","telefono"],
		"usuarios" 		: 	["username","password"]	};

	MetadataService.getPropertiesFor = function (className) {
		return (metaData[className] || [] ).slice(0);
	};

	MetadataService.getResourceList = function() {
		return [{
			key: 'contactos',
			value: 'Contactos'	
		}, {
			key: 'usuarios',
			value: 'Usuarios'	
		}];
	};

	return MetadataService;

}]);
