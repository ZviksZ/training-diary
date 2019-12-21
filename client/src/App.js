import React, {useEffect}                       from 'react';
import {connect, Provider}                      from "react-redux";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {AddWorkoutForm}                         from "./components/AddWorkoutForm/AddWorkoutForm.jsx";
import {Loader}                                 from "./components/common/Loader/Loader.jsx";
import {LeftSidebar}                            from "./components/LeftSidebar/LeftSidebar.jsx";
import {addWorkoutItem, getWorkoutsList}        from "./redux/workoutsReducer.js";
import {store}                                  from "./redux/redux-store.js";
import {compose}                                from "redux";

function App(props) {
   useEffect(() => {
      props.getWorkoutsList()
   }, []);

   return (
      <div className="App">
         <LeftSidebar/>
         
         <Switch>
            <Route exact path="/"
                   render={() => <Redirect from='/' to='/add'/>}/>
            <Route path="/add" render={() =>  <AddWorkoutForm addWorkoutItem={props.addWorkoutItem}/>}/>
            <Route path="/add2" render={() =>  <div>add2</div>}/>

            <Route render={() => <div>404 not found</div>}/>
         </Switch>
        
         {
            props.isLoading ? <Loader/> : <ul>
               {
                  props.workoutsList.map(item => {
                     return <li>
                        {item.title} <br/>
                        {item.workoutType} <br/>
                        <ul>
                           {
                              item.exercises.map(e => <li>
                                 {e.id} <br/>
                                 {e.exercise} <br/>
                                 {e.rounds} <br/>
                                 {e.repeats}
                              </li>)
                           }
                        </ul>

                     </li>
                  })
               }
            </ul> 
         }
         
      </div>
   );
}

let mapStateToProps = (state) => {
   return {
      workoutsList: state.workouts.workoutsList,
      isLoading: state.workouts.isLoading,
   }
}

const AppContainer = compose(
   connect(mapStateToProps, {getWorkoutsList, addWorkoutItem}),
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
