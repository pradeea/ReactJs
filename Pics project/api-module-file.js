//this is an new code in the api module
import axios from "axios";

const KEY='AIzaSyCxgU-BXEwud5uf5YeeQRM4tdN_VO5Q40s';
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
            part:'snippet',
            maxResults:5,
            key:KEY

    }
});

//after this u need to write the followig code in the app.js
//in below q is nothing but the query
onTermSubmit=(term)=>{
        youtube.get('/search',{
            params:{
                q:term
            }
        })
    }
