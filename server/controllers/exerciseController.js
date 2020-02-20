const { Exercise } = require('../models/index');

const ExecriseController = {
    async index(req, res) {
        const exercise = await Exercise.find().populate('exerciseType');
        res.send(exercise);
    },
    async store(req, res) {

    },
    async show(req, res) {
        const exercise = await Execrise.findById(req.params.id);
        res.send(exercise);
    },
    async update(req, res) {

    },
    async remove(req, res) {

    }
}

module.exports = ExecriseController;