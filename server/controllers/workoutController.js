const { Workout } = require('../models/index');

const WorkoutController = {
    async index(req, res) {
        //const workouts = await Workout.find({}).deepPopulate('workoutTypeId rounds exercises exerciseType');
        //const workouts = await Workout.find({}).populate('workoutTypeId').populate('rounds').populate('rounds.exercises').populate('rounds.exercises.exerciseType');
        const workouts = await Workout.find()
            .populate({
                path: 'workoutTypeId'
            })
            .populate({
                path: 'rounds',
                populate: [{
                    path: 'exercises',
                    populate: {
                        path: 'exerciseType'
                    }
                }]
            })
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
