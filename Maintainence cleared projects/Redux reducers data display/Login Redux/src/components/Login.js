import React,{useState} from 'react'
import nameAction from '../actions'
import {connect} from 'react-redux'
// const Login = ({song}) => {
//     const[name,setName]=useState("");
//     const[email,setEmail]=useState("");
//     const[password,setPassword]=useState("");
 
    const Login = ({data}) => {

        if(!data)
        {
          return<div>Better luck next time</div>
        }  
return (       
  <div>
      <h1>The Details:</h1>
      <p>//since it is the array we will use data[0]
          Name: {data[0].name}
          <br/>
          Email:{data[1].email}            
      </p>
  </div>

);
};

    // return (
    //     <div className="login">
    //         <div>{justCheck}</div>
    //         <div className="login__form">
    //             <h2>Login Here</h2>
    //             <input type="name"
    //                 placeholder="name" 
    //                 value={name}
    //                 onChange={(e)=>setName(e.target.value)}
    //             />
    //             <input
    //              type="email"
    //              placeholder="email"
    //              value={email}
    //              onChange={(e)=>setEmail(e.target.value)}
    //             />
    //             <input 
    //              type="password"
    //               placeholder="password"
    //               value={password}
    //               onChange={(e)=>setPassword(e.target.value)}  
    //             />
    //             <button
    //              type="button "
    //              className="btn btn-dark"
    //              onClick={nameAction(name)}
    //              >Submit</button>
    //         </div>
            
    //     </div>
    // )
// }
const mapStateToProps=(state)=>{
    return {data:state.nameList}
}

export default connect(mapStateToProps,{nameAction})(Login);

