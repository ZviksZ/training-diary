const {Schema, model} = require('mongoose')

const shema = new Schema({
   title: {
      type: String,
      required: true
   },
   workoutType: {
      type: String,
      required: true
   },
   exercises: {
      type: Array
   }
})

module.exports = model('Workout', shema)