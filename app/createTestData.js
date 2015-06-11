//Create test data for backend services
var mongoose = require('mongoose');

var models = require('./model');

var dbName = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/DemoDb';
mongoose.connect(dbName);


// Clear the database of old data
mongoose.model('contactos').remove(function (error) {
  if (error) {
  	throw error;
  }
});
mongoose.model('usuarios').remove(function (error) {
  if (error) {
  	throw error;
  }
});

console.log('Data deleted on: ' + dbName);

// Put the fresh data in the database
//Data for Contactos ---------------------------
console.log('  Creating data for  Contactos.');

mongoose.model('contactos').create( {
		nombre: 'Nombre0',
		apellido: 'Apellido1',
		telefono: 'Telefono2'
	}, function (error) { 
		if (error) {
			throw error;
		} 
	}
);
mongoose.model('contactos').create( {
		nombre: 'Nombre3',
		apellido: 'Apellido4',
		telefono: 'Telefono5'
	}, function (error) { 
		if (error) {
			throw error;
		} 
	}
);
mongoose.model('contactos').create( {
		nombre: 'Nombre6',
		apellido: 'Apellido7',
		telefono: 'Telefono8'
	}, function (error) { 
		if (error) {
			throw error;
		} 
	}
);
mongoose.model('contactos').create( {
		nombre: 'Nombre9',
		apellido: 'Apellido10',
		telefono: 'Telefono11'
	}, function (error) { 
		if (error) {
			throw error;
		} 
	}
);
mongoose.model('contactos').create( {
		nombre: 'Nombre12',
		apellido: 'Apellido13',
		telefono: 'Telefono14'
	}, function (error) { 
		if (error) {
			throw error;
		} 
	}
);
//Data for Usuarios ---------------------------
console.log('  Creating data for  Usuarios.');

mongoose.model('usuarios').create( {
		username: 'Username15',
		password: 'Password16'
	}, function (error) { 
		if (error) {
			throw error;
		} 
	}
);
mongoose.model('usuarios').create( {
		username: 'Username17',
		password: 'Password18'
	}, function (error) { 
		if (error) {
			throw error;
		} 
	}
);
mongoose.model('usuarios').create( {
		username: 'Username19',
		password: 'Password20'
	}, function (error) { 
		if (error) {
			throw error;
		} 
	}
);
mongoose.model('usuarios').create( {
		username: 'Username21',
		password: 'Password22'
	}, function (error) { 
		if (error) {
			throw error;
		} 
	}
);
mongoose.model('usuarios').create( {
		username: 'Username23',
		password: 'Password24'
	}, function (error) { 
		if (error) {
			throw error;
		} 
	}
);

console.log('Fake Data created on: ' + dbName);
