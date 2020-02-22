require('./index');
const mongoose = require('mongoose');
const { ExerciseType } = require('../server/models');
const { Exercise } = require('../server/models');
const { Round } = require('../server/models/');
const { Workout } = require('../server/models');
const { WorkoutType } = require('../server/models');

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

async function seedRound() {
  console.log('Seeding rounds to ' + mongoose.connection.name + '...');
  const pullUpEx = await Exercise.findById({ _id: '5e510d3dc3b1850bff736775' });
  const pullTrusterEx = await Exercise.findById({ _id: '5e510d3dc3b1850bff736776' });

  let round1 = new Round({ repets: 1, exercises: [pullUpEx, pullTrusterEx] });

  await round1.save();
}

async function seedWorkoutType() {
  console.log('Seeding workout type to ' + mongoose.connection.name + '...');
  const types = [
    { name: 'EMOM' },
    { name: 'FOR TIME' },
    { name: 'OPEN GYM' }
  ];
  for (type of types) {
    newType = new WorkoutType(type);
    await newType.save();
  }

}

async function seedWorkout() {
  console.log('Seeding workout to ' + mongoose.connection.name + '...');
  const round = await Round.findById({ _id: '5e510fe578cdf20cfa787588' });
  const workoutType = await WorkoutType.findOne({ name: 'FOR TIME' })
  let completeWorkout = new Workout({ name: 'Filthy fifthy', description: 'no text', workoutTypeId: workoutType._id, rounds: round });

  await completeWorkout.save();
}

//seedExercisesTypes();
//seedExercises();
//seedRound();
//seedWorkoutType();
seedWorkout();

