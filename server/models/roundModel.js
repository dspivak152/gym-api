const mongoose = require('mongoose');

const roundModel = mongoose.Schema({
    repets: { type: Number, max: 1000 },
    exercises: [{ type: mongoose.Schema.Types.Array, ref: 'Exercise' }]
}, { timestamps: true });

module.exports = mongoose.model('Round', roundModel);

// this object means : 3 rounds of 10 pull ups, 