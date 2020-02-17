require('./index');
const mongoose = require('mongoose');
const { ExerciseType } = require('../server/models');
const { Exercise } = require('../server/models');

async function seedExercisesTypes() {
  console.log('Seeding exercises to ' + mongoose.connection.name + '...');
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

  const a = await newType.find();
  console.log('types: ', a);
}

async function seedExercises() {
  console.log('Seeding exercises to ' + mongoose.connection.name + '...');

  const emom = await ExerciseType.findOne({ name: 'EMOM' });
  const forTime = await ExerciseType.findOne({ name: 'FOR TIME' });

  let harryPotter = new Exercise({ title: 'Harry Potter', author: jkRowling._id });
  let awakenGiant = new Exercise({ title: 'Awaken the Giant Within', author: tonyRobbins._id });

  await harryPotter.save();
  await awakenGiant.save();

  jkRowling.books.push(harryPotter);
  tonyRobbins.books.push(awakenGiant);

  await jkRowling.save();
  await tonyRobbins.save();
}

seedExercisesTypes();
//seedBooks();

