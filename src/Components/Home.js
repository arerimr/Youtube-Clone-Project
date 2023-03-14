import Search from "./Search";
import { useState, useEffect } from "react";


export default function Home() {
  const [videos, setVideos] = useState([]);


  return (
    <div className="home">
      <Search />
    </div>
  );
}
