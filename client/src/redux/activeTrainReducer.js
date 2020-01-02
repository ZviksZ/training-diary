const SET_ACTIVE = 'training-diary/active-training-reducer/SET_ACTIVE'


const initialState = {
   activeTrain: {}
}

const activeTrainReducer = (state = initialState, action) => {

   switch (action.type) {
      case SET_ACTIVE: {
         return {
            ...state,
            activeTrain: action.activeTrain,
         }
      }
      default:
         return state;
   }
}

//simple action creator
export const setWorkoutsList = (activeTrain) => ({type: SET_ACTIVE, activeTrain})

//saga action creator
export const addWorkoutItem = (title, workoutType, exercises) => ({type: ADD_WORKOUT_ITEM, title, workoutType, exercises});


export default activeTrainReducer