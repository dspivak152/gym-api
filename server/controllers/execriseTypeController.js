const { ExerciseType } = require('../models/index');

const ExecriseTypeController = {
    async index(req, res) {
        const exTypes = await ExerciseType.find();
        res.send(exTypes);
    },
    async store(req, res) {
        //First check if there is any type to lower case exists, if not then create new type
        const seachredItem = await ExerciseType.find({ name: req.body.name });

        if (seachredItem.length > 0) {
            console.log(seachredItem);
            res.send(seachredItem[0]);
        } else {
            var newType = new ExerciseType({ name: 'Row' });
            newType.save(function (err, type) {
                if (err) return console.error(err);
                console.log(type.name + " saved to exercise types collection.");
                res.send(type.name);
            });
        }
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