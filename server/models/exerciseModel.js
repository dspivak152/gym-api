const mongoose = require('mongoose');

const exerciseModel = mongoose.Schema({
    repets: { type: Number, max: 1000 },
    exerciseType: { type: mongoose.Schema.Types.ObjectId, ref: 'ExerciseType' }
},
    { timestamps: true });

module.exports = mongoose.model('Exercise', exerciseModel);

//Per every exercise there will be also the amount of repeates of that exercise for example : 10 pull ups, 20 situps
