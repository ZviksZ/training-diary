const {Router} = require('express')
const Workout = require('../models/Workout')
const workout = Router()
workout.use('/workouts', function (req, res, next) {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
   next();
});

workout.get('/workouts', async (req, res) => {
   const workouts = await Workout.find({})
   res.send(workouts);
})

workout.post('/workouts', async (req, res) => {
   const workout = new Workout({
      title: req.body.title
   })
   await workout.save()
   await res.send(workout)
})




module.exports = workout