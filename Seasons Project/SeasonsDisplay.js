import React from "react";
import { Icon } from 'semantic-ui-react'
import "./SeasonDisplay.css"

const getSeason=(lat,month)=>{
    if(month>2 && month <9){
        return lat>0 ? "summer" : "winter";
    }
    else{
        return lat>0 ? "winter " : "summer";
    }
}

const SeasonDisplay=(props)=>{
    const season=getSeason(props.lat,new Date().getMonth());
    const text=season ==="winter" ? "Burr it is chilly" : "lets hit the beach";
    const icon=season==="winter" ? "snowflake" : "sun";
    
    return(
        
        <div className={`SeasonDisplay ${season}`}>
            {/* <i className={`${icon} icon`}>
            
            
            <i className={`${icon} icon`}/> */}

            <h1>{text}</h1>
            
            
            <Icon className='icon-left sun' size='massive' />
            <Icon className='icon-right sun' size='massive' />
            
            </div>
    );
}
export default SeasonDisplay;
