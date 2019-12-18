const SET_WORKOUTS = 'training-diary/workouts-reducer/SET_WORKOUTS'
const GET_WORKOUTS = 'training-diary/workouts-reducer/GET_WORKOUTS'
const ADD_WORKOUT_ITEM = 'training-diary/workouts-reducer/ADD_WORKOUT_ITEM'
const SET_WORKOUT_ITEM = 'training-diary/workouts-reducer/SET_WORKOUT_ITEM'

const initialState = {
   workoutsList: []
}

const workoutsReducer = (state = initialState, action) => {

   switch (action.type) {
      case SET_WORKOUTS: {
         return {
            ...state,
            workoutsList: action.workoutsList,
         }
      }
      case SET_WORKOUT_ITEM: {
         return {
            ...state,
            workoutsList: [...state.workoutsList, action.item]
         }
      }
      default:
         return state;
   }
}

//simple action creator
export const setWorkoutsList = (workoutsList) => ({type: SET_WORKOUTS, workoutsList})
export const setWorkoutItem = (item) => ({type: SET_WORKOUT_ITEM, item})


//saga action creator
export const getWorkoutsList = () => ({type: GET_WORKOUTS });
export const addWorkoutItem = (title) => ({type: ADD_WORKOUT_ITEM, title});


export default workoutsReducer