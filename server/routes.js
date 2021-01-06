const express = require('express'),
	path = require('path'),
	rootPath = path.normalize(__dirname + '/../'),
	router = express.Router(),
	{ execriseTypeController,
		execriseController,
		workoutController,
		HomeController } = require('./controllers');

module.exports = function (app) {

	router.get('/', HomeController.index);

	// execrise type routes
	router.get('/exTypes', execriseTypeController.index);
	router.post('/exType', execriseTypeController.store);
	router.get('/exType/:id', execriseTypeController.show);
	router.put('/exType/:id', execriseTypeController.update);


	// execrise routes
	router.get('/exercises', execriseController.index);

	// Workout routes
	router.get('/workouts', workoutController.index);

	// router.post('/authors', AuthorsController.store);
	// router.get('/authors/:id', AuthorsController.show);
	// router.put('/authors/:id', AuthorsController.update);
	// router.delete('/authors/:id', AuthorsController.remove);

	app.use('/api', router);
};