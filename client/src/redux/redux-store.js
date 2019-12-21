import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware                            from 'redux-saga';
import rootSaga                                        from '../sagas';
import workoutsReducer                                 from "./workoutsReducer.js";

let reducers = combineReducers({
   workouts: workoutsReducer,
})


const sagaMiddleware = createSagaMiddleware();


export const store = createStore(reducers, applyMiddleware(sagaMiddleware))

window.__store__ = store

sagaMiddleware.run(rootSaga)