import React              from 'react'
import {WorkoutsListItem} from "./WorkoutsListItem/WorkoutsListItem.jsx";
import style from './WorkoutsList.module.scss'

export const WorkoutsList = ({workoutsList,setActiveWorkout, deleteWorkout}) => {
   return (
      <ul className={style.workoutsList}>
         {
            workoutsList.map(item => {
               return <WorkoutsListItem key={item._id} 
                                        item={item}
                                        deleteWorkout={deleteWorkout}
                                        setActiveWorkout={setActiveWorkout}/>
            })
         }
      </ul>
   )
}