import Search from "./Search";
import VideoIndex from "./VideoIndex";
import { useState, useEffect } from "react";
import { getVideos } from "../Api/fetch";

export default function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [videos, setVideos] = useState([]);

  function handleTextChange(e) {
      setSearchInput(e.target.value);
    }

function handleSubmit(e) {
      e.preventDefault();
      
      getVideos(searchInput).then((res) => {
          setVideos(res);
        }); 

    setSearchInput("");
  }
//   console.log(videos.items);
    // useEffect(() => {           
    //     getVideos(searchInput).then((res) => {      
    //         setVideos(res);     
    //     });                                         
    // }, [searchInput]);          

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
