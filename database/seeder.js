require('./index');
const mongoose = require('mongoose');
const { ExerciseType } = require('../server/models');
const { Exercise } = require('../server/models');

async function seedExercisesTypes() {
  console.log('Seeding exercises to ' + mongoose.connection.name + '...');
  const types = [
    { name: 'EMOM' },
    { name: 'FOR TIME' },
    { name: 'ENDURANCE' }
  ];

  for (type of types) {
    var newType = new ExerciseType(type);
    await newType.save();
  }

  const a = await newType.find();
  console.log('types: ', a);
}

async function seedBooks() {
  console.log('Seeding books to ' + mongoose.connection.name + '...');

  const jkRowling = await Author.findOne({ name: 'JK Rowling' });
  const tonyRobbins = await Author.findOne({ name: 'Tony Robbins' });

  let harryPotter = new Book({ title: 'Harry Potter', author: jkRowling._id });
  let awakenGiant = new Book({ title: 'Awaken the Giant Within', author: tonyRobbins._id });

  await harryPotter.save();
  await awakenGiant.save();

  jkRowling.books.push(harryPotter);
  tonyRobbins.books.push(awakenGiant);

  await jkRowling.save();
  await tonyRobbins.save();
}

seedExercisesTypes();
//seedBooks();

