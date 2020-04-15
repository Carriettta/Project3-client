import React, { Component } from "react";
import { signup } from "../utils/auth";
import Navbar from "../components/Navbar";

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
      <>
        <Navbar />
        <div className="container is-fluid">
          <h1 className="title">Signup</h1>
          <form>
            <input
              type="text"
              name="username"
              placeholder="username"
              className="input"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="email"
              placeholder="email"
              className="input"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <button className="button" onClick={this.handleSignupClick}>
              Signup
            </button>
            {this.state.error && (
              <p className="has-text-danger">
                {this.state.error.message || "error"}
              </p>
            )}
          </form>
        </div>
      </>
    );
  }
}

export default Signup;
