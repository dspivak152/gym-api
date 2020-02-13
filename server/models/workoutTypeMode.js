const mongoose = require('mongoose');

const workoutTypeModel = mongoose.Schema({ name: { type: String } }, { timestamps: true });

module.exports = mongoose.model('WorkoutType', workoutTypeModel);