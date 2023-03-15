
import axios from 'axios';
const KEY = process.env.REACT_APP_YT_KEY;


export function getVideos(input) {

return  axios.get(`https://youtube.googleapis.com/youtube/v3/search?q=${input}&part=snippet&maxResults=2&key=${KEY}`).then((res) => res.data)

    // return fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${input}&part=snippet&maxResults=2&key=${KEY}`).then((res) => res.json())
}

