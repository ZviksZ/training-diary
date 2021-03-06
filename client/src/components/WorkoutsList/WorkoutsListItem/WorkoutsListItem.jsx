import React from 'react'
import style from '../WorkoutsList.module.scss'

export const WorkoutsListItem = ({item, setActiveWorkout, deleteWorkout}) => {
   const chooseActive = () => {
      setActiveWorkout(item)
   }
   return (
      <li className={style.item}>
         <h3>{item.title} </h3>
         <button onClick={() => deleteWorkout(item._id)}>Delete</button>
         <p>Workout type: <strong>{item.workoutType}</strong></p>
         <ul>
            {
               item.exercises.map((e, i) => <li key={i}>
                  {e.id} <br/>
                  {e.exercise} <br/>
                  {e.rounds} <br/>
                  {e.repeats}                 
               </li>)
            }
         </ul>
         <button onClick={chooseActive}>
            Train now
         </button>
      </li>
   )
}