import React, { Fragment } from "react"
import Provider from "./provider"
import Context from "./context"
const Agents=()=>{
  return(
        <AgentsOne/>
  );
}
const AgentsOne=()=>{
  return(
        <AgentsTwo/>
  );
}
const AgentsTwo=()=>{
  return(
        <AgentsBond/>
  );
}
const AgentsBond=()=>{
  return(
        <Context.Consumer> 
                  {
                    (anything)=>(
                                <Fragment>
                                      <h3>AGENT INFO!!</h3>
                                      <p> mission name:{anything.mission.mname}</p>
                                      <h4>mission agent : {anything.mission.agent}</h4>
                                      <h2>mission status:{anything.mission.accept}</h2>
                                  </Fragment>
                               )
                  } 
         </Context.Consumer>
  );
}

const App=()=>{
  return(
    <div>
      <h1>CONTEXT API</h1>
      <Provider>
        <Agents/>
        </Provider>
      </div>
  );
}

export default App;