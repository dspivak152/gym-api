const { ExerciseType } = require('../models/index');

const ExecriseTypeController = {
    async index(req, res) {
        const exTypes = await ExerciseType.find();
        res.send(exTypes);
    },
    async store(req, res) {

    },
    async show(req, res) {
        const exType = await ExecriseType.findById(req.params.id);
        res.send(exType);
    },
    async update(req, res) {

    },
    async remove(req, res) {

    }
}

module.exports = ExecriseTypeController;