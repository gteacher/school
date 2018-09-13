import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GroupList from './GroupList';
import GroupEdit from './GroupEdit';



class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/groups/:id' component={GroupEdit}/>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/groups' exact={true} component={GroupList}/>
        </Switch>
      </Router>
    )
  }
}

export default App;