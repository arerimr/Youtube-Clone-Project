// import dotenv from "dotenv"

// const KEY = process.env.API_KEY

export function getVideos(input) {
    return fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${input}&part=snippet&maxResults=15&key=AIzaSyAwbN_SMJo2JY3tpXJdpU1vNo7PoGi4-Ew`).then((res) => res.json())
}