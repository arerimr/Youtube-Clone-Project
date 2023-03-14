import Search from "./Search";
import { useState, useEffect } from "react";


export default function Home() {
  const [videos, setVideos] = useState([]);

  //   console.log(videos.items);
  // useEffect(() => {
  //     getVideos(searchInput).then((res) => {
  //         setVideos(res);
  //     });
  // }, [searchInput]);

  return (
    <div className="home">
      <Search />
    </div>
  );
}
