import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Task from "../components/Task";
import Navbar from "../components/Navbar";
class TaskList extends Component {
  constructor(props) {
    super(props);
    this.removeTaskFromState = this.removeTaskFromState.bind(this);
    this.state = {
      tasks: null,
    };
  }

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_api_base}/tasks`, { withCredentials: true })
      .then((response) => {
        this.setState({ tasks: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  removeTaskFromState(objectId) {
    let tempTasks = [...this.state.tasks];
    let oneToDelete = tempTasks.findIndex((item) => {
      return item._id === objectId;
    });
    tempTasks.splice(oneToDelete, 1);
    this.setState({ tasks: tempTasks });
  }

  render() {
    return (
      <>
      <Navbar/>
      <div className="container is-fluid">
        <h1 className="title">Tasklist</h1>
        {this.state.tasks ? (
          this.state.tasks.map((task, i) => (
            <Task
              key={task._id}
              title={task.title}
              objectId={task._id}
              removeTaskFromState={this.removeTaskFromState}
            />
          ))
        ) : (
          <p>
            No saved tasks yet. <Link to="/add">Add a task!</Link>
          </p>
        )}
      </div>
      </>
    );
  }
}

export default TaskList;
