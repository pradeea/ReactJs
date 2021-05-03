import React from 'react';
import {fetchStream} from '../../actions'
import {connect} from 'react-redux'

class StreamShow extends React.Component {
  componentDidMount(props){
    this.props.fetchStream(this.props.match.params.id);
  }
  render(){
          if(!this.props.stream)
          {
            return 'Loading'
          }
          // const {title,description}=this.props.stream;
          return (
                  <div>
                      <h1>{this.props.stream.title}</h1>
                      <h3>{this.props.stream.description}</h3>
                  </div>
          );
}
}
const mapStateToProps=(state,ownProps)=>{
  return{ stream:state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{fetchStream})(StreamShow);
