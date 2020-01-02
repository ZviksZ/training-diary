import React, {useEffect}                       from 'react';
import {connect, Provider}                      from "react-redux";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {AddWorkoutForm}                         from "./components/AddWorkoutForm/AddWorkoutForm.jsx";
import {Loader}                                 from "./components/common/Loader/Loader.jsx";
import {LeftSidebar}                            from "./components/LeftSidebar/LeftSidebar.jsx";
import {WorkoutsList}                           from "./components/WorkoutsList/WorkoutsList.jsx";
import {setActiveWorkout}                       from "./redux/activeTrainReducer.js";
import {addWorkoutItem, getWorkoutsList}        from "./redux/workoutsReducer.js";
import {store}                                  from "./redux/redux-store.js";
import {compose}                                from "redux";


const App = props => {
   useEffect(() => {
      props.getWorkoutsList()
   }, []);

   return (
      <div className="App">
         
         <LeftSidebar/>
         <div className="app-wrapper-content">
            <div className="container">
               <Switch>
                  <Route exact path="/"
                         render={() => <Redirect from='/' to='/add'/>}/>
                  <Route path="/add" render={() =>  <AddWorkoutForm addWorkoutItem={props.addWorkoutItem}/>}/>

                  <Route path="/list" render={() =>  <WorkoutsList setActiveWorkout={props.setActiveWorkout} workoutsList={props.workoutsList}/>}/>
                  
                  
                  <Route path="/active" render={() =>  <div>{props.activeTrain.title}</div>}/>
                  <Route path="/history" render={() =>  <div><h1>history of trainings with time + btn-"train again"</h1></div>}/>
                  <Route path="/settings" render={() =>  <div><h1>settings</h1></div>}/>
                  <Route path="/timer" render={() => <div className="timer">TIMER</div>}/>

                  <Route render={() => <div>404 not found</div>}/>
               </Switch>               
            </div>            
         </div>
         
        
        {/* {
            props.isLoading ? <Loader/> : <WorkoutsList workoutsList={props.workoutsList}/>
         } */}        
      </div>
   );
}

let mapStateToProps = (state) => {
   return {
      workoutsList: state.workouts.workoutsList,
      isLoading: state.workouts.isLoading,
      activeTrain: state.active.activeTrain,
   }
}

const AppContainer = compose(
   connect(mapStateToProps, {getWorkoutsList, addWorkoutItem, setActiveWorkout}),
)(App);



const WorkoutApp = () => {
   return (
   <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
         <AppContainer/>
      </Provider>
   </BrowserRouter>
   )
}

export default WorkoutApp;
