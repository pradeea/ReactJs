import React from 'react'
import axios from 'axios'
class Demo extends React.Component{
    state={term:''}
    componentDidMount=async()=>{
    
       const response=await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        this.setState({term:response.data})
        console.log(this.state.term);
    
}
           
    
    render(){
        return(
            <div class="card">
                <div class="card-body">
                {this.state.term.id}
                
                <div class="card-title">
                {this.state.term.title}
                </div>
                </div>
            </div>
        );
    }
}
export default Demo;