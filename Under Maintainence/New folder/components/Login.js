import React, { setState } from "react";
import nameAction from "../actions/index";
import { connect } from "react-redux";
import LoginMaintainence from "./LoginMaintainence";
import LoginWelcome from "./LoginWelcome";

class Login extends React.Component {
  state = { name: "" };
  onInputChange = (event) => {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    nameAction(this.state.name);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.onInputChange}
          value={this.state.name}
        />
        <input type="text" />
        <button type="submit" onSubmit={this.onFormSubmit}>
          Submit
        </button>
        <LoginMaintainence />
        <LoginWelcome />
      </div>
    );
  }
}

export default connect(nameAction)(Login);
