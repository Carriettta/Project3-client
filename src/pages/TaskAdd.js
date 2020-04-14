import React, { Component } from "react";
import axios from "axios";
import qs from "qs";
import { getUser } from "../utils/auth";

class TaskAdd extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    let user = getUser()
  }
  state = {
    task: {
      title: "",
      owner: ""
    },
  }
  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    axios({
      url: "http://localhost:3000/add",
      data: qs.stringify(this.state),
      method: "POST",
    })
      .then(() => {
        this.props.history.push("/tasks");
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }
  render() {
    return (
      <div>
        <h1>Add Task</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={this.state.value}
            onChange={this.handleInputChange}
          />
          <button type="submit">Add task</button>
        </form>
      </div>
    );
  }
}

export default TaskAdd;
