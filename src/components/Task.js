import React, { Component } from "react";
import axios from "axios";

class Task extends Component {
  constructor(props) {
    super(props);
    this.handleDone = this.handleDone.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      task: {
        title: "",
        owner: "",
      },
    };
  }
  handleDone(event) {
    console.log("handleDone");
  }
  handleEdit(event) {
    console.log("handleEdit");
  }
  handleDelete(event) {
    axios
      .get(
        `${process.env.REACT_APP_api_base}/tasks/delete/${this.props.objectId}`
      )
      .then(() => {
        this.props.removeTaskFromState(this.props.objectId);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <span>{this.props.title}</span>
        <span onClick={this.handleDone}>Done</span>
        <span onClick={this.handleEdit}>Edit</span>
        <span onClick={this.handleDelete}>Delete</span>
      </div>
    );
  }
}

export default Task;
