import React from 'react'
import style from '../WorkoutsList.module.scss'

export const WorkoutsListItem = ({item}) => {
   return (
      <li>
         {item.title} <br/>
         {item.workoutType} <br/>
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