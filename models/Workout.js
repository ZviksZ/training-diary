const {Schema, model} = require('mongoose')

const shema = new Schema({
   title: {
      type: String,
      required: true
   },
})

module.exports = model('Workout', shema)