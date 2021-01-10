const { ExerciseType } = require('../models/index');

const ExecriseTypeController = {
    async index(req, res) {
        const exTypes = await ExerciseType.find();
        res.send(exTypes);
    },
    async store(req, res) {
        const seachredItem = await ExerciseType.find({ name: req.body.name });

        if (seachredItem.length > 0) {
            res.send(seachredItem[0]);
        } else {
            var newType = new ExerciseType({ name: req.body.name });
            newType.save(function (err, type) {
                if (err) return console.error(err);
                console.log(type.name + " saved to exercise types collection.");
                res.send(type.name);
            });
        }
    },
    async show(req, res) {
        const exType = await ExerciseType.findById(req.params.id);
        res.send(exType);
    },
    async update(req, res) {
        const exType = await ExerciseType.findById(req.params.id);
        exType.name = req.body.name;
        exType.save(function (err, type) {
            if (err) return console.error(err);
            console.log(type.name + " update to exercise types collection.");
            res.send(type.name);
        });
    },
    async removeOne(req, res) {
        await ExerciseType.findByIdAndDelete(req.params.id, function (err) {
            if (err) console.error(err);
            res.send(true);
        });
    }
}

module.exports = ExecriseTypeController;