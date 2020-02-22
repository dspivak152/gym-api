const { Workout } = require('../models/index');
//.populate('exercises').populate('exerciseType');
const WorkoutController = {
    async index(req, res) {
        // Workout.find({}).populate("workoutTypeId").populate('rounds').exec(function (err, data) {
        //     if (err) return handleError(err);

        //     async.forEach(data[0].rounds[0], function (item, callback) {
        //         exercises.populate(item.exercises, { "path": "exerciseType" }, function (err, output) {
        //             if (err) throw err; // or do something

        //             callback();
        //         });
        //     }, function (err) {
        //         res.json(data);
        //     });

        // });
        const workouts = await Workout.find().populate('workoutTypeId').populate('rounds');
        res.send(workouts);
    },
    async store(req, res) {

    },
    async show(req, res) {
        const workout = await Workout.findById(req.params.id);
        res.send(workout);
    },
    async update(req, res) {

    },
    async remove(req, res) {

    }
}

module.exports = WorkoutController;