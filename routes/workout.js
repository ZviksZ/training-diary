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
      title: req.body.title,
      workoutType: req.body.workoutType,
      exercises: req.body.exercises
   })
   await workout.save()
   await res.send(workout)
})


/*router.put("/muggers/:id", (req, res)=>{
   Mugger.findByIdAndUpdate({_id: req.params.id}, req.body)
      .then(() => {
         Mugger.findOne({_id: req.params.id})
            .then(mugger => {
               res.send(mugger);
            });
      });
});

router.delete("/muggers/:id", (req, res)=>{
   Mugger.deleteOne({_id: req.params.id})
      .then(mugger => {
         res.send(mugger);
      });
});*/



module.exports = workout