import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Task from "../components/Task";

class TaskList extends Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {
    tasks: null,
  };
  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_api_base}/tasks`, { withCredentials: true })
      .then((response) => {
        this.setState({ tasks: response.data });
      })
      .catch((err) => {
        console.log("error error");
      });
  }
  render() {
    return (
      <div className="container is-fluid">
        <h1 className="title">Tasklist</h1>
        {this.state.tasks ? (
          this.state.tasks.map((task, i) => (
              <Task key={i} title={task.title} />
          ))
        ) : (
          <p>
            No saved tasks yet. <Link to="/add">Add a task!</Link>
          </p>
        )}
      </div>
    );
  }
}

export default TaskList;
