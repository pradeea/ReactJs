import React, { setState } from "react";
import nameAction from "../actions/index";
import { connect } from "react-redux";
import LoginMaintainence from "./LoginMaintainence";
import LoginWelcome from "./LoginWelcome";

class Login extends React.Component {
  onLoginChange = (event) => {
    this.props.onManage(event.target.value);
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.onLoginChange} />
        <button onClick={this.props.nameAction}>Submit</button>
        <LoginMaintainence />
        <LoginWelcome />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const finalData = ownProps.onStateHelp;
  return {
    nameAction: () => dispatch({ type: "NAME", payload: finalData })
  };
};

export default connect(null, mapDispatchToProps)(Login);
