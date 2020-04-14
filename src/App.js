import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar'
import Signup from './pages/Signup';
import Login from './pages/Login';
import TaskList from './pages/TaskList'
import TaskAdd from './pages/TaskAdd'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_api_base}/name`)
      .then((response) => {
        this.setState({ person: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        {/* {this.state.person ? (
          <h1>{this.state.person.name}</h1>
        ) : (
          <h1>Loading...</h1>
        )} */}
        <Navbar/>
        <Switch>
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/tasks' component={TaskList} />
          <Route exact path='/add' component={TaskAdd} />
        </Switch>
      </div>
    );
  }
}

export default App;
