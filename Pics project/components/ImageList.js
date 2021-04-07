import React from 'react'
import "./ImageList.css"

const ImageList=(props)=>{
    const mappedImages=props.images.map((pic)=>{
                return <img alt={pic.description} key={pic.id}src={pic.urls.regular}/>
    })
    return(
        
        <div className="image-list">{mappedImages}</div>
    );
}
export default ImageList;