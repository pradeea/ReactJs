import React,{useState} from "react";
import PackageContext from "./context";

const Provider=props=>{

        const [mission,setMission]=useState({
                                            mname:"GO TO RUSSIA!!",
                                            agent:"007",
                                            accept:"Not Accepted"
        });

    return(

        <PackageContext.Provider value={{mission,setMission}}>
                {props.children}
            </PackageContext.Provider>

    );
};

export default Provider;