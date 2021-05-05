import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../api/youtube'
import axios from 'axios'
import VideoDetail from './VideoDetail'
import Scroll from './Scroll'


class App extends React.Component{
    state={videos:[],selectedVideo:null}
    onTermSubmit=async(term)=>{
        const response=await youtube.get('/search',{
            params:{
                q:term
            }
        })
        console.log(response);
        this.setState({
            videos:response.data.items,
            selectedVideo:response.data.items[0]
        })
    }    
    render(){
    return (
            <div>
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoDetail videos={this.state.videos}/>  
                <Scroll showBelow={250} />           
                {/* <VideoPreview videos={this.state.videos}/> */}
            </div>
        );
}
}
export default App;