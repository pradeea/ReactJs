import React from 'react'
import axios from 'axios'
import View from './View'

class Demo extends React.Component{
    state={term:[]}
    componentDidMount=async()=>
    {   
       const response=await axios.get('https://api.unsplash.com/photos/?client_id=2icSeAlZdn_ucgnzHHsEI5NXLfyRoYHMbTavgflLy6g');
        this.setState({term:response.data})
        // console.log(this.state.term);    
    }
    
    //<div className="card-body">
    // {this.state.term.title}
                
    // <div className="card-title">
    // {this.state.term.id}
    // </div>
    // </div>
           
    
    render(){
        return(
            <div >
                Demo check
                <View images={this.state.term}/>
            </div>
        );
    }
}
export default Demo;