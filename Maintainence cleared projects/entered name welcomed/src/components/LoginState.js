import React, { useState } from "react";
import { render } from "react-dom";
import Login from "./Login";

class LoginState extends React.Component {
  state = { name: "" };
  onInputChange = (data) => {
    this.setState({ name: data });
  };
  // helper = () => {
  //   const some = this.state.name;
  // };
  render() {
    return (
      <div>
        <Login onManage={this.onInputChange} onStateHelp={this.state.name} />
      </div>
    );
  }
}
export default LoginState;
