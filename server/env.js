var path = require('path'),
	rootPath = path.normalize(__dirname + '/../../');
//mongodb+srv://gymmanagement:<password>@gymmanagement.zh17y.mongodb.net/gymmanagement?retryWrites=true&w=majority
module.exports = {
	// development: {
	// 	rootPath: rootPath,
	// 	db: 'mongodb://gymmanagement:ai04051808!@ds361968.mlab.com:61968/gymmanagement',
	// 	port: process.env.PORT || 3000
	// },
	development: {
		rootPath: rootPath,
		db: 'mongodb+srv://gymmanagement:ai04051808!@gymmanagement.zh17y.mongodb.net/gymmanagement?retryWrites=true&w=majority',
		port: process.env.PORT || 3000
	},
	production: {
		rootPath: rootPath,
		db: process.env.MONGOLAB_URI || 'you can add a mongolab uri here ($ heroku config | grep MONGOLAB_URI)',
		port: process.env.PORT || 80
	}
};