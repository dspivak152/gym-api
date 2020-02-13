const mongoose = require('mongoose');

const workout = mongoose.Schema({
    name: {
        type: String,
        required: 'Please enter the name of the workout',
        unique: true
    },
    description: {
        type: String
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    workoutTypeId: { type: mongoose.Schema.Types.ObjectId, ref: 'WorkoutType' },
    rounds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Round' }],
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed', 'canceld']
        }],
        default: ['pending']
    }
}, { timestamps: true });

module.exports = mongoose.model('Workout', workout);