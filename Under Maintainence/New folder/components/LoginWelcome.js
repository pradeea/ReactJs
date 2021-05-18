import React from "react";
import { connect } from "react-redux";

const LoginWelcome = ({ data }) => {
  return (
    <div>
      <h2>Hello Mr:{data}</h2>
    </div>
  );
};
const MapStateToProps = (state) => {
  return { data: state.login };
};
export default connect(MapStateToProps)(LoginWelcome);
