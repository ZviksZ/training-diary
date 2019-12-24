import React              from 'react'
import {WorkoutsListItem} from "./WorkoutsListItem/WorkoutsListItem.jsx";
import style from './WorkoutsList.module.scss'

export const WorkoutsList = ({workoutsList}) => {
   return (
      <ul className={style.workoutsList}>
         {
            workoutsList.map(item => {
               return <WorkoutsListItem key={item._id} item={item}/>
            })
         }
      </ul>
   )
}