import Search from "./Search";
import VideoIndex from "./VideoIndex";
import { useState, useEffect } from "react";
import { getVideos } from "../Api/fetch";

export default function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [videos, setVideos] = useState([]);

  function handleTextChange(e) {
    let val = e.target.value;
    const result = val.length ? filterVideo(val, videos) : videos;
    setSearchInput(val);
    setVideos(result);
  }

  function filterVideo(searchInput, videos) {
    return videos.filter((video) => {
      return video.title.toLowerCase().match(searchInput.toLowerCase());
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let videoSearch = e.target.value;
    console.log(videoSearch);
    getVideos().then((res) => {
      setVideos(res);
    });

    // setSearchInput("");
  }

  //   useEffect(() => {
  //     getVideos()
  //       .then((res) => {

  //         setVideos(res);
  //         // console.log(videos)
  //         // setAllMovies(res);
  //         // setLoadingError(false);
  //       })
  //       .catch((error) => {
  //         // setLoadingError(true);
  //       });
  //   }, [searchInput]);

  return (
    <div className="home">
      <Search
        searchInput={searchInput}
        handleTextChange={handleTextChange}
        handleSubmit={handleSubmit}
      />
      <VideoIndex videos={videos} />
    </div>
  );
}
