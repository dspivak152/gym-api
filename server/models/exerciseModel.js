const mongoose = require('mongoose');

const exerciseModel = mongoose.Schema({
    repets: { type: Number, max: 1000 },
    exerciseType: { type: mongoose.Schema.Types.ObjectId, ref: 'ExerciseType' }
},
    { timestamps: true });

module.exports = mongoose.model('Exercise', exerciseModel);
