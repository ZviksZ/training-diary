const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require("body-parser");
const workoutRoutes = require('./routes/workout')


const app = express()

app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(workoutRoutes)

async function start() {
   try {
      await mongoose.connect(
         'mongodb+srv://viks:viks2332@cluster0-qldgg.mongodb.net/workouts',
         {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
         })

      app.listen(8080, () => {
         console.log('Server has been started...')
      })
   } catch (e) {
      console.log(e)
   }
}

start();

