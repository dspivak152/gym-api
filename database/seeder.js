require('./index');
const mongoose = require('mongoose');
const { ExerciseType } = require('../server/models');
const { Exercise } = require('../server/models');

async function seedExercisesTypes() {
  console.log('Seeding exercises types to ' + mongoose.connection.name + '...');
  const types = [
    { name: 'Pull ups' },
    { name: 'Truster' },
    { name: 'Snatch' }
  ];

  var newType = {};
  for (type of types) {
    newType = new ExerciseType(type);
    await newType.save();
  }
}

async function seedExercises() {
  console.log('Seeding exercises to ' + mongoose.connection.name + '...');

  const pullUpExType = await ExerciseType.findOne({ name: 'Pull ups' });
  const trusterExType = await ExerciseType.findOne({ name: 'Truster' });

  let pullUpEx = new Exercise({ repets: 10, exerciseType: pullUpExType._id });
  let trusterEx = new Exercise({ repets: 20, exerciseType: trusterExType._id });

  await pullUpEx.save();
  await trusterEx.save();

  // jkRowling.books.push(harryPotter);
  // tonyRobbins.books.push(awakenGiant);

  // await jkRowling.save();
  // await tonyRobbins.save();
}

//seedExercisesTypes();
seedExercises();

