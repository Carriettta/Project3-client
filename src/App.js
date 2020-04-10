import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import {Switch, Route} from "react-router-dom";
import Signup from "./pages/Signup";

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
        console.log(response)
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        {this.state.person ? (
          <h1>{this.state.person.name}</h1>
        ) : (
          <h1>Loading...</h1>
        )}
        <Switch>
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </div>
    );
  }
}

export default App;
