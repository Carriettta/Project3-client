import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class TaskList extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    tasks: null,
  }
  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_api_base}/tasks`)
      .then((response) => {
        this.setState({ tasks: response.data });
      })
      .catch((err) => {
        console.log("error error");
      });
  }
  render() {
    return (
      <div>
      <h1>Tasklist</h1>
        {this.state.tasks ? (
          this.state.tasks.map((task) => <p>{task.title}</p>)
        ) : (
          <p>No saved tasks yet. <Link to='/add'>Add a task!</Link></p>
        )}
      </div>
    );
  }
}

export default TaskList;
