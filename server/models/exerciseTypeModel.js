const mongoose = require('mongoose');

const exerciseTypeModel = mongoose.Schema({ name: { type: String } }, { timestamps: true });

module.exports = mongoose.model('ExerciseType', exerciseTypeModel);
// For example : Pull ups, bench press. trusters
