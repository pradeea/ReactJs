import React from "react";
import { connect } from "react-redux";

const Display = (data) => {
  return (
    <div>
      <h1>an demo check in Display</h1>
      <div>{data.name} </div>
      <div>{data.email}</div>
    </div>
  );
};

const MapStateToProps = (state) => {
  return { data: state.nameList };
};
export default connect(MapStateToProps)(Display);
