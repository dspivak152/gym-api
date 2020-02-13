const mongoose = require('mongoose');

const exerciseTypeModel = mongoose.Schema({
    name: {
        type: String,
        required: '{PATH} is required!'
    },
}, { timestamps: true });

module.exports = mongoose.model('ExerciseType', exerciseTypeModel);
