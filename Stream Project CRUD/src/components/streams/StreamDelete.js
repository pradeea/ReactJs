import React from 'react';
import Modal from '../Modal';
import {connect} from 'react-redux'
import {fetchStream,deleteStream} from '../../actions'
import history from "../../history"
import {Link} from 'react-router-dom' 

class StreamDelete extends React.Component{
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
  }
  renderAction(){
    const id=this.props.match.params.id;
   // const {id}=this.props.match.params
    return (
      <React.Fragment>
        <button 
          onClick={()=>this.props.deleteStream(id)} 
          className="negative ui button">
          Delete
        </button>
        <Link to={'/'} className="ui button">Cancel</Link>
      </React.Fragment>
    )
  }
  renderContent(){
    if(!this.props.stream){
      return 'Are you sure you wanna delete?'
    }
    return `Are you sure you want to delete the stream:${this.props.stream.title}`
  }
  render(){
  return (
    <div>
      StreamDelete
      <Modal 
      title="Delete"
      content={this.renderContent()}
      actions={this.renderAction()}
      onDismiss={()=>history.push('/')}
      />
    </div>
  );
}
}
const mapStateToProps=(state,ownProps)=>{
  return {stream:state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{fetchStream,deleteStream})(StreamDelete);
