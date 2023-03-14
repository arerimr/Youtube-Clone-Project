// import dotenv from "dotenv"

// const KEY = process.env.API_KEY

//Raydelys API

export function getVideos(input) {
    return fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${input}&part=snippet&maxResults=15&key=AIzaSyDtHmcraiKzBF7sfI2HKZuQPhokr-mL0UY`).then((res) => res.json())
}

// Will API

// export function getVideos(input) {
//     return fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${input}&part=snippet&maxResults=15&key=AIzaSyDJc9oVPoQmbqFWiXrusPGchPNW2Bc9ngM`).then((res) => res.json())
// }

export function getOneVideo(id) {
    return fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyDtHmcraiKzBF7sfI2HKZuQPhokr-mL0UY`).then((res) => res.json())
  }