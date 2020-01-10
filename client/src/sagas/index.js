import {put, takeLatest, call}                                         from 'redux-saga/effects';
import {deleteWorkoutItem, isLoading, setWorkoutItem, setWorkoutsList} from "../redux/workoutsReducer.js";
import * as axios                                                      from "axios";

const instance = axios.create({
   baseURL: 'http://localhost:8080/',
})

function* fetchSaga() {
   yield put(isLoading(true))
   try {
      const response = yield call(instance.get, `workouts`);

      if (response.statusText === 'OK') {
         yield put(isLoading(false))
         yield put(setWorkoutsList(response.data))
      }
   } catch (e) {
      alert('Загрузка не удалась')
   }
}

function* postWorkoutSaga(action) {
   yield put(isLoading(true))
   try {
      const response = yield call(instance.post, `workouts`, {
         title: action.title,
         workoutType: action.workoutType,
         exercises: action.exercises
      });
      if (response.statusText === 'OK') {
         yield put(isLoading(false))
         yield put(setWorkoutItem(response.data))
      }

   } catch (e) {
      alert('Загрузка не удалась')
   }
}

function* deleteWorkoutSaga(action) {
   try {
      const response = yield call(instance.delete, `workouts/${action.itemId}`);

      if (response.statusText === 'OK') {
         yield put(deleteWorkoutItem(action.itemId))
      }
   } catch (e) {
      alert('Загрузка не удалась')
   }
}


export default function* rootSaga() {
   yield takeLatest('training-diary/workouts-reducer/GET_WORKOUTS', fetchSaga)
   yield takeLatest('training-diary/workouts-reducer/ADD_WORKOUT_ITEM', postWorkoutSaga)
   yield takeLatest('training-diary/workouts-reducer/DELETE_WORKOUT_ITEM', deleteWorkoutSaga)
}