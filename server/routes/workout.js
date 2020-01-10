const {Router} = require('express')
const Workout = require('../models/Workout')
const workout = Router()


workout.get('/workouts', async (req, res) => {
   const workouts = await Workout.find({})
   res.send(workouts);
})

workout.post('/workouts', async (req, res) => {
   const workout = new Workout({
      title: req.body.title,
      workoutType: req.body.workoutType,
      exercises: req.body.exercises
   })
   await workout.save()
   await res.send(workout)
})

workout.delete("/workouts/:id", async (req, res)=>{
   const message = await Workout
      .findByIdAndRemove(req.params.id)
      .then(() => 'Workout deleted');

   res.json({ message });
});

/*router.put("/muggers/:id", (req, res)=>{
   Mugger.findByIdAndUpdate({_id: req.params.id}, req.body)
      .then(() => {
         Mugger.findOne({_id: req.params.id})
            .then(mugger => {
               res.send(mugger);
            });
      });
});*/



module.exports = workout