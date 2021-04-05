import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import 'semantic-ui-css/semantic.min.css'
import Spinner from "./Spinner"

// const App=()=>{
    // window.navigator.geolocation.getCurrentPosition(
    //     position=>console.log(position),
    //     err=>console.log(err)
    // )
//     return(
//         <div>HELLO</div>
//     );
// }
class App extends React.Component{
    // constructor(props){
    //     super(props);
    //     //this is the only time we directly assign to this.state
    //     this.state={lat:null,errMessage:''};

    state={lat:null,errMessage:''};
       
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position=>this.setState({lat:position.coords.latitude}),
            err=>this.setState({errMessage:err.message})
        );
        
    }
    componentDidUpdate(){
        console.log("my component just updated and it re-rendered");
    }

    renderContent(){if(this.state.errMessage && !this.state.lat){
        return <div>Error: {this.state.errMessage}</div>
        }
            if(!this.state.errMessage && this.state.lat){
                return <SeasonDisplay lat={this.state.lat}/>
            }
    return <Spinner message={'Please accept the location Request'}/>

    }
    render(){
        return <div className="border-red">{this.renderContent()}</div>
        
        
        
    }   
}

ReactDom.render(<App/>,document.querySelector("#root"));