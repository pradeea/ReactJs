import React from "react";
import { connect } from "react-redux";

class Display extends React.Component{
  render(){
  return (
    <div>
      <h1>an demo check in Display</h1>
      <div> Name:{this.props.data[0].name}</div>
      <div>Email:{this.props.data[1].email}</div>
    </div>
  );
  };
};

const MapStateToProps = (state) => {
  return { data:state.nameList };
};
export default connect(MapStateToProps)(Display);
//this is an unnecessary component in this project
