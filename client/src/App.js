import React, {useState, useEffect}      from 'react';
import {connect, Provider}               from "react-redux";
import {AddWorkoutForm}                  from "./AddWorkoutForm/AddWorkoutForm.jsx";
import {addWorkoutItem, getWorkoutsList} from "./redux/workoutsReducer.js";
import {store}                           from "./redux/redux-store.js";
import {compose}                         from "redux";

function App(props) {
   const [value, setValue] = useState('')
   useEffect(() => {
      props.getWorkoutsList()
   }, []);

  /* const onSubmit = (e) => {
      e.preventDefault()
      props.addWorkoutItem(value)
   }*/

   return (
      <div className="App">
         <AddWorkoutForm addWorkoutItem={props.addWorkoutItem}/>

         {/*<form onSubmit={onSubmit}>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
            <button type="submit">Send</button>
         </form>*/}

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

const WorkoutApp = (props) => {
   return (
      <Provider store={store}>
         <AppContainer/>
      </Provider>
   )
}

export default WorkoutApp;
