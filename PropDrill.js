import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";

const Child=(props)=>{
  return(
          <div>
            <h2>CHILD:{props.brand}</h2>
            <GrandChild berald={props.brand}/>
            </div>
  );
}
const GrandChild=(props)=>{
  return(
          <div>
            <h3>Grand CHILD:{props.berald}</h3>
            </div>
  );
}

const App=() =>{
  const [brandName]=useState("Amazon")
  return (
   <div>
      HELLO
      <Child brand={brandName}/>
    </div>

  );
}
export default App;
