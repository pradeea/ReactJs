import React,{useEffect} from 'react'
import { Item } from 'semantic-ui-react'
import ScrollIndicator from './Scroll'

const VideoDetail =({videos})=>{

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const RenderList=videos.map(video=>{
        const VideoSrc=`https://www.youtube.com/embed/${video.id.videoId}`;
        return (
                <div >
                    <Item.Group divided>
                    <div className="ui embed">
                        <iframe src={VideoSrc}/>
                    </div>
                    <div className="header">
                        <i className="user icon"></i>
                        { video.snippet.title}    
                                           
                    </div>
                    <div className="content">
                        {video.snippet.description}    
                    </div>
                    </Item.Group>
                    
                </div>
        );
    })
    return(
        <div>
            {RenderList}
            
        </div>
    );
}
export default VideoDetail;