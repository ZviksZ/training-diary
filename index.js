const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors');
const workoutRoutes = require('./routes/workout')

require('dotenv').config();

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(cors());
app.use(express.json());
app.use(workoutRoutes)

async function start() {
   try {
      await mongoose.connect(
         'mongodb+srv://viks:viks2332@cluster0-qldgg.mongodb.net/training-diary-db',
         /*'mongodb://localhost/training-diary-db',*/
         {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
         }, () => console.log('Database is connecting successfully'))

      app.listen(8080, () => {
         console.log('Server has been started...')
      })
   } catch (e) {
      console.log(e)
   }
}

start();

