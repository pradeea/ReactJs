import React from "react";
import { connect } from "react-redux";

const LoginMaintainence = ({ data }) => {
  if (!data) {
    return <div>Better luck next time</div>;
  }
  return (
    <div>
      <h1>Site Maintained By:</h1>
      <h2>Name: {data[0].name}</h2>
      <h3>From: {data[1].city}</h3>
    </div>
  );
};
const MapStateToProps = (state) => {
  return { data: state.name };
};
export default connect(MapStateToProps)(LoginMaintainence);
