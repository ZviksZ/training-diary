import React           from 'react'
import {isEmptyObject} from "../../utils";
import s               from './ActiveTraining.module.scss'

export const ActiveTraining = ({workout}) => {
   if (isEmptyObject(workout)) {
      return <h3 className={s.activeTitle}>Выберите тренировку</h3>
   }
   return (
      <div className={s.item} id={workout._id}>
         <h3 className={s.activeTitle}>{workout.title}</h3>
         <div>Workout type: {workout.workoutType}</div>
         {
            workout.exercises.map(e => {
               return <div id={e.id}>
                  <h5>{e.exercise}</h5>
                  <div>Rounds: {e.rounds}</div>
                  <div>Repeats: {e.repeats}</div>
               </div>
            })
         }
      </div>
   )
}
