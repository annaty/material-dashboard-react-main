/* eslint-disable react/no-unused-class-component-methods */
import React from "react";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      psw: "",
    };

    this.request = new Request("http://localhost:5000/api", {
      method: "post",
      body: JSON.stringify(this.state),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });

    this.handleOnChangeEmail = (e) => {
      this.email = e;
    };

    this.handleOnChangePassword = (e) => {
      this.pw = e;
    };

    this.handleOnSubmit = (e) => {
      fetch(this.request)
        .then((res) => {
          if (res.status === 200) {
            console.log(e);
            return res.json();
          }
          return "hello";
        })
        .catch((error) => error);
    };
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="email"
            name="email"
            placeholder="email..."
            required
            onChange={this.handleOnChangeEmail}
          />
          <input
            type="password"
            name="psw"
            placeholder="password..."
            required
            onChange={this.handleOnChangePassword}
          />
          <button type="submit" onSubmit={this.handleOnSubmit}>
            Log In
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
