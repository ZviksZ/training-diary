const SET_WORKOUTS = 'training-diary/workouts-reducer/SET_WORKOUTS'
const GET_WORKOUTS = 'training-diary/workouts-reducer/GET_WORKOUTS'
const ADD_WORKOUT_ITEM = 'training-diary/workouts-reducer/ADD_WORKOUT_ITEM'
const SET_WORKOUT_ITEM = 'training-diary/workouts-reducer/SET_WORKOUT_ITEM'
const DELETE_WORKOUT_ITEM = 'training-diary/workouts-reducer/DELETE_WORKOUT_ITEM'
const SET_DELETE_WORKOUT_ITEM = 'training-diary/workouts-reducer/SET_DELETE_WORKOUT_ITEM'

const SET_LOADING = 'training-diary/workouts-reducer/SET_LOADING'


const initialState = {
   workoutsList: [],
   isLoading: false
}

const workoutsReducer = (state = initialState, action) => {

   switch (action.type) {
      case SET_WORKOUTS: {
         return {
            ...state,
            workoutsList: action.workoutsList,
         }
      }
      case SET_LOADING: {
         return {
            ...state,
            isLoading: action.loading,
         }
      }
      case SET_WORKOUT_ITEM: {
         return {
            ...state,
            workoutsList: [...state.workoutsList, action.item]
         }
      }
      case SET_DELETE_WORKOUT_ITEM: {
         return {
            ...state,
            workoutsList: state.workoutsList.filter(i => i._id !== action.itemId)
         }
      }
      default:
         return state;
   }
}

//simple action creator
export const setWorkoutsList = (workoutsList) => ({type: SET_WORKOUTS, workoutsList})
export const setWorkoutItem = (item) => ({type: SET_WORKOUT_ITEM, item})
export const isLoading = (loading) =>({type: SET_LOADING, loading})
export const deleteWorkoutItem = (itemId) =>({type: SET_DELETE_WORKOUT_ITEM, itemId})

//saga action creator
export const getWorkoutsList = () => ({type: GET_WORKOUTS });
export const deleteWorkout = itemId => ({type: DELETE_WORKOUT_ITEM, itemId });
export const addWorkoutItem = (title, workoutType, exercises) => ({type: ADD_WORKOUT_ITEM, title, workoutType, exercises});


export default workoutsReducer