import React from 'react'
import style from '../WorkoutsList.module.scss'

export const WorkoutsListItem = ({item}) => {
   return (
      <li className={style.item}>
         <h3>{item.title} </h3>
         <p>Workout type: <strong>{item.workoutType}</strong></p>
         <ul>
            {
               item.exercises.map(e => <li>
                  {e.id} <br/>
                  {e.exercise} <br/>
                  {e.rounds} <br/>
                  {e.repeats}
               </li>)
            }
         </ul>

      </li>
   )
}