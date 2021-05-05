import axios from 'axios'

const KEY='AIzaSyCxgU-BXEwud5uf5YeeQRM4tdN_VO5Q40s';
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:10,
        key:KEY
        }
})