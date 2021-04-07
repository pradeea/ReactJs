import React from "react"
import unsplash from "../api/unsplash"
import SearchBar from "./SearchBar"
import ImageList from "./ImageList"

class App extends React.Component{
    state={Images:[]}
     onSearchSubmit= async (something)=>{
        
        const response=await unsplash.get(
            // 'https://api.unsplash.com/search/photos',
            '/search/photos',
            {params:{query:something},
            // headers:{Authorization: 'Client-ID 2icSeAlZdn_ucgnzHHsEI5NXLfyRoYHMbTavgflLy6g'}
        })
        
        this.setState({Images:response.data.results});
            
    }
    render(){
    return(
        <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar onsubmit={this.onSearchSubmit}/>
            
            <ImageList images={this.state.Images}/>
        </div>
    );
}
};
export default App;