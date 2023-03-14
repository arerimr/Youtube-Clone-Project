// import dotenv from "dotenv"

const KEY = process.env.REACT_APP_YT_KEY;

// export function getVideos(input) {
//     return fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${input}&part=snippet&maxResults=15&key=AIzaSyDJc9oVPoQmbqFWiXrusPGchPNW2Bc9ngM`).then((res) => res.json())
// }


//Raydelys API

export function getVideos(input) {
    return fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${input}&part=snippet&maxResults=2&key=${KEY}`).then((res) => res.json())
}

// Will API

// export function getVideos(input) {
//     return fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${input}&part=snippet&maxResults=15&key=AIzaSyDJc9oVPoQmbqFWiXrusPGchPNW2Bc9ngM`).then((res) => res.json())
// }
