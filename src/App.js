import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import CreateToDo from './pages/createTodo';
import AllToDo from './pages/allToDo';
import ToDoDetails from './pages/ToDoDetails';
import EditToDo from './pages/EditToDo';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Switch>
       <Route  path="/todos" component={CreateToDo}/>
       <Route exact path="/" component={AllToDo}/>
       <Route exact path="/" component={AllToDo}/>
       <Route exact path="/:id" component={ToDoDetails}/>
       <Route exact path="/edit/todo/:id" component={EditToDo}/>
       </Switch>
      </div>
    );
  }
}

export default App;
