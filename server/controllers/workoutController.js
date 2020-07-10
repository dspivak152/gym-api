const { Workout } = require('../models/index');

const WorkoutController = {
    async index(req, res) {
        //const workouts = await Workout.find({}).deepPopulate('workoutTypeId rounds exercises exerciseType');
        //const workouts = await Workout.find({}).populate('workoutTypeId').populate('rounds').populate('rounds.exercises').populate('rounds.exercises.exerciseType');
        const workouts = await Workout.find({})
            .populate({ path: 'workoutTypeId' })
            .populate({
                path: 'rounds', model: 'Round', populate:
                {
                    path: 'exercises', model: 'Exercise', populate:
                        { path: 'exerciseType', model: 'ExerciseType' }
                }
            })
        //.populate({ path: 'rounds exercises exerciseType' })
        //.populate({ path: 'rounds.exercises.exerciseType' })

        res.send(workouts);
        // const workouts = Workout.find({}).populate('workoutTypeId').
        //     populate('rounds').
        //     populate({ path: 'rounds.exercises' }).
        //     populate({ path: 'rounds.exercises.exerciseType' })
        // exec(function (err, data) {
        //     if (err) return handleError(err);
        //     console.log('The workout is %s', data);
        // })
        //res.send(workouts);
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
