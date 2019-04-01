import React, { Component } from "react";

export class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Log In</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
