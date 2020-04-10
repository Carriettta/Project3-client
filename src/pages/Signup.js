import React, { Component } from "react";
import { signup } from "../utils/auth";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSignupClick = this.handleSignupClick.bind(this);
  }
  state = {
    user: {
      username: "",
      password: "",
      email: "",
    },
    error: null,
  };
  handleInputChange(e) {
    let userCopy = { ...this.state.user };
    userCopy[e.target.name] = e.target.value;
    this.setState({
      user: userCopy,
    });
  }
  handleSignupClick(e) {
    e.preventDefault();
    signup(this.state.user)
      .then((reponse) => {
        this.setState(
          {
            error: null,
          },
          () => {
            this.props.history.push("/tasks");
          }
        );
      })
      .catch((error) => {
        this.setState({ error: error.response && error.response.data });
      });
  }

  render() {
    return (
      <div>
      <h1>Signup</h1>
      <form>
        <input
          onChange={this.handleInputChange}
          value={this.state.username}
          className="input"
          name="username"
          type="text"
          placeholder="username"
        />
        <input
          onChange={this.handleInputChange}
          value={this.state.password}
          className="input"
          name="password"
          type="password"
          placeholder="password"
        />
        <input
          onChange={this.handleInputChange}
          value={this.state.email}
          className="input"
          name="email"
          type="text"
          placeholder="email"
        />
        <button className="is-primary button" onClick={this.handleSignupClick}>
          Signup
        </button>
        {this.state.error && (
          <p className="has-text-danger">
            {this.state.error.message || "error"}
          </p>
        )}
      </form>
      </div>
    );
  }
}

export default Signup;
