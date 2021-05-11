import React from 'react'
const View=(props)=>{    
   
    //
        const mappedImages= props.images.map((pic)=>{
            return <img src={pic.urls.regular} alt={pic.alt_description} class="img-thumbnail"></img>;
            
            
            
        })
        return(
            <div>
                {mappedImages}
                view check
            </div>
        );
    }
export default View;