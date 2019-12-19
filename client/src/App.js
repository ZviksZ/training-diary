import React, {useEffect}      from 'react';
import {connect, Provider}               from "react-redux";
import {AddWorkoutForm}                  from "./components/AddWorkoutForm/AddWorkoutForm.jsx";
import {addWorkoutItem, getWorkoutsList} from "./redux/workoutsReducer.js";
import {store}                           from "./redux/redux-store.js";
import {compose}                         from "redux";

function App(props) {
   useEffect(() => {
      props.getWorkoutsList()
   }, []);

   return (
      <div className="App">
         <AddWorkoutForm addWorkoutItem={props.addWorkoutItem}/>

         <ul>
            {
               props.workoutsList.map(item => {
                  return <li>{item.title}</li>
               })
            }
         </ul>
      </div>
   );
}

let mapStateToProps = (state) => {
   return {
      workoutsList: state.workouts.workoutsList,
   }
}

const AppContainer = compose(
   connect(mapStateToProps, {getWorkoutsList, addWorkoutItem}),
)(App);



const WorkoutApp = () => {
   return (
      <Provider store={store}>
         <AppContainer/>
      </Provider>
   )
}

export default WorkoutApp;
